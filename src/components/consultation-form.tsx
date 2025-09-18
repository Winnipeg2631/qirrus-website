
'use client';

import { useEffect, useRef } from 'react';
import { useFormState } from 'react-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Link from 'next/link';
import { useToast } from '@/hooks/use-toast';
import { submitConsultationAction } from '@/app/actions/form-actions';
import { Checkbox } from './ui/checkbox';

interface ConsultationFormProps {
    selectedPlan?: string;
}

export function ConsultationForm({ selectedPlan }: ConsultationFormProps) {
  const { toast } = useToast();
  const [state, formAction] = useFormState(submitConsultationAction, { message: null, errors: {} });
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.message === 'success') {
      toast({
        title: 'Thank You!',
        description: 'Thank you for taking the time to visitor our site, we will be in touch within 24 hours.',
      });
      formRef.current?.reset();
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
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="firstName">Your name</Label>
          <Input id="firstName" name="firstName" placeholder="First Name" />
          {state.errors?.firstName && <p className="text-destructive text-xs mt-1">{state.errors.firstName[0]}</p>}
        </div>
        <div>
          <Label htmlFor="lastName" className="sr-only">Last Name</Label>
          <Input id="lastName" name="lastName" placeholder="Last Name" />
          {state.errors?.lastName && <p className="text-destructive text-xs mt-1">{state.errors.lastName[0]}</p>}
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="email">Email address</Label>
          <Input id="email" name="email" type="email" placeholder="Email" />
          {state.errors?.email && <p className="text-destructive text-xs mt-1">{state.errors.email[0]}</p>}
        </div>
        <div>
          <Label htmlFor="mobilePhone">Phone number</Label>
          <Input id="mobilePhone" name="mobilePhone" type="tel" placeholder="Mobile Phone" />
          {state.errors?.mobilePhone && <p className="text-destructive text-xs mt-1">{state.errors.mobilePhone[0]}</p>}
        </div>
      </div>
      <div>
        <Label htmlFor="businessName">Business Name</Label>
        <Input id="businessName" name="businessName" placeholder="Business Name" />
        {state.errors?.businessName && <p className="text-destructive text-xs mt-1">{state.errors.businessName[0]}</p>}
      </div>
      <div>
        <Label htmlFor="websiteUrl">Website URL</Label>
        <Input id="websiteUrl" name="websiteUrl" placeholder="Website URL" />
        {state.errors?.websiteUrl && <p className="text-destructive text-xs mt-1">{state.errors.websiteUrl[0]}</p>}
      </div>
      <div>
        <Label htmlFor="country">Country</Label>
        <Select name="country">
            <SelectTrigger id="country"><SelectValue placeholder="Select a country" /></SelectTrigger>
            <SelectContent>
                <SelectItem value="Canada">Canada</SelectItem>
                <SelectItem value="United States">United States</SelectItem>
            </SelectContent>
        </Select>
        {state.errors?.country && <p className="text-destructive text-xs mt-1">{state.errors.country[0]}</p>}
      </div>
      <Input id="qluxPlan" name="qluxPlan" type="hidden" value={selectedPlan || 'not-selected'} />
      <div className="flex items-start space-x-2">
        <Checkbox id="receive-emails" name="receiveEmails" className="mt-1" />
        <Label htmlFor="receive-emails" className="text-xs text-muted-foreground font-normal">
          Yes, I would like to receive electronic communications from Qirrus. You can unsubscribe at any time.
        </Label>
      </div>

      <p className="text-xs text-muted-foreground">
        By clicking the button, you confirm that you accept our <Link href="#" className="underline">Privacy Notice</Link>.
      </p>

      <Button type="submit" className="w-full" size="lg">Submit</Button>
    </form>
  );
}
