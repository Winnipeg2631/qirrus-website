

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Check, Star, CheckCircle, ArrowRight, Lightbulb, Bot, MessageSquare, Search, TrendingUp, ShieldCheck, CreditCard, BarChart2, Globe, Lock } from 'lucide-react';
import Link from 'next/link';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const features = [
    { text: "AI-powered website creation" },
    { text: "Drag-and-drop editor" },
    { text: "eCommerce functionality" },
    { text: "Marketing and SEO tools" },
];

const pricingPlans = [
    {
        name: 'Website Builder & Web Hosting',
        price: '3.99',
        renewalPrice: '8.99',
        features: [
            'AI Website Builder',
            'Free Domain',
            'Unmetered Traffic (Bandwidth)',
            'eCommerce with 0% Transaction Fees',
            'Marketing Integrations',
            'Free Email'
        ],
        recommended: false,
    },
    {
        name: 'Business Web Hosting',
        price: '4.99',
        renewalPrice: '11.99',
        features: [
            'AI Website Builder',
            'Free Domain',
            'Unmetered Traffic (Bandwidth)',
            'eCommerce with 0% Transaction Fees',
            'Marketing Integrations',
            'Free Email',
            'Enhanced Performance',
            'Daily Backups'
        ],
        recommended: true,
    }
];

const steps = [
    {
        number: '1',
        title: 'Answer a few questions',
        description: 'Describe your business or use our AI tools to get started.'
    },
    {
        number: '2',
        title: 'Customize your website',
        description: 'Use the drag-and-drop editor to change anything you like.'
    },
    {
        number: '3',
        title: 'Launch your website',
        description: 'Go live and start growing your online presence in minutes.'
    }
];

const allFeatures = [
    { icon: <Bot className="w-6 h-6 text-accent" />, title: "AI Writer", description: "Generate SEO-friendly content for your website." },
    { icon: <Lightbulb className="w-6 h-6 text-accent" />, title: "AI Logo Maker", description: "Create a unique logo for your business." },
    { icon: <MessageSquare className="w-6 h-6 text-accent" />, title: "AI Heatmaps", description: "See which parts of your site get the most attention." },
    { icon: <Search className="w-6 h-6 text-accent" />, title: "AI SEO Tools", description: "Improve your ranking on search engines." },
    { icon: <TrendingUp className="w-6 h-6 text-accent" />, title: "eCommerce", description: "Sell up to 500 products with no transaction fees." },
    { icon: <ShieldCheck className="w-6 h-6 text-accent" />, title: "Security", description: "Get a free SSL certificate and automatic backups." },
]

const faqs = [
    {
        question: "What is an AI website builder?",
        answer: "An AI website builder uses artificial intelligence to help you create a website quickly and easily. It can generate content, design layouts, and create logos based on your input, simplifying the entire process."
    },
    {
        question: "Is web hosting included in the Website Builder plans?",
        answer: "Yes, all our Website Builder plans come with web hosting included. You don't need to purchase hosting separately."
    },
    {
        question: "Can I use my own domain name?",
        answer: "Absolutely. You can connect your own domain name to your website. Our plans also include a free domain name for the first year."
    },
    {
        question: "Is it easy to build a website with Qirrus?",
        answer: "Yes! Our builder is designed for everyone, regardless of technical skill. With our drag-and-drop interface and AI tools, you can create a professional website in just a few simple steps."
    },
];

const impactFeatures = [
    {
        icon: <CreditCard className="w-7 h-7 text-primary" />,
        title: "On-the-go payments.",
        description: "All Moneris POS terminals enjoy cellular and wireless connectivity, so you can get paid wherever you go, worry-free."
    },
    {
        icon: <BarChart2 className="w-7 h-7 text-primary" />,
        title: "Real-time reports.",
        description: "Understand your business better than ever with payment and transaction reports that are available to you 24/7."
    },
    {
        icon: <Lock className="w-7 h-7 text-primary" />,
        title: "Fraud protection.",
        description: "Our solutions come equipped with anti-fraud safeguards, like Kount® Essential, 3-D Secure 2.0 and SSL certification."
    },
    {
        icon: <Globe className="w-7 h-7 text-primary" />,
        title: "Canadian to the core.",
        description: "Our solutions are designed with the Canadian market in mind, committed to the unique needs of businesses selling here."
    }
];


