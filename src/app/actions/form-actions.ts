
'use server';

import { z } from 'zod';

const consultationSchema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  email: z.string().email('Invalid email address'),
  mobilePhone: z.string().min(10, 'Invalid phone number'),
  businessName: z.string().min(1, 'Business name is required'),
  websiteUrl: z.string().url('Invalid URL').optional().or(z.literal('')),
  qluxPlan: z.string().min(1, 'Please select a plan'),
  country: z.string().min(1, 'Country is required'),
  receiveEmails: z.boolean(),
});

const contactSchema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  email: z.string().email('Invalid email address'),
  jobTitle: z.string().optional(),
  phone: z.string().min(1, 'Phone number is required'),
  companyName: z.string().min(1, 'Company name is required'),
  businessType: z.string().min(1, 'Please select a business type'),
  otherBusinessType: z.string().optional(),
  city: z.string().min(1, 'City is required'),
  numLocations: z.string().min(1, 'Number of locations is required'),
  managementType: z.string().min(1, 'This field is required'),
  bestDayToContact: z.string().min(1, 'Please select a day'),
  bestTimeToCall: z.string().min(1, 'Please select a time'),
  details: z.string().optional(),
}).refine(data => {
    if (data.businessType === 'Other') {
        return data.otherBusinessType && data.otherBusinessType.length > 0;
    }
    return true;
}, {
    message: 'Please specify your business type',
    path: ['otherBusinessType'],
});


type FormState = {
  message: 'success' | 'error' | null;
  error?: string;
  errors?: {
    [key: string]: string[] | undefined;
  }
};

const TO_EMAIL = 'webinquiry@qirrus.com';
const FROM_EMAIL = 'no-reply@qirrus.com';

async function sendEmail(subject: string, html: string): Promise<FormState> {
  const apiKey = process.env.SENDGRID_API_KEY;

  if (!apiKey) {
    console.error('SENDGRID_API_KEY is not set. Email not sent.');
    return { message: 'error', error: 'Email service is not configured on the server.' };
  }

  const msg = {
    personalizations: [{ to: [{ email: TO_EMAIL }] }],
    from: { email: FROM_EMAIL, name: 'Qirrus Inquiry' },
    subject: subject,
    content: [{ type: 'text/html', value: html }],
  };

  try {
    const response = await fetch('https://api.sendgrid.com/v3/mail/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify(msg),
    });

    if (!response.ok) {
      const errorBody = await response.json();
      console.error('SendGrid error:', errorBody);
      return { message: 'error', error: `Failed to send email. Status: ${response.status}` };
    }

    return { message: 'success' };
  } catch (error: any) {
    console.error('Fetch to SendGrid failed:', error);
    return { message: 'error', error: 'Failed to send email.' };
  }
}


export async function submitConsultationAction(prevState: FormState, formData: FormData): Promise<FormState> {
  const dataToValidate = {
    firstName: formData.get('firstName'),
    lastName: formData.get('lastName'),
    email: formData.get('email'),
    mobilePhone: formData.get('mobilePhone'),
    businessName: formData.get('businessName'),
    websiteUrl: formData.get('websiteUrl'),
    qluxPlan: formData.get('qluxPlan'),
    country: formData.get('country'),
    receiveEmails: formData.get('receiveEmails') === 'on',
  };
  
  const validatedFields = consultationSchema.safeParse(dataToValidate);

  if (!validatedFields.success) {
    const fieldErrors = validatedFields.error.flatten().fieldErrors;
    return {
      message: 'error',
      error: 'Invalid form data. Please check your entries.',
      errors: fieldErrors,
    };
  }

  const { data } = validatedFields;
  const subject = 'New Consultation Request';
  const html = `
    <h2>New Consultation Form Submission</h2>
    <p><strong>First Name:</strong> ${data.firstName}</p>
    <p><strong>Last Name:</strong> ${data.lastName}</p>
    <p><strong>Email:</strong> ${data.email}</p>
    <p><strong>Phone:</strong> ${data.mobilePhone}</p>
    <p><strong>Company Name:</strong> ${data.businessName}</p>
    <p><strong>Website:</strong> ${data.websiteUrl || 'N/A'}</p>
    <p><strong>Selected Plan:</strong> ${data.qluxPlan}</p>
    <p><strong>Country:</strong> ${data.country}</p>
    <p><strong>Agreed to receive marketing emails:</strong> ${data.receiveEmails ? 'Yes' : 'No'}</p>
  `;

  return sendEmail(subject, html);
}

export async function submitContactSalesAction(prevState: FormState, formData: FormData): Promise<FormState> {
  const dataToValidate = {
    firstName: formData.get('firstName'),
    lastName: formData.get('lastName'),
    email: formData.get('email'),
    jobTitle: formData.get('jobTitle'),
    phone: formData.get('phone'),
    companyName: formData.get('companyName'),
    businessType: formData.get('businessType'),
    otherBusinessType: formData.get('otherBusinessType'),
    city: formData.get('city'),
    numLocations: formData.get('numLocations'),
    managementType: formData.get('managementType'),
    bestDayToContact: formData.get('bestDayToContact'),
    bestTimeToCall: formData.get('bestTimeToCall'),
    details: formData.get('details'),
  }
  const validatedFields = contactSchema.safeParse(dataToValidate);

  if (!validatedFields.success) {
    const fieldErrors = validatedFields.error.flatten().fieldErrors;
    return {
      message: 'error',
      error: 'Invalid form data. Please check your entries.',
      errors: fieldErrors,
    };
  }
    
  const { data } = validatedFields;
  const subject = 'New Contact Sales Request';
  const businessTypeDisplay = data.businessType === 'Other' ? data.otherBusinessType : data.businessType;
  const html = `
    <h2>New Contact Sales Form Submission</h2>
    <p><strong>First Name:</strong> ${data.firstName}</p>
    <p><strong>Last Name:</strong> ${data.lastName}</p>
    <p><strong>Email:</strong> ${data.email}</p>
    <p><strong>Job Title:</strong> ${data.jobTitle || 'N/A'}</p>
    <p><strong>Phone:</strong> ${data.phone}</p>
    <p><strong>Company Name:</strong> ${data.companyName}</p>
    <p><strong>City:</strong> ${data.city}</p>
    <p><strong>Business Type:</strong> ${businessTypeDisplay}</p>
    <p><strong>Number of Locations:</strong> ${data.numLocations}</p>
    <p><strong>Interested In (Solution):</strong> ${data.managementType}</p>
    <p><strong>Best Day to Call:</strong> ${data.bestDayToContact}</p>
    <p><strong>Best Time to Call:</strong> ${data.bestTimeToCall}</p>
    <p><strong>Details:</strong> ${data.details || 'N/A'}</p>
  `;

  return sendEmail(subject, html);
}
