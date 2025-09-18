
"use client";

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Check, MoveRight, Star, PlayCircle, BarChart, Settings, Users, Calendar, DollarSign, Zap, CheckSquare, Info } from 'lucide-react';
import Link from 'next/link';
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
  AlertDialogCancel,
} from "@/components/ui/alert-dialog";
import React, { useState, useRef } from 'react';
import { ComparisonModal } from '@/components/comparison-modal';
import { cn } from '@/lib/utils';
import { ConsultationForm } from '@/components/consultation-form';
import { RoiCalculator } from '@/components/roi-calculator';
import { FeeCalculator } from '@/components/fee-calculator';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';


const features = [
  {
    icon: <Calendar className="h-7 w-7 text-primary" />,
    title: 'Advanced Reservations',
    description: 'The Qcafe\'s AI-powered platform is designed for your specific needs. Decide how you want to operate—as a reservation-based restaurant or a private event booking space—and we\'ll have your system configured and ready to go in under 60 minutes.',
  },
  {
    icon: <Users className="h-7 w-7 text-primary" />,
    title: 'Guest CRM',
    description: 'Build detailed guest profiles, track preferences and visit history, and deliver personalized service every time.',
  },
  {
    icon: <BarChart className="h-7 w-7 text-primary" />,
    title: 'Table Management',
    description: 'Optimize your floor plan, manage server sections, and maximize seating capacity with a visual interface.',
  },
  {
    icon: <DollarSign className="h-7 w-7 text-primary" />,
    title: 'Integrated Payments',
    description: 'Offer seamless tableside payments, split checks effortlessly, and accept all modern payment types.',
  },
  {
    icon: <Settings className="h-7 w-7 text-primary" />,
    title: 'Customizable Reporting',
    description: 'Gain deep insights into your sales, staff performance, and inventory with detailed, actionable analytics.',
  },
  {
    icon: <Zap className="h-7 w-7 text-primary" />,
    title: 'POS Integration',
    description: 'Sync reservations and orders directly with your POS for a unified, efficient front-of-house operation.',
  },
];

const interests = [
    { name: 'Premium table select' },
    { name: '6 lanaguages' },
    { name: 'Spilt bill' },
    { name: 'SMS guests invite' },
    { name: 'AI generated RSVP messages' },
    { name: 'audio sommelier' },
    { name: 'Digital share wine at table' },
    { name: 'Reward program' },
    { name: 'Concierge Service' },
    { name: 'Integrated POS-app hybrid ordering' },
];


const integrations = [
    { name: 'Resy', icon: <Calendar className="h-6 w-6 text-muted-foreground" /> },
    { name: 'OpenTable', icon: <Calendar className="h-6 w-6 text-muted-foreground" /> },
    { name: 'Toast', icon: <Zap className="h-6 w-6 text-muted-foreground" /> },
    { name: 'SevenRooms', icon: <Users className="h-6 w-6 text-muted-foreground" /> },
    { name: 'Tock', icon: <Calendar className="h-6 w-6 text-muted-foreground" /> },
];

const pricingPlans = [
    {
        id: 'qlux',
        name: 'Qlux',
        monthlyPrice: '119',
        annualPrice: '89',
        priceSuffix: 'CA',
        description: 'For small restaurants looking to streamline their core operations.',
        features: [
            'Online Reservations',
            'Table Management',
            'Guest Profiles',
            'Automated Email Reminders',
            'Basic Reporting'
        ],
        buttonText: '2 MONTHS ON US! on an annual term',
        recommended: false
    },
    {
        id: 'qlux-plus',
        name: 'Qlux Plus',
        monthlyPrice: '159',
        annualPrice: '129',
        priceSuffix: 'CA',
        description: 'For growing restaurants that need more power and automation.',
        features: [
            'Everything in Basic, plus:',
            'SMS & Email Reminders',
            'Waitlist Management',
            'Advanced Reporting',
            'POS Integration'
        ],
        buttonText: '2 MONTHS ON US! on an annual term',
        recommended: true
    },
    {
        id: 'qlux-vip',
        name: 'Qlux VIP',
        monthlyPrice: '179',
        annualPrice: '149',
        priceSuffix: 'CA',
        description: 'For high-volume restaurants that require the ultimate toolkit.',
        features: [
            'Everything in Standard, plus:',
            'Customizable Guest Surveys',
            'Marketing Integrations',
            'API Access',
            'Dedicated Account Manager'
        ],
        buttonText: '2 MONTHS ON US! on an annual term',
        recommended: false
    }
];

