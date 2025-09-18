
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Share2, Mail, Search, MessageCircle, Star, Sparkles, Video, Palette, CalendarClock } from 'lucide-react';
import Link from 'next/link';

const marketingFeatures = [
  {
    icon: <Share2 className="h-8 w-8 text-accent" />,
    title: 'Social',
    description: 'Create and share eye-catching content on Facebook, Instagram, and more.',
  },
  {
    icon: <Mail className="h-8 w-8 text-accent" />,
    title: 'Email',
    description: 'Send beautiful, automated emails that turn subscribers into customers.',
  },
  {
    icon: <Search className="h-8 w-8 text-accent" />,
    title: 'SEO',
    description: 'Get found on Google and other search engines with our easy-to-use SEO tools.',
  },
  {
    icon: <MessageCircle className="h-8 w-8 text-accent" />,
    title: 'Reviews',
    description: 'Manage your online reputation and get more reviews from happy customers.',
  },
];

const planIncludes = [
    {
        icon: <Sparkles className="h-6 w-6 text-accent" />,
        title: "AI-generated content",
        description: "Take advantage of our AI to create customizable content."
    },
    {
        icon: <Mail className="h-6 w-6 text-accent" />,
        title: "Email marketing campaigns",
        description: "Reach out to customers to always be relevant and top of mind."
    },
    {
        icon: <CalendarClock className="h-6 w-6 text-accent" />,
        title: "Scheduled social media posts",
        description: "Stay active with regular posts that help drive performance."
    },
    {
        icon: <Video className="h-6 w-6 text-accent" />,
        title: "Branded images and videos",
        description: "Create content for your posts that include photos and videos."
    },
    {
        icon: <Palette className="h-6 w-6 text-accent" />,
        title: "Qirrus Studio",
        description: "Easily produce beautiful designs for your logo, website, and ads."
    }
]

const faqs = [
    {
        question: "Why do I need digital marketing for my business?",
        answer: "Digital marketing helps you reach a wider audience, connect with your customers, and grow your business. It allows you to build a strong online presence, drive traffic to your website, and increase sales."
    },
    {
        question: "Is this easy to use for beginners?",
        answer: "Absolutely! Our Digital Marketing Suite is designed for business owners, not marketing experts. We provide easy-to-use tools, templates, and guidance to help you create effective marketing campaigns, even with no prior experience."
    },
    {
        question: "Can I connect my own social media accounts?",
        answer: "Yes, you can easily connect your Facebook, Instagram, and other social media accounts to our platform. This allows you to manage all your social media marketing from one place."
    },
    {
        question: "How does the SEO tool work?",
        answer: "Our SEO tool analyzes your website and provides you with a personalized action plan to improve your search engine rankings. It helps you find the right keywords, optimize your content, and get your business listed in local directories."
    },
];

