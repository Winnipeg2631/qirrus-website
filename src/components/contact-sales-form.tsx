
'use client';

import { useFormState } from 'react-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import Link from 'next/link';
import { useToast } from '@/hooks/use-toast';
import { submitContactSalesAction } from '@/app/actions/form-actions';
import { useEffect, useRef, useState } from 'react';


export function ContactSalesForm() {
  const { toast } = useToast();
  const [state, formAction] = useFormState(submitContactSalesAction, { message: null, errors: {} });
  const formRef = useRef<HTMLFormElement>(null);
  const [businessType, setBusinessType] = useState('');


  useEffect(() => {
    if (state.message === 'success') {
      toast({
        title: 'Thank You!',
        description: 'Thank you for taking the time to visitor our site, we will be in touch within 24 hours.',
      });
      formRef.current?.reset();
      setBusinessType('');
    } else if (state.message === 'error' && state.error) {
      toast({
        title: 'Submission Failed',
        description: state.error,
        variant: 'destructive',
      });
    }
  }, [state, toast]);


  return (
    <form ref={formRef} action={formAction} className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label htmlFor="firstName" className="sr-only">First Name</Label>
          <Input id="firstName" name="firstName" placeholder="First name*" />
          {state.errors?.firstName && <p className="text-destructive text-xs mt-1">{state.errors.firstName[0]}</p>}
        </div>
        <div>
          <Label htmlFor="lastName" className="sr-only">Last Name</Label>
          <Input id="lastName" name="lastName" placeholder="Last name*" />
          {state.errors?.lastName && <p className="text-destructive text-xs mt-1">{state.errors.lastName[0]}</p>}
        </div>
      </div>
      
      <div>
        <Label htmlFor="email" className="sr-only">Work Email</Label>
        <Input id="email" name="email" type="email" placeholder="Work email*" />
        {state.errors?.email && <p className="text-destructive text-xs mt-1">{state.errors.email[0]}</p>}
      </div>

      <div>
        <Label htmlFor="jobTitle" className="sr-only">Job Title</Label>
        <Input id="jobTitle" name="jobTitle" placeholder="Job title" />
      </div>

      <div>
          <Label htmlFor="phone" className="sr-only">Phone</Label>
          <div className="flex gap-2">
              <Select defaultValue="ca">
                  <SelectTrigger className="w-[80px]">
                      <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                      <SelectItem value="ca">🇨🇦 +1</SelectItem>
                      <SelectItem value="us">🇺🇸 +1</SelectItem>
                      <SelectItem value="gb">🇬🇧 +44</SelectItem>
                  </SelectContent>
              </Select>
              <Input id="phone" name="phone" type="tel" placeholder="Phone number*" className="flex-1"/>
          </div>
          {state.errors?.phone && <p className="text-destructive text-xs mt-1">{state.errors.phone[0]}</p>}
      </div>
      
      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label htmlFor="companyName" className="sr-only">Company Name</Label>
          <Input id="companyName" name="companyName" placeholder="Company name*" />
          {state.errors?.companyName && <p className="text-destructive text-xs mt-1">{state.errors.companyName[0]}</p>}
        </div>
         <div>
          <Label htmlFor="city" className="sr-only">City</Label>
          <Input id="city" name="city" placeholder="City*" />
          {state.errors?.city && <p className="text-destructive text-xs mt-1">{state.errors.city[0]}</p>}
        </div>
      </div>

       <div className="grid grid-cols-2 gap-4">
        <div>
          <Label htmlFor="businessType" className="sr-only">Business Type</Label>
          <Select name="businessType" onValueChange={setBusinessType}>
            <SelectTrigger id="businessType"><SelectValue placeholder="Business type*" /></SelectTrigger>
            <SelectContent>
              <SelectItem value="Upscale Restaurant">Upscale Restaurant</SelectItem>
              <SelectItem value="Cafe">Cafe</SelectItem>
              <SelectItem value="Bistro">Bistro</SelectItem>
              <SelectItem value="Cannabis store">Cannabis store</SelectItem>
              <SelectItem value="Other">Other</SelectItem>
            </SelectContent>
          </Select>
          {state.errors?.businessType && <p className="text-destructive text-xs mt-1">{state.errors.businessType[0]}</p>}
        </div>
         <div>
            <Label htmlFor="numLocations" className="sr-only">Number of locations</Label>
            <Input id="numLocations" name="numLocations" type="number" placeholder="Number of locations*"/>
            {state.errors?.numLocations && <p className="text-destructive text-xs mt-1">{state.errors.numLocations[0]}</p>}
        </div>
      </div>

       {businessType === 'Other' && (
        <div>
          <Label htmlFor="otherBusinessType" className="sr-only">Please specify</Label>
          <Input id="otherBusinessType" name="otherBusinessType" placeholder="Please specify your business type*" />
          {state.errors?.otherBusinessType && <p className="text-destructive text-xs mt-1">{state.errors.otherBusinessType[0]}</p>}
        </div>
      )}


      <div className="grid grid-cols-2 gap-4">
         <div>
            <Label htmlFor="managementType" className="sr-only">Solution</Label>
            <Select name="managementType">
                <SelectTrigger id="managementType"><SelectValue placeholder="Solution*" /></SelectTrigger>
                <SelectContent>
                <SelectItem value="reservations">Reservations</SelectItem>
                <SelectItem value="online-ordering">Online Ordering</SelectItem>
                <SelectItem value="marketing">Marketing</SelectItem>
                <SelectItem value="website">Website</SelectItem>
                <SelectItem value="webapp">Web app</SelectItem>
                </SelectContent>
            </Select>
            {state.errors?.managementType && <p className="text-destructive text-xs mt-1">{state.errors.managementType[0]}</p>}
        </div>
        <div>
            <Label htmlFor="bestDayToContact" className="sr-only">Best day to contact you</Label>
            <Select name="bestDayToContact">
                <SelectTrigger id="bestDayToContact"><SelectValue placeholder="Best day to contact*" /></SelectTrigger>
                <SelectContent>
                    <SelectItem value="Monday">Monday</SelectItem>
                    <SelectItem value="Tuesday">Tuesday</SelectItem>
                    <SelectItem value="Wednesday">Wednesday</SelectItem>
                    <SelectItem value="Thursday">Thursday</SelectItem>
                    <SelectItem value="Friday">Friday</SelectItem>
                </SelectContent>
            </Select>
            {state.errors?.bestDayToContact && <p className="text-destructive text-xs mt-1">{state.errors.bestDayToContact[0]}</p>}
        </div>
      </div>
       <div>
            <Label htmlFor="bestTimeToCall" className="sr-only">Best time to call</Label>
            <Select name="bestTimeToCall">
                <SelectTrigger id="bestTimeToCall"><SelectValue placeholder="Best time to call*" /></SelectTrigger>
                <SelectContent>
                    <SelectItem value="9am-11am PST">9:00 AM - 11:00 AM (PST)</SelectItem>
                    <SelectItem value="2pm-6pm PST">2:00 PM - 6:00 PM (PST)</SelectItem>
                </SelectContent>
            </Select>
            {state.errors?.bestTimeToCall && <p className="text-destructive text-xs mt-1">{state.errors.bestTimeToCall[0]}</p>}
        </div>

      <div>
          <Label htmlFor="details" className="sr-only">Tell us more</Label>
          <Textarea 
              id="details"
              name="details"
              placeholder="Tell us more about your team and what work you'd like to manage with Qirrus" 
              rows={3}
          />
      </div>

      <p className="text-xs text-muted-foreground text-center">
          By clicking submit, I acknowledge Qirrus's <Link href="#">Privacy Policy</Link>.
      </p>

      <Button type="submit" className="w-full bg-primary hover:bg-primary/90" size="lg">Submit</Button>
    </form>
  );
}