export default function UpscaleDiningPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [billingCycle, setBillingCycle] = useState('annual');
  const [selectedPlan, setSelectedPlan] = useState('');
  const consultationFormRef = useRef<HTMLDivElement>(null);

  const handlePlanSelect = (planId: string) => {
    setSelectedPlan(planId);
    consultationFormRef.current?.scrollIntoView({ behavior: 'smooth' });
  };


  return (
    <div className="bg-background">
      <ComparisonModal isOpen={isModalOpen} onOpenChange={setIsModalOpen} />
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 text-center">
            <span className="text-primary font-semibold">THE MOST FEATURE-RICH RESTAURANT PLATFORM</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mt-4 max-w-4xl mx-auto" style={{ lineHeight: 1.2 }}>
                The QLux app & online booking platform, creates iconic moments before seating!
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-lg text-muted-foreground">
                Qirrus is the all-in-one platform that connects your reservations, guests, and service into a single system of record.
            </p>
            <div className="mt-12 mb-8">
              <h2 className="text-xl font-semibold mb-6">What would you like to work on?</h2>
              <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
                {interests.map((interest) => (
                  <label key={interest.name} className="flex items-center gap-2 bg-muted/50 dark:bg-card border border-accent/50 hover:border-accent cursor-pointer rounded-full px-4 py-2 transition-colors">
                    <CheckSquare className="h-5 w-5 text-primary/50" />
                    <span className="text-sm font-medium">{interest.name}</span>
                  </label>
                ))}
              </div>
            </div>
            <div className="mt-8 flex justify-center gap-4">
                <Button size="lg" onClick={() => setIsModalOpen(true)}>
                    Get a Demo
                </Button>
                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <Button size="lg" variant="outline">
                      Watch Video
                    </Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent className="max-w-3xl">
                    <AlertDialogHeader>
                      <AlertDialogTitle>Qirrus for Upscale Dining</AlertDialogTitle>
                    </AlertDialogHeader>
                    <video
                      src="https://firebasestorage.googleapis.com/v0/b/restaurant-central-x36yb.firebasestorage.app/o/home%20page%20images%2FUpscale%20dining%20page%2FTwo%20business%20women%20tablking%20about%20Concierge%20service.mp4?alt=media&token=b32d4b67-34c0-47f2-a152-7493951d0384"
                      width="100%"
                      controls
                      autoPlay
                      className="rounded-lg"
                    />
                    <div className="flex justify-end">
                       <AlertDialogCancel>Close</AlertDialogCancel>
                    </div>
                  </AlertDialogContent>
                </AlertDialog>
            </div>

            <div className="mt-16" data-ai-hint="restaurant management dashboard">
                 <video
                    src="https://firebasestorage.googleapis.com/v0/b/restaurant-central-x36yb.firebasestorage.app/o/home%20page%20images%2FUpscale%20dining%20page%2FBlack%20couple%20dining%20in%20a%20Asian%20restaurant%20in%20Vancouver.mp4?alt=media&token=a56fc90d-0aa9-4017-a064-89efb2642c14"
                    width={1200}
                    height={700}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="rounded-xl shadow-2xl mx-auto"
                />
            </div>
        </div>
      </section>
      
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 items-center gap-12">
                 <div>
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-center md:text-left">
                        Concierge service
                    </h2>
                    <ul className="space-y-6">
                        <li className="flex items-start gap-4">
                            <Check className="h-6 w-6 text-primary mt-1 shrink-0" />
                            <div>
                                <h4 className="font-semibold text-lg">Dine on your terms.</h4>
                                <p className="text-muted-foreground">With Qirrus Concierge (both in-app and online), you can reserve the perfect table, pre-order your entrees and drinks, set your service times, invite guests, and even pay in advance. Your impeccable evening is ready when you are.</p>
                            </div>
                        </li>
                        <li className="flex items-start gap-4">
                            <Check className="h-6 w-6 text-primary mt-1 shrink-0" />
                            <div>
                                <h4 className="font-semibold text-lg">Enhance the Guest Experience</h4>
                                <p className="text-muted-foreground">Our omni-channel order and pay puts diners in control of their dining experience while streamlining operations and boosting revenue.</p>
                            </div>
                        </li>
                        <li className="flex items-start gap-4">
                            <Check className="h-6 w-6 text-primary mt-1 shrink-0" />
                            <div>
                                <h4 className="font-semibold text-lg">Levelup service</h4>
                                <p className="text-muted-foreground">Diner spend less time selecting entrees and drinks, and payments = more time for staff to focus on service</p>
                            </div>
                        </li>
                    </ul>
                </div>
                <div data-ai-hint="woman concierge phone">
                    <Image
                        src="https://firebasestorage.googleapis.com/v0/b/gilded-spoon-m4koo.firebasestorage.app/o/Upscale%2FConcierge%20service%20booking.png?alt=media&token=e939a3f2-1a13-48de-8588-466d3a82c423"
                        width={600}
                        height={450}
                        alt="Restaurant staff coordinating using a tablet"
                        className="rounded-xl shadow-xl"
                    />
                </div>
            </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white dark:bg-card">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
                 <Image 
                    src="https://firebasestorage.googleapis.com/v0/b/gilded-spoon-m4koo.firebasestorage.app/o/Upscale%2FOnline%20egift%20card%20purchase-qirrus.jpg?alt=media&token=fbf4bf32-a815-402d-9f56-f7a2a695ae63"
                    width={600}
                    height={400}
                    alt="Restaurant online booking page"
                    className="rounded-xl shadow-md w-full"
                    data-ai-hint="restaurant website"
                />
                 <div className="absolute -bottom-16 -left-12 z-10 w-48">
                    <div className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[10px] rounded-[1.5rem] h-[350px] w-[180px] shadow-xl">
                        <div className="w-[80px] h-[14px] bg-gray-800 top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute"></div>
                        <div className="rounded-[1.2rem] overflow-hidden w-full h-full bg-white dark:bg-gray-800">
                             <Image
                                src="https://firebasestorage.googleapis.com/v0/b/gilded-spoon-m4koo.firebasestorage.app/o/Upscale%2Fqirrus%20online%20restaurant%20booking%20platform_mobile.jpg?alt=media&token=834bc043-de27-463d-b7b9-0ba0147f724c"
                                alt="Restaurant booking on mobile phone"
                                fill
                                className="object-cover"
                                data-ai-hint="mobile app"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <h2 className="text-3xl font-bold tracking-tight">Show off what makes your brand special, online</h2>
                <p className="text-muted-foreground mt-4">
                    Our branded online booking, with Premium Table Select and Concierge Service, will assist with capturing diner data while bringing in more bookings. No commission or booking fees, coupled with Qirrus marketing solutions, will drive profitability and service. Your brand flair has never looked better!
                </p>
                <ul className="mt-8 space-y-4">
                    <li className="flex items-start gap-3">
                        <Check className="h-6 w-6 text-primary shrink-0 mt-1" />
                        <span>Turn premium tables into additional revenue.</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <Check className="h-6 w-6 text-primary shrink-0 mt-1" />
                        <span>Provide diners with exciting new booking features and options.</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <Check className="h-6 w-6 text-primary shrink-0 mt-1" />
                        <span>Grow sales and profits with our unique photo watermarked link to social media</span>
                    </li>
                     <li className="flex items-start gap-3">
                        <Check className="h-6 w-6 text-primary shrink-0 mt-1" />
                        <span>Reduce 3rd party by accepting payments and conducting your own order intake</span>
                    </li>
                     <li className="flex items-start gap-3">
                        <Check className="h-6 w-6 text-primary shrink-0 mt-1" />
                        <span>Get your message out there with our state-of-the-art marketing solutions.</span>
                    </li>
                </ul>
            </div>
        </div>
      </section>
      
      <section className="py-16 md:py-24 bg-white dark:bg-card">
        <div className="container mx-auto px-4">
            <div className="text-center mb-12">
                <span className="font-semibold text-primary">FEATURES</span>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight mt-2">Take your restaurant operations to the next level</h2>
            </div>
            <div className="flex justify-center mb-12" data-ai-hint="upscale restaurant interior">
                <video
                    src="https://firebasestorage.googleapis.com/v0/b/orange-mango-bistro.firebasestorage.app/o/tables-booth%2FQirrus%20online%20premium%20table%20select%20feature%20for%20upscale%20restaurants.mov?alt=media&token=ca7ac742-2e6e-41b2-9d76-96782652f232"
                    width={945}
                    height={945}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="rounded-xl shadow-2xl w-[945px] h-auto"
                />
            </div>
            <div className="max-w-4xl mx-auto text-center">
                <ul className="grid md:grid-cols-2 gap-x-12 gap-y-6">
                    <li>
                        <h4 className="text-xl font-semibold">Guest Engagement</h4>
                        <p className="text-muted-foreground mt-1">Leverage automated marketing tools and a robust CRM to turn first-time visitors into lifelong regulars.</p>
                    </li>
                    <li>
                        <h4 className="text-xl font-semibold">Experiences & Events</h4>
                        <p className="text-muted-foreground mt-1">Sell tickets, manage deposits, and promote special events to create new revenue streams.</p>
                    </li>
                    <li>
                        <h4 className="text-xl font-semibold">Direct Booking Channels</h4>
                        <p className="text-muted-foreground mt-1">Capture commission-free reservations from your website, social media, and Google listings.</p>
                    </li>
                    <li>
                        <h4 className="text-xl font-semibold">Data & Analytics</h4>
                        <p className="text-muted-foreground mt-1">Make informed decisions with comprehensive reports on guest behavior, sales trends, and operational efficiency.</p>
                    </li>
                </ul>
                <div className="mt-12 flex justify-center">
                    <RoiCalculator />
                </div>
            </div>
        </div>
      </section>
      
       <section className="py-16 md:py-24 bg-white dark:bg-card">
          <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                  <h2 className="text-3xl font-bold tracking-tight">The hospitality platform that does it all</h2>
                  <p className="mt-4 text-lg text-muted-foreground">Qirrus is the only system you need to manage your reservations, online ordering, guest communication, and marketing campaigns. No more juggling multiple tools - just one seamless platform to run your entire operation.</p>
              </div>
              <div data-ai-hint="pos system connection">
                  <Image 
                      src="https://firebasestorage.googleapis.com/v0/b/gilded-spoon-m4koo.firebasestorage.app/o/Upscale%2Fegift%20card%20purchase%20with%20Qirrus%20online%20booking%20and%20ordering%20platform.png?alt=media&token=1d4f8fb4-ebc0-459d-8d67-f283f25b48fe"
                      width={600}
                      height={450}
                      alt="Qirrus dashboard showing integrations"
                      className="rounded-xl shadow-xl"
                  />
              </div>
          </div>
      </section>
      
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">
                Pickup & delivery ordering
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
                Be where your customers are and offer more ways to order with direct online ordering from your website, social media, and Google.
            </p>
            <h3 className="text-2xl font-bold tracking-tight mt-6">
                In-house delivery
            </h3>
            <p className="mt-2 text-muted-foreground">
                Offer your own delivery services without relying on costly third-party providers. Manage your own fleet of drivers and keep every dollar you make.
            </p>
          </div>
          <div data-ai-hint="food delivery">
              <Image 
                  src="https://firebasestorage.googleapis.com/v0/b/gilded-spoon-m4koo.firebasestorage.app/o/Upscale%2FA%20food%20delivery%20driver%20is%20handing%20a%20customer%20her%20food%20order%20in%20front%20of%20the%20customer's%20condo%20building.jpg?alt=media&token=a38e2da4-8c61-4a8a-b23c-9fb096b1adef"
                  width={600}
                  height={450}
                  alt="Business discussion"
                  className="rounded-xl shadow-2xl"
              />
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <FeeCalculator />
        </div>
      </section>

       <section className="py-16 md:py-24 bg-primary-foreground dark:bg-card">
          <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="relative" data-ai-hint="concierge service mobile">
                  <div className="bg-primary/20 rounded-full aspect-square w-[70%] absolute -right-10 -bottom-10 z-0"></div>
                   <Image 
                      src="https://firebasestorage.googleapis.com/v0/b/restaurant-central-x36yb.firebasestorage.app/o/guest%20profile%2FRestaurant%20guest%20profile%20and%20data.png?alt=media&token=4b4be979-176b-4cbb-a247-56de18a1f1b8"
                      width={600}
                      height={450}
                      alt="Know your guest, and they share the moments"
                      className="rounded-xl shadow-xl relative z-10"
                  />
              </div>
              <div>
                  <h2 className="text-3xl font-bold tracking-tight">Know your guest, and they share the moments</h2>
                  <ul className="mt-6 space-y-4">
                      <li className="flex items-start gap-3">
                          <Check className="h-6 w-6 text-primary shrink-0 mt-1" />
                          <span>Offer your guests three distinct booking options: a classic reservation, a premium table selection, and our exclusive pre-paid Concierge Service.</span>
                      </li>
                      <li className="flex items-start gap-3">
                          <Check className="h-6 w-6 text-primary shrink-0 mt-1" />
                          <span>Let guests pre-order everything from appetizers to wine, and even schedule course delivery times for a perfectly paced meal.</span>
                      </li>
                       <li className="flex items-start gap-3">
                          <Check className="h-6 w-6 text-primary shrink-0 mt-1" />
                          <span>Send AI-generated RSVP messages and allow party members to pay for their share in advance, simplifying group dining.</span>
                      </li>
                  </ul>
              </div>
          </div>
      </section>

      <section className="py-16 md:py-24 bg-white dark:bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Restaurant Management Features to Run a Successful Business
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-left p-6 rounded-lg">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
           <div className="text-center mt-12">
               <Button size="lg" onClick={() => setIsModalOpen(true)}>Get Started</Button>
           </div>
        </div>
      </section>
      
      <section className="py-16 md:py-24 bg-gray-800 text-primary-foreground">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
            <div>
                <span className="font-semibold">BRIDGE SILOS TO ACCELERATE GOALS</span>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight mt-4">
                    Turn one-time guests into regulars
                </h2>
                <p className="mt-4 text-lg text-primary-foreground/80">
                    Our guest marketing suite helps you understand your diners and create targeted campaigns that drive loyalty and repeat visits.
                </p>
                <div className="mt-8 flex items-center gap-4">
                    <Image src="https://placehold.co/50x50.png" alt="Anna, Head of Operations" width={50} height={50} className="rounded-full" data-ai-hint="woman portrait" />
                    <div>
                        <p className="font-semibold">"Qirrus has transformed how we approach guest relationships. The data is invaluable."</p>
                        <p className="text-sm text-primary-foreground/60">Anna S., Head of Operations at The Grand Brasserie</p>
                    </div>
                </div>
            </div>
             <div className="relative group" data-ai-hint="woman video call">
                <video
                    src="https://firebasestorage.googleapis.com/v0/b/restaurant-central-x36yb.firebasestorage.app/o/home%20page%20images%2FUpscale%20dining%20page%2FThank%20you%20for%20using%20our%20Concierge%20service.mp4?alt=media&token=8eef0595-d421-44c5-97b0-f74b78cc9c18"
                    width={600}
                    height={400}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="rounded-xl shadow-xl"
                />
            </div>
        </div>
      </section>

       <section className="pt-4 pb-16 md:pb-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 pt-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Start your free trial
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
              Do not pay until your 3rd month, cancel at any time, no questions asked, Sign for Annual and pay monthly. All plans include a merchant portal.
            </p>
          </div>
          <div className="flex justify-center items-center gap-4 mb-12">
            <span className={cn('text-muted-foreground', { 'text-foreground font-semibold': billingCycle === 'monthly' })}>Monthly</span>
            <div
              className="relative w-14 h-8 bg-gray-200 dark:bg-gray-700 rounded-full cursor-pointer"
              onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'annual' : 'monthly')}
            >
              <div
                className={cn(
                  'absolute top-1 left-1 w-6 h-6 bg-white rounded-full transition-transform',
                  { 'translate-x-6': billingCycle === 'annual' }
                )}
              />
            </div>
            <span className={cn('text-muted-foreground', { 'text-foreground font-semibold': billingCycle === 'annual' })}>Annual</span>
            <span className="bg-primary/10 text-primary text-xs font-semibold px-2 py-1 rounded-full">SAVE 25%</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {pricingPlans.map((plan) => (
              <Card key={plan.name} className={`flex flex-col ${plan.recommended ? 'border-2 border-primary shadow-2xl' : ''}`}>
                {plan.recommended && (
                  <div className="bg-primary text-primary-foreground text-xs font-semibold uppercase tracking-wider text-center py-1 rounded-t-lg -mt-px">
                    Most Popular
                  </div>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                   <div className="flex items-baseline justify-center gap-2">
                        <span className="text-4xl font-bold">${billingCycle === 'annual' ? plan.annualPrice : plan.monthlyPrice}</span>
                        <span className="text-muted-foreground">/ {plan.priceSuffix} / month</span>
                    </div>
                  <p className="text-muted-foreground">{plan.description}</p>
                </CardHeader>
                <CardContent className="flex-grow">
                   <Button onClick={() => handlePlanSelect(plan.id)} className="w-full text-xs p-2 h-auto" variant={plan.recommended ? 'default' : 'outline'}>{plan.buttonText}</Button>
                  <ul className="mt-6 space-y-4 text-sm text-muted-foreground">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <Check className="h-4 w-4 mt-1 text-green-500 shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
           <div className="mt-12 text-center text-sm text-muted-foreground">
              <p>Terms of Use apply. A setup fee of CA$275.00 applies for menu integration via a provided CSV or JSON file (limited to 60 items, with the same menu applied to all locations). Manual menu creation is subject to a fee of CA$350.00.</p>
              <p>An additional fee of CA$50.00 per location will be charged for the creation of any new or unique menu.</p>
              <p>Additional fees for SMS messaging of $0.08, Split bill service fee is $0.60, social media $0.12 per connection, 3rd.party delivery platform connection fee; $0.20 per order. and credit card processing will apply.</p>
              <p>Availability is subject to certain conditions. For more details, please contact our Sales team or your designated Account Manager.</p>
            </div>
        </div>
      </section>

      <section className="py-2 bg-white dark:bg-card">
        <div className="container mx-auto px-4 py-8">
            <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
                <AccordionItem value="item-1">
                    <AccordionTrigger className="text-lg font-semibold">How to cancel my subscription</AccordionTrigger>
                    <AccordionContent>
                        <div className="prose dark:prose-invert">
                            <p><strong>Overview:</strong></p>
                            <p>At Qirrus we want you to be 100% satisfied with our range of solutions. If you are not 100% satisfied, you can cancel anytime.</p>
                            <p><strong>Before cancelling your subscription:</strong></p>
                            <p>Before proceeding with cancellation, please feel free to reach out. We can assist you by discussing your needs and finding a plan that might suit your business needs better.</p>
                            <p><strong>How to cancel your subscription:</strong></p>
                            <ol>
                                <li>From your admin dashboard select – Account</li>
                                <li>Click Account Management</li>
                                <li>Click Manage Subscription</li>
                                <li>Select Cancel Plan and follow prompts</li>
                            </ol>
                            <p>Contact our support team via email: ___________________ for any issues.</p>
                            <p>If you cancel your subscription, changes take place 30 days after notice. This means you can continue to benefit from all of your current plan features until that period ends.</p>
                            <p>We'll keep the door open for you at Qirrus. Come back at any time to restart your subscription. When you do, we'll restore your account information and data to make it easy to get back up and running.</p>
                        </div>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
      </section>

      <section ref={consultationFormRef} className="py-16 md:py-24">
        <div className="container mx-auto px-4">
            <div className="bg-card rounded-lg shadow-xl overflow-hidden p-8 md:p-12 border">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
                <div className="text-card-foreground">
                  <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">2 Months and 50% of the QBistro+ Offer ends Midnight November 30, 2025.</h2>
                  <p className="mt-4 text-muted-foreground">Qirrus's AI-powered customer platform has all the tools you need for marketing, sales, and customer service - all in one place. It's easy to use, provides value fast, and gives your whole team a unified view of every customer.</p>
                  <p className="mt-4 text-muted-foreground">Get a demo to see for yourself how Qirrus's customer platform can help you achieve your most ambitious growth goals.</p>
                  <div className="mt-8 flex gap-4" data-ai-hint="award badges">
                    <Image src="https://placehold.co/100x120.png" width={100} height={120} alt="Grid Leader award" />
                    <Image src="https://placehold.co/100x120.png" width={100} height={120} alt="Best Usability award" />
                    <Image src="https://placehold.co/100x120.png" width={100} height={120} alt="Best Results award" />
                  </div>
                </div>
                <div>
                   <ConsultationForm selectedPlan={selectedPlan} />
                </div>
              </div>
            </div>
          </div>
      </section>
    </div>
  );
}
