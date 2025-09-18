

'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { CheckCircle, CreditCard, Users, ShoppingBag, Utensils, PlayCircle, MoveRight, Check, Package, Clock, Star, Landmark, User, FileText, Database, Globe, XCircle } from 'lucide-react';
import Link from 'next/link';
import { ConsultationForm } from '@/components/consultation-form';
import React, { useState, useRef } from 'react';
import { cn } from '@/lib/utils';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { FeeCalculator } from '@/components/fee-calculator';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const features = [
  {
    icon: <CreditCard className="h-8 w-8 text-primary" />,
    title: 'Integrated delivery platforms',
    description: 'Take credit cards, debit, and contactless payments quickly and securely. Never miss a sale.',
  },
  {
    icon: <Globe className="h-8 w-8 text-primary" />,
    title: 'Up to 6 languages',
    description: 'Guest can select their own preferred language for an uplevel experience.',
  },
  {
    icon: <Users className="h-8 w-8 text-primary" />,
    title: 'Guest, CRM',
    description: 'Build a loyal following with guest profiles and a simple loyalty program.',
  },
  {
    icon: <Utensils className="h-8 w-8 text-primary" />,
    title: 'Menu Management',
    description: 'Easily update items, prices, and availability across all your devices and online platforms.',
  },
];

const benefits = [
    { text: 'Pre-order, dine-in' },
    { text: 'In-app promotions' },
    { text: 'A stamp program that is on autopilot. Guest just scans their invoice.' },
    { text: 'Mobile booking with preorder+ dine-in' },
];

const sellingPoints = [
    { text: "Add a synced online store, no coding required." },
    { text: "Sell through Instagram and Facebook with a tap." },
    { text: "Offer curbside pickup, local delivery and shipping." },
    { text: "Manage your entire business from one place." },
];

const tools = [
    { text: "Accept payments remotely with invoices." },
    { text: "Take payments over the phone right on your computer." },
    { text: "Schedule and manage team members with Square Staff." },
    { text: "Sell at the counter, on the go or online, so you never miss a sale." },
];

const pricingPlans = [
    {
        id: 'qcafe',
        name: 'Qcafe',
        monthlyPrice: '119',
        annualPrice: '89',
        priceSuffix: 'CA',
        description: 'Design for small independent to large Chains & Franchises.',
        features: [
            'Up to 200 Locations',
            'Branded web app',
            'Menu management',
            'Create up to 5 distinct menus',
            '6 languages',
            'eGift, Stamp + Loyalty programs',
            'Basic reporting'
        ],
        buttonText: '2 MONTHS ON US! on an annual term',
        recommended: false
    },
    {
        id: 'qbistro',
        name: 'QBistro',
        monthlyPrice: '159',
        annualPrice: '129',
        priceSuffix: 'CA',
        description: 'No matter if you are a single bristro restaurant or a midsize restaurant, QBistro can meet your needs.',
        features: [
            'Everything in Qcafe, plus:',
            'Delivery platform integration',
            'CRM',
            'Advanced Reporting',
            'Reservation'
        ],
        buttonText: '2 MONTHS ON US! on an annual term',
        recommended: true
    },
    {
        id: 'qbistro-plus',
        name: 'QBistro+',
        monthlyPrice: '179',
        annualPrice: '149',
        priceSuffix: 'CA',
        description: 'For high-volume restaurants that require the ultimate toolkit.',
        features: [
            'Everything in QBistro, plus:',
            'SMS marketing',
            'Table management',
            'In-app promotion cards + Floorplan creation',
            'Social media click back photo branding and web app connection',
            'Add website for +$350'
        ],
        buttonText: '2 MONTHS ON US! on an annual term',
        recommended: false
    }
];