export default function WebsiteBuilderPage() {
  return (
    <div className="bg-background text-foreground">
      <section className="bg-white dark:bg-card py-16 md:py-24">
        <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight">Features designed to make a big impact on your small business.</h1>
                    <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-8">
                        {impactFeatures.map((feature, index) => (
                            <div key={index}>
                                <div className="flex items-center gap-3">
                                    {feature.icon}
                                    <h3 className="text-lg font-semibold">{feature.title}</h3>
                                </div>
                                <p className="mt-2 text-muted-foreground">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                     <div className="mt-8 flex items-center gap-4">
                        <Button size="lg" asChild>
                            <Link href="#pricing">Talk to sales</Link>
                        </Button>
                         <Button size="lg" variant="outline" asChild>
                            <Link href="#pricing">Order now</Link>
                        </Button>
                    </div>
                </div>
                <div data-ai-hint="woman working pottery">
                    <Image 
                        src="https://firebasestorage.googleapis.com/v0/b/restaurant-central-x36yb.firebasestorage.app/o/website%2FRestaurant%20template%20design%20bu%20Qirrus%201.png?alt=media&token=7a387fc7-cb58-4d9a-8200-ad6260004a78"
                        alt="Website builder interface showing a pottery artist's site"
                        width={600}
                        height={500}
                        className="rounded-xl shadow-2xl"
                    />
                </div>
            </div>
             <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                <div data-ai-hint="trustpilot logo">
                    <p className="font-bold">Trustpilot</p>
                    <div className="flex justify-center items-center gap-1 mt-1">
                        {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 text-green-500 fill-green-500" />)}
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">4.8/5</p>
                </div>
                <div data-ai-hint="google logo">
                     <p className="font-bold">Google</p>
                    <div className="flex justify-center items-center gap-1 mt-1">
                        {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />)}
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">4.7/5</p>
                </div>
                <div data-ai-hint="forbes logo">
                    <p className="font-bold">Forbes</p>
                    <p className="text-sm text-muted-foreground mt-1">Best Website Builder</p>
                </div>
                <div data-ai-hint="wpbeginner logo">
                     <p className="font-bold">WPBeginner</p>
                    <div className="flex justify-center items-center gap-1 mt-1">
                        {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 text-orange-400 fill-orange-400" />)}
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">4.6/5</p>
                </div>
            </div>
        </div>
      </section>

      <section id="pricing" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
            <div className="text-center mb-12 max-w-2xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Find the perfect website builder plan for you</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto items-start">
                {pricingPlans.map((plan) => (
                    <Card key={plan.name} className={`flex flex-col ${plan.recommended ? 'border-2 border-primary shadow-2xl' : ''}`}>
                        {plan.recommended && (
                          <div className="bg-primary text-primary-foreground text-xs font-semibold uppercase tracking-wider text-center py-1 rounded-t-lg -mt-px">
                            Most Popular
                          </div>
                        )}
                        <CardHeader>
                            <CardTitle className="text-2xl">{plan.name}</CardTitle>
                            <div className="flex items-baseline gap-2 pt-2">
                                <span className="text-4xl font-bold">${plan.price}</span>
                                <span className="text-muted-foreground">/ month</span>
                            </div>
                            <p className="text-sm text-muted-foreground">Renews at ${plan.renewalPrice}/mo</p>
                        </CardHeader>
                        <CardContent className="flex-grow">
                            <Button className="w-full mb-6" variant={plan.recommended ? 'default' : 'outline'}>Add to Cart</Button>
                            <ul className="space-y-4 text-sm">
                                {plan.features.map((feature, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <Check className="h-4 w-4 text-green-500 shrink-0 mt-1" />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
      </section>

      <section className="bg-white dark:bg-card py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Create a website in 3 easy steps</h2>
            <div className="mt-12 grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
                {steps.map((step) => (
                    <div key={step.number}>
                        <div className="flex items-center justify-center">
                            <div className="w-12 h-12 flex items-center justify-center bg-primary/10 text-primary font-bold text-2xl rounded-full">
                                {step.number}
                            </div>
                        </div>
                        <h3 className="text-xl font-semibold mt-6">{step.title}</h3>
                        <p className="text-muted-foreground mt-2">{step.description}</p>
                    </div>
                ))}
            </div>
            <Button size="lg" className="mt-12">Get Started</Button>
        </div>
      </section>
      
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-12 items-center bg-lime-300 dark:bg-lime-800 rounded-lg overflow-hidden">
            <div className="bg-slate-100 dark:bg-slate-900 p-8 md:p-12 lg:p-16 h-full flex items-center" data-ai-hint="website builder interface">
              <Image 
                src="https://firebasestorage.googleapis.com/v0/b/restaurant-central-x36yb.firebasestorage.app/o/website%2Fweb%20app%20of%20restaurant%20app%20design.png?alt=media&token=0ba8c382-5526-494a-8fd7-b4c93074d10a"
                width={600}
                height={500}
                alt="Website builder UI showing a product page for a purple jacket"
                className="rounded-lg shadow-2xl"
              />
            </div>
            <div className="p-8 md:p-12 lg:p-16 text-slate-900 dark:text-slate-50">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Start selling online faster with AI</h2>
              <ul className="mt-6 space-y-4">
                <li className="flex items-start gap-3">
                  <Check className="h-6 w-6 text-current shrink-0 mt-1" />
                  <span>Describe your store and let AI build a high-converting storefront and product pages.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-6 w-6 text-current shrink-0 mt-1" />
                  <span>Upload product images to instantly generate descriptions and remove backgrounds.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-6 w-6 text-current shrink-0 mt-1" />
                  <span>Sell up to 600 products with 100+ payment methods and no hidden transaction fees.</span>
                </li>
              </ul>
              <Button size="lg" className="mt-8 bg-white text-slate-900 hover:bg-slate-200">Get started</Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-accent/10">
          <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
              <div className="max-w-md">
                <span className="font-semibold text-accent">START SELLING ONLINE</span>
                <h2 className="text-3xl font-bold tracking-tight mt-2">Start selling online faster with AI</h2>
                <p className="mt-4 text-muted-foreground">Answer a few questions about your business and get a personalized online store, complete with AI-generated descriptions and photos.</p>
                <ul className="mt-6 space-y-3">
                    <li className="flex items-center gap-3"><CheckCircle className="h-5 w-5 text-primary" /><span>Payment processing tools</span></li>
                    <li className="flex items-center gap-3"><CheckCircle className="h-5 w-5 text-primary" /><span>Online booking system</span></li>
                    <li className="flex items-center gap-3"><CheckCircle className="h-5 w-5 text-primary" /><span>Lead-capture forms</span></li>
                </ul>
              </div>
              <div className="bg-background/80 p-8 rounded-xl shadow-lg">
                  <h3 className="font-semibold text-lg">You get all these features with any plan:</h3>
                  <div className="mt-6 grid grid-cols-2 gap-6">
                      <div className="flex items-center gap-3"><Check className="text-green-500" /><span>Free Domain</span></div>
                      <div className="flex items-center gap-3"><Check className="text-green-500" /><span>Free Email</span></div>
                      <div className="flex items-center gap-3"><Check className="text-green-500" /><span>24/7 Customer Support</span></div>
                      <div className="flex items-center gap-3"><Check className="text-green-500" /><span>99.9% Uptime Guarantee</span></div>
                      <div className="flex items-center gap-3"><Check className="text-green-500" /><span>eCommerce Functionality</span></div>
                      <div className="flex items-center gap-3"><Check className="text-green-500" /><span>Marketing Tools</span></div>
                  </div>
              </div>
          </div>
      </section>

      <section id="templates" className="bg-white dark:bg-card py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
              Choose a website template that inspires you
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-lg text-muted-foreground">
              Browse dozens of designer-made templates. Find one that fits your style and industry.
            </p>
             <Button variant="outline" className="mt-6">Browse all templates</Button>
          </div>
        </div>
      </section>
      
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
             <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Build a website your way</h2>
             <p className="mx-auto mt-3 max-w-2xl text-lg text-muted-foreground">
              All the tools you need to bring your vision to life, with the power of AI.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              {allFeatures.map(feature => (
                  <div key={feature.title} className="flex items-start gap-4">
                      {feature.icon}
                      <div>
                          <h3 className="font-semibold">{feature.title}</h3>
                          <p className="text-sm text-muted-foreground">{feature.description}</p>
                      </div>
                  </div>
              ))}
          </div>
           <div className="text-center mt-12">
                <Button size="lg">Explore all features</Button>
            </div>
        </div>
      </section>
      
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
                        Frequently Asked Questions
                    </h2>
                </div>
                <Accordion type="single" collapsible className="w-full">
                    {faqs.map((faq, index) => (
                        <AccordionItem key={index} value={`item-${index}`}>
                            <AccordionTrigger className="text-lg text-left">{faq.question}</AccordionTrigger>
                            <AccordionContent className="text-base text-muted-foreground">
                                {faq.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </div>
      </section>

      <section className="bg-white dark:bg-card py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">We're here for you 24/7</h2>
              <ul className="mt-6 space-y-4">
                <li className="flex items-start gap-3">
                  <Check className="h-6 w-6 text-green-500 shrink-0 mt-1" />
                  <span>Reach us on live chat or email, whichever you prefer.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-6 w-6 text-green-500 shrink-0 mt-1" />
                  <span>No frustrating waiting times – on average, we respond in less than 3 minutes.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-6 w-6 text-green-500 shrink-0 mt-1" />
                  <span>Our agents are fluent in 8+ languages so you can be sure communication will be smooth.</span>
                </li>
              </ul>
            </div>
            <div className="relative" data-ai-hint="customer support chat">
              <div className="absolute top-0 left-1/4 w-3/4 h-full bg-lime-300 dark:bg-lime-800 rounded-lg -z-10 skew-x-[-10deg]"></div>
              <div className="relative space-y-4">
                <div className="bg-card p-4 rounded-lg shadow-lg flex items-center justify-between ml-auto w-2/3">
                  <p className="text-sm">Hey, can you tell me how to change a domain?</p>
                  <Image src="https://placehold.co/40x40.png" width={40} height={40} alt="User Avatar" className="rounded-full" data-ai-hint="woman portrait" />
                </div>
                <div className="bg-gray-800 text-white p-4 rounded-lg shadow-lg w-2/3">
                  <p className="text-sm">Sure thing! Follow this <Link href="#" className="text-lime-300 underline">guide</Link> to change your domain in just a few steps. If anything, I will be here to help.</p>
                </div>
                 <Image src="https://placehold.co/40x40.png" width={40} height={40} alt="Support Agent Avatar" className="rounded-full absolute bottom-0 right-0 -mr-5 -mb-5 border-4 border-background" data-ai-hint="man portrait" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 py-20 text-center">
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
                Start creating your website today. It's easier than you think.
            </h2>
            <Button asChild size="lg" variant="secondary" className="mt-8">
                <Link href="#pricing">Get Started Now</Link>
            </Button>
        </div>
      </section>
    </div>
  );
}