export default function DigitalMarketingPage() {
  return (
    <>
      <section className="bg-white dark:bg-card py-20 md:py-28">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-semibold tracking-tight md:text-5xl lg:text-6xl">
            Get the right customers, right away.
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg text-muted-foreground">
            Our all-in-one marketing suite makes it easy to find new customers and keep them coming back, from social and email to SEO.
          </p>
          <Button asChild size="lg" className="mt-8">
            <Link href="#">Start for Free</Link>
          </Button>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto bg-muted/50 dark:bg-card rounded-lg p-8">
                <div className="flex justify-start mb-4">
                    <span className="inline-block bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full">PLUS</span>
                </div>
                <h2 className="text-3xl font-semibold tracking-tight text-left mb-8">
                    Every Digital Marketing plan includes:
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {planIncludes.map((item) => (
                        <div key={item.title} className="flex items-start gap-4">
                            <div>{item.icon}</div>
                            <div>
                                <h3 className="font-semibold">{item.title}</h3>
                                <p className="text-muted-foreground text-sm">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
            <div className="text-center mb-12">
                <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">
                    Drive marketing from one dashboard.
                </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">
                <div>
                    <h3 className="text-3xl font-semibold tracking-tight">Never miss an opportunity — Marketing Planner.</h3>
                    <p className="mt-4 text-lg text-muted-foreground">
                        Marketing Planner notifies you of 200+ upcoming events to engage more customers. Create tailor-made content from templates to post on social and email.
                    </p>
                </div>
                 <div data-ai-hint="social media planner">
                    <Image
                        src="https://placehold.co/600x450.png"
                        alt="Marketing Planner showing a calendar to create social posts"
                        width={600}
                        height={450}
                        className="rounded-lg shadow-xl"
                    />
                </div>
            </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
              Qirrus's Digital Marketing Suite
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-lg text-muted-foreground">
              Everything you need to grow your business, all in one place.
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {marketingFeatures.map((feature) => (
              <Card key={feature.title} className="text-center">
                <CardHeader>
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-accent/10">
                    {feature.icon}
                  </div>
                  <CardTitle className="mt-4 text-xl">{feature.title}</CardTitle>
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
        <div className="container mx-auto grid grid-cols-1 items-center gap-12 px-4 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight">Create content that gets noticed.</h2>
            <p className="mt-4 text-lg text-muted-foreground">
                Use our AI-powered tools and templates to design stunning social posts, emails, and more in minutes. No design skills needed.
            </p>
            <Button asChild size="lg" variant="outline" className="mt-8">
              <Link href="#">Explore Content Creation</Link>
            </Button>
          </div>
           <div data-ai-hint="social media content creation">
            <Image
              src="https://placehold.co/600x450.png"
              alt="Person designing social media content on a laptop"
              width={600}
              height={450}
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </section>
      
      <section className="py-16 md:py-24">
        <div className="container mx-auto grid grid-cols-1 items-center gap-12 px-4 md:grid-cols-2">
           <div data-ai-hint="email marketing campaign">
            <Image
              src="https://placehold.co/600x450.png"
              alt="Email marketing campaign builder"
              width={600}
              height={450}
              className="rounded-lg shadow-xl"
            />
          </div>
          <div>
            <h2 className="text-3xl font-semibold tracking-tight">Drive sales with email marketing.</h2>
            <p className="mt-4 text-lg text-muted-foreground">
                Build your email list, send automated campaigns, and track your results with our powerful email marketing tools.
            </p>
            <Button asChild size="lg" variant="outline" className="mt-8">
              <Link href="#">Learn About Email Marketing</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-white dark:bg-card py-16 md:py-24">
        <div className="container mx-auto grid grid-cols-1 items-center gap-12 px-4 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight">Manage your social media in one place.</h2>
            <p className="mt-4 text-lg text-muted-foreground">
                Connect your social accounts, schedule posts, and engage with your followers without leaving our platform.
            </p>
            <Button asChild size="lg" variant="outline" className="mt-8">
              <Link href="#">See Social Media Tools</Link>
            </Button>
          </div>
           <div data-ai-hint="social media dashboard">
            <Image
              src="https://placehold.co/600x450.png"
              alt="Social media management dashboard"
              width={600}
              height={450}
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto grid grid-cols-1 items-center gap-12 px-4 md:grid-cols-2">
           <div data-ai-hint="seo optimization results">
            <Image
              src="https://placehold.co/600x450.png"
              alt="Graph showing SEO improvement"
              width={600}
              height={450}
              className="rounded-lg shadow-xl"
            />
          </div>
          <div>
            <h2 className="text-3xl font-semibold tracking-tight">Climb the ranks with SEO.</h2>
            <p className="mt-4 text-lg text-muted-foreground">
                Our SEO tools help you get found on Google. We'll guide you through optimizing your site, finding keywords, and getting listed in local directories.
            </p>
            <Button asChild size="lg" variant="outline" className="mt-8">
              <Link href="#">Discover SEO Tools</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-white dark:bg-card py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
              "Qirrus made marketing easy."
            </h2>
            <div className="mt-4 flex justify-center">
              {[...Array(5)].map((_, i) => <Star key={i} className="h-6 w-6 text-accent fill-accent" />)}
            </div>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              "Before Qirrus, I was spending hours trying to figure out marketing. Now, I can create and schedule a whole week of social media posts in 30 minutes. It's been a game-changer for my small cafe."
            </p>
            <div className="mt-6 font-semibold">
              <p>Alex Johnson</p>
              <p className="text-sm text-muted-foreground">Owner, The Daily Grind</p>
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

      <section className="bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 py-20 text-center">
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
                Ready to reach more customers?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-foreground/80">
                Start your free trial today. No credit card required.
            </p>
            <Button asChild size="lg" variant="secondary" className="mt-8">
              <Link href="#">Get Started Free</Link>
            </Button>
        </div>
      </section>
    </>
  );
}