const popularFeatures = [
    {
        icon: <User className="h-8 w-8 text-primary" />,
        title: 'Custom business website',
        description: 'Build views and run automated actions to easily manage your contacts and data.'
    },
    {
        icon: <FileText className="h-8 w-8 text-primary" />,
        title: 'Branded mobile web app',
        description: 'Build static or dynamic contact lists using your HubSpot database.'
    },
    {
        icon: <Database className="h-8 w-8 text-primary" />,
        title: 'CRM+Order+Booking management',
        description: 'Import and export CRM data into HubSpot.'
    }
];

const comparisonFeatures = [
  { feature: 'Multi-language', qbistro: true, ueat: true, craver: true },
  { feature: 'Custom-branded mobile app', qbistro: true, ueat: true, craver: true },
  { feature: 'White-label delivery integration', qbistro: true, ueat: true, craver: true },
  { feature: 'Unlimited commission-free orders', qbistro: true, ueat: true, craver: true },
  { feature: 'AI', qbistro: true, ueat: false, craver: false },
  { feature: 'Photo sharing with logo watermark', qbistro: true, ueat: false, craver: false },
  { feature: 'Unlimited push notifications', qbistro: true, ueat: true, craver: true },
  { feature: 'Discounts & coupons', qbistro: true, ueat: true, craver: true },
  { feature: 'In-house gift and loyalty', qbistro: true, ueat: false, craver: false },
  { feature: 'Custom-branded web ordering site', qbistro: true, ueat: true, craver: true },
  { feature: 'Menu auto-sync', qbistro: true, ueat: true, craver: true },
  { feature: 'Suggested upsells', qbistro: true, ueat: true, craver: true },
  { feature: 'Curbside pickup', qbistro: true, ueat: true, craver: true },
  { feature: 'Pre-order-dine-in', qbistro: true, ueat: false, craver: false },
  { feature: 'Promo cards', qbistro: true, ueat: true, craver: true },
  { feature: 'Combo meals', qbistro: true, ueat: false, craver: false },
  { feature: 'Memberships', qbistro: true, ueat: true, craver: true },
  { feature: 'Business receipt tracking', qbistro: true, ueat: true, craver: true },
  { feature: 'Stamp program', qbistro: true, ueat: false, craver: false },
  { feature: 'Item reviews', qbistro: true, ueat: false, craver: false },
  { feature: 'Reservation', qbistro: true, ueat: false, craver: false },
  { feature: 'Voice booking and ordering', qbistro: true, ueat: false, craver: false },
  { feature: 'Clothing and other service selling', qbistro: true, ueat: true, craver: true },
  { feature: 'POS integration (any POS)', qbistro: true, ueat: false, craver: false },
  { feature: 'Delivery platforms', qbistro: true, ueat: false, craver: false },
  { feature: 'CRM', qbistro: true, ueat: false, craver: false },
  { feature: 'Reservation timeline and floor plan', qbistro: true, ueat: false, craver: false },
  { feature: 'Create up to 5 schedule menus', qbistro: true, ueat: false, craver: false },
  { feature: 'SMS marketing', qbistro: true, ueat: false, craver: false },
  { feature: 'Merchant portal', qbistro: true, ueat: false, craver: false },
  { feature: 'Dedicated LIVE success manager', qbistro: true, ueat: true, craver: true },
];


export default function CafeAndBistroPage() {
  const [billingCycle, setBillingCycle] = useState('annual');
  const [selectedPlan, setSelectedPlan] = useState('');
  const consultationFormRef = useRef<HTMLDivElement>(null);

  const handlePlanSelect = (planId: string) => {
    setSelectedPlan(planId);
    consultationFormRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-background text-foreground">
      <section className="py-20 md:py-28 text-center">
        <div className="container mx-auto px-4">
            <span className="text-sm font-bold uppercase tracking-wider text-muted-foreground">QCAFE WEB APP</span>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mt-4 max-w-3xl mx-auto">
                Powerful Web app, boost sales, engage diners and easy to use and set up
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-xl mx-auto">
                Fully customizable Web app solution for your cafe or restaurant of all shapes and sizes.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button size="lg" asChild>
                    <Link href="#">Get started</Link>
                </Button>
                <Button size="lg" variant="link" asChild>
                    <Link href="#">For help getting started, connect with us <MoveRight className="w-4 h-4 ml-2" /></Link>
                </Button>
            </div>
        </div>
      </section>
      
       <section className="py-16 md:py-24 bg-white dark:bg-card">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
            <div data-ai-hint="crm dashboard">
                <Image
                    src="https://firebasestorage.googleapis.com/v0/b/restaurant-central-x36yb.firebasestorage.app/o/Bistro-cafe%2Fmerchant%20dashboard.jpg?alt=media&token=3c198667-d06e-421d-b3e2-ed677e0fe03a"
                    alt="Merchant dashboard"
                    width={600}
                    height={450}
                    className="rounded-xl shadow-2xl"
                />
            </div>
            <div>
                <h2 className="text-3xl font-bold tracking-tight">Business insight and management</h2>
                <p className="mt-4 text-lg text-muted-foreground">
                    Your CRM is only as good as the data that powers it. That's why Qirrus Smart CRM connects all your customer data, giving your teams a shared, complete view of every customer to help you grow your business. Your sales, marketing, and service teams can reach out to your customers, right where, when and how they want.
                </p>
                <Button asChild variant="link" className="p-0 mt-6 h-auto text-base text-primary">
                    <Link href="#">Get started <MoveRight className="w-4 h-4 ml-1" /></Link>
                </Button>
            </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold tracking-tight">Popular Features</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8 text-center">
                {popularFeatures.map((feature) => (
                    <Card key={feature.title} className="border-0 shadow-none">
                        <CardHeader>
                            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mb-4">
                                {feature.icon}
                            </div>
                            <CardTitle>{feature.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground">{feature.description}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
      </section>

      <section className="bg-white dark:bg-card py-16 md:py-24">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">
             <div className="relative" data-ai-hint="barista cafe order">
                <video
                    src="https://firebasestorage.googleapis.com/v0/b/restaurant-central-x36yb.firebasestorage.app/o/Bistro-cafe%2F65c0f79e-4a53-4f0a-92bb-7de2397773d8.mp4?alt=media&token=368bb1c1-758c-4962-b3f5-078ecfa93a20"
                    width={600}
                    height={700}
                    playsInline
                    autoPlay
                    muted
                    loop
                    className="rounded-xl shadow-2xl object-cover"
                />
                <div className="absolute bottom-[-100px] -right-12 bg-white rounded-lg shadow-xl p-6 w-72 border">
                    <h3 className="text-xs font-bold uppercase text-muted-foreground tracking-wider mb-4">NEW</h3>
                    <div className="space-y-4">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <Package className="h-6 w-6 text-muted-foreground" />
                                <span className="font-semibold">Ryan H</span>
                            </div>
                            <Button variant="link" className="text-primary p-0 h-auto text-sm">Accept & Print</Button>
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <Package className="h-6 w-6 text-muted-foreground" />
                                <span className="font-semibold">Kelly K</span>
                            </div>
                            <Button variant="link" className="text-primary p-0 h-auto text-sm">Accept & Print</Button>
                        </div>
                    </div>

                    <h3 className="text-xs font-bold uppercase text-muted-foreground tracking-wider my-4 pt-4 border-t">IN PROGRESS</h3>
                     <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <Clock className="h-6 w-6 text-muted-foreground" />
                            <span className="font-semibold">Michael S</span>
                        </div>
                        <Button variant="link" className="text-primary p-0 h-auto text-sm">Mark as Picked Up</Button>
                    </div>
                </div>
            </div>
            <div>
                <h2 className="text-3xl font-bold tracking-tight">Start selling wherever your customers are.</h2>
                <p className="mt-4 text-lg text-muted-foreground">
                    Qirrus makes it easy to sell in person, online, over the phone or out in the field. It's free to use, and there's no training required.
                </p>
                <ul className="mt-8 space-y-4">
                    {sellingPoints.map((point, index) => (
                        <li key={index} className="flex items-start gap-3">
                            <Check className="h-6 w-6 text-blue-500 shrink-0 mt-1" />
                            <span>{point.text}</span>
                        </li>
                    ))}
                </ul>
                 <Button asChild variant="link" className="p-0 mt-6 h-auto text-base text-primary">
                    <Link href="#">Add a synced online store <MoveRight className="w-4 h-4 ml-1" /></Link>
                </Button>
            </div>
        </div>
    </section>

      <section className="pb-16 md:pb-24">
        <div className="container mx-auto px-4">
          <div className="relative" data-ai-hint="bistro owner tablet">
              <Image
                  src="https://firebasestorage.googleapis.com/v0/b/restaurant-central-x36yb.firebasestorage.app/o/Bistro-cafe%2Fwomen%20owner%20of%20Bistro%20with%20a%20tablet.jpg?alt=media&token=e3bc2f42-c3df-4112-8a51-bd88028b259a"
                  alt="A woman owner of a bistro holding a tablet."
                  width={1200}
                  height={600}
                  className="rounded-xl shadow-2xl mx-auto"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                  <Button variant="ghost" className="bg-white/30 backdrop-blur-sm rounded-full h-20 w-20 p-0 hover:bg-white/50">
                      <PlayCircle className="h-16 w-16 text-white" />
                  </Button>
              </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white dark:bg-card">
        <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
                Everything you need to run a thriving cafe
            </h2>
            <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
                From fast payments to simple inventory, Qirrus has the tools to help you succeed.
            </p>
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {features.map((feature, index) => (
                    <Card key={index} className="text-center border-0 shadow-lg">
                        <CardHeader>
                            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                                {feature.icon}
                            </div>
                            <CardTitle className="mt-4">{feature.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground">{feature.description}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
      </section>

       <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
          <div className="flex justify-center" data-ai-hint="mobile app ordering">
            <div className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[10px] rounded-[2.5rem] h-[550px] w-[270px] shadow-xl">
              <div className="w-[120px] h-[18px] bg-gray-800 top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute"></div>
              <div className="h-[32px] w-[3px] bg-gray-800 absolute -left-[13px] top-[64px] rounded-l-lg"></div>
              <div className="h-[32px] w-[3px] bg-gray-800 absolute -left-[13px] top-[124px] rounded-l-lg"></div>
              <div className="h-[48px] w-[3px] bg-gray-800 absolute -right-[13px] top-[128px] rounded-r-lg"></div>
              <div className="rounded-[2rem] overflow-hidden w-full h-full bg-white dark:bg-gray-800">
                <video
                    src="https://firebasestorage.googleapis.com/v0/b/restaurant-central-x36yb.firebasestorage.app/o/Bistro-cafe%2Fqirrus_qcafe%20web%20app.mp4?alt=media&token=3be3e589-aa32-4371-8da7-f21941bd2315"
                    playsInline
                    autoPlay
                    muted
                    loop
                    className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
            <div>
                <h2 className="text-3xl font-semibold tracking-tight">Branded mobile solution for your brand</h2>
                <p className="mt-4 text-lg text-muted-foreground">
                    Keep the line moving and your customers happy with a system that's easy for your whole team to use.
                </p>
                 <ul className="mt-8 space-y-4">
                    {benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start gap-3">
                            <CheckCircle className="h-6 w-6 text-green-500 mt-1 shrink-0" />
                            <span className="text-base">{benefit.text}</span>
                        </li>
                    ))}
                </ul>
                <Button variant="link" className="p-0 h-auto mt-6 text-lg">
                    Learn more about our POS
                </Button>
            </div>
        </div>
      </section>

      <section className="bg-white dark:bg-card py-16 md:py-24">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
            <div data-ai-hint="photo editor social media">
                <Image
                    src="https://firebasestorage.googleapis.com/v0/b/restaurant-central-x36yb.firebasestorage.app/o/Bistro-cafe%2Fsocial%20media%20image-business%20watermark.jpg?alt=media&token=25bb73cf-f49a-4ce9-89fd-977f667186bf"
                    alt="Social media photo editor"
                    width={600}
                    height={450}
                    className="rounded-xl shadow-2xl"
                />
            </div>
            <div>
                <h2 className="text-3xl font-bold tracking-tight">Photo Watermark: Turn Customer Photos into Free Marketing</h2>
                <p className="mt-4 text-lg text-muted-foreground">
                   Empower your customers to become brand ambassadors. Our Photo Watermark feature automatically adds your branding to their photos, turning every social share into a powerful ad for your restaurant.
                </p>
                <ul className="mt-8 space-y-4">
                    <li className="flex items-start gap-3">
                        <CheckCircle className="h-6 w-6 text-green-500 shrink-0 mt-1" />
                        <span><strong>Automatic Branding:</strong> Your restaurant's name and location are automatically added to customer photos.</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <CheckCircle className="h-6 w-6 text-green-500 shrink-0 mt-1" />
                        <span><strong>Drive App Traffic:</strong> Each watermarked photo includes a "Tap to visit our app" call-to-action.</span>
                    </li>
                     <li className="flex items-start gap-3">
                        <CheckCircle className="h-6 w-6 text-green-500 shrink-0 mt-1" />
                        <span><strong>Organic Reach:</strong> Leverage word-of-mouth marketing as customers share their dining experiences with friends and followers.</span>
                    </li>
                </ul>
                <Button asChild variant="link" className="p-0 mt-6 h-auto text-base text-primary">
                    <Link href="#">Learn More <MoveRight className="w-4 h-4 ml-1" /></Link>
                </Button>
            </div>
        </div>
      </section>
      
       <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">
            <div>
                <h2 className="text-3xl font-bold tracking-tight">CRM, Guest profile and Marketing</h2>
                <p className="mt-4 text-lg text-muted-foreground">
                    As your goals shift, you can quickly add tools that help your business, from managing team members to adding devices and locations, all with a couple of taps.
                </p>
                <ul className="mt-8 space-y-4">
                    {tools.map((tool, index) => (
                        <li key={index} className="flex items-start gap-3">
                            <Check className="h-6 w-6 text-blue-500 shrink-0 mt-1" />
                            <span>{tool.text}</span>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="relative" data-ai-hint="diner profile">
                <Image
                    src="https://firebasestorage.googleapis.com/v0/b/restaurant-central-x36yb.firebasestorage.app/o/Bistro-cafe%2FDiner%20profile.jpg?alt=media&token=3498b743-a6b5-4d56-bc5a-fcfb4a5de4cf"
                    alt="Diner profile in POS system"
                    width={600}
                    height={400}
                    className="rounded-xl shadow-2xl"
                />
                <div className="absolute top-1/2 -translate-y-1/2 -left-16 space-y-4 w-64">
                    <div className="bg-white dark:bg-card p-3 rounded-lg shadow-lg border flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-md"><Users className="w-5 h-5 text-blue-500" /></div>
                            <div>
                                <p className="font-semibold">Team Management</p>
                                <p className="text-sm text-muted-foreground">Installed</p>
                            </div>
                        </div>
                        <CheckCircle className="w-6 h-6 text-green-500" />
                    </div>
                     <div className="bg-white dark:bg-card p-3 rounded-lg shadow-lg border flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-md"><Star className="w-5 h-5 text-purple-500" /></div>
                            <div>
                                <p className="font-semibold">Loyalty</p>
                                <p className="text-sm text-muted-foreground">Free trial available</p>
                            </div>
                        </div>
                        <div className="w-6 h-6 rounded-full border-2 border-gray-300 dark:border-gray-600"></div>
                    </div>
                     <div className="bg-white dark:bg-card p-3 rounded-lg shadow-lg border flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-teal-100 dark:bg-teal-900/30 rounded-md"><Landmark className="w-5 h-5 text-teal-500" /></div>
                            <div>
                                <p className="font-semibold">Cash Management</p>
                                <p className="text-sm text-muted-foreground">Free</p>
                            </div>
                        </div>
                        <CheckCircle className="w-6 h-6 text-green-500" />
                    </div>
                </div>
            </div>
        </div>
      </section>

      <section className="bg-white dark:bg-card py-16 md:py-24">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
            <div>
                <h2 className="text-3xl font-semibold tracking-tight">Table and booking management</h2>
                <p className="mt-4 text-lg text-muted-foreground">
                    Launch a beautiful online store in minutes. Orders, items, and inventory are automatically synced with your POS, making management a breeze.
                </p>
                <div className="mt-6">
                    <Button asChild size="lg">
                        <Link href="#">Explore Online Ordering</Link>
                    </Button>
                </div>
            </div>
             <div data-ai-hint="online ordering screen">
                <Image
                    src="https://firebasestorage.googleapis.com/v0/b/restaurant-central-x36yb.firebasestorage.app/o/Bistro-cafe%2FQirrus_table_booking%20timeline%20management.jpg?alt=media&token=ddc5d4e1-9c07-4799-8c5b-f7e1d8a37c04"
                    alt="A tablet showing an online ordering website for a cafe"
                    width={600}
                    height={450}
                    className="rounded-xl shadow-2xl"
                />
            </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Qirrus vs. The Competition</h2>
                  <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">See how QBistro+ stacks up against other popular platforms.</p>
              </div>
              <Card>
                <CardContent className="p-0">
                  <Table>
                      <TableHeader>
                          <TableRow>
                              <TableHead className="w-1/3 pt-3">Features</TableHead>
                              <TableHead className="text-center pt-3">
                                  <p className="font-bold text-lg text-primary">QBistro+</p>
                                  <p className="font-normal text-muted-foreground">$149/mo</p>
                              </TableHead>
                              <TableHead className="text-center pt-3">
                                  <p className="font-bold text-lg">UEat app</p>
                                  <p className="font-normal text-muted-foreground">$149+/mo</p>
                              </TableHead>
                              <TableHead className="text-center pt-3">
                                  <p className="font-bold text-lg">Craver lead</p>
                                  <p className="font-normal text-muted-foreground">$549/mo</p>
                              </TableHead>
                          </TableRow>
                      </TableHeader>
                      <TableBody>
                          {comparisonFeatures.map((item) => (
                              <TableRow key={item.feature}>
                                  <TableCell className="font-medium">{item.feature}</TableCell>
                                  <TableCell className="text-center">{item.qbistro ? <CheckCircle className="h-6 w-6 text-green-500 mx-auto" /> : <XCircle className="h-6 w-6 text-red-500 mx-auto" />}</TableCell>
                                  <TableCell className="text-center">{item.ueat ? <CheckCircle className="h-6 w-6 text-green-500 mx-auto" /> : <XCircle className="h-6 w-6 text-red-500 mx-auto" />}</TableCell>
                                  <TableCell className="text-center">{item.craver ? <CheckCircle className="h-6 w-6 text-green-500 mx-auto" /> : <XCircle className="h-6 w-6 text-red-500 mx-auto" />}</TableCell>
                              </TableRow>
                          ))}
                      </TableBody>
                  </Table>
                </CardContent>
              </Card>
              <p className="text-center mt-8 text-muted-foreground">16 more features that engage customers and drive revenue.</p>
          </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
            <div className="flex justify-center">
              <FeeCalculator />
            </div>
        </div>
      </section>

      <section className="pt-4 pb-16 md:pb-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
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
        <div className="container mx-auto px-4 py-2">
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
