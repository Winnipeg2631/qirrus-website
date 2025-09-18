
import { Mail, Phone, Building, MessageSquare, Newspaper, Headset, Briefcase, Zap } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

const contactMethods = [
  {
    icon: <Phone className="h-8 w-8 text-primary" />,
    title: 'Sales Inquiries',
    description: "Interested in our products? Let's talk about how Qirrus can help your business.",
    details: [
      { type: 'phone', text: '778-775-1864 Ext. 801' },
      { type: 'email', text: 'sales@qirrus.com' },
    ],
    button: {
      text: 'Contact Sales',
      href: '/contact-sales'
    }
  },
  {
    icon: <Headset className="h-8 w-8 text-primary" />,
    title: 'Customer Support',
    description: 'Get help with your existing Qirrus products and services.',
    details: [
        { type: 'phone', text: '778-775-1864 Ext. 802' },
        { type: 'email', text: 'support@qirrus.com' },
    ],
    button: {
        text: 'Visit Help Center',
        href: '#'
    }
  },
  {
    icon: <Zap className="h-8 w-8 text-primary" />,
    title: 'Technology Partner',
    description: 'Interested in partnering with us? Contact our technology team.',
    details: [
        { type: 'phone', text: '778-775-1864 Ext. 803' },
        { type: 'email', text: 'partners@qirrus.com' },
    ],
    button: {
        text: 'Email Partner Team',
        href: 'mailto:partners@qirrus.com'
    }
  },
];

const officeLocations = [
    {
        name: 'Head Office',
        address: '501 – 3292 Production Way, Burnaby, BC V5A 4R4',
        phone: '778-775-1864',
        email: 'Support@qirrus.com'
    },
    {
        name: 'Toronto Office',
        address: '456 Tech Avenue, Toronto, ON, M5V 2T6, Canada'
    }
]

export default function ContactPage() {
  return (
    <div className="bg-background text-foreground">
      <section className="bg-primary text-primary-foreground">
        <div className="grid md:grid-cols-2 items-center">
            <div className="container mx-auto px-4 py-20 md:py-36 pl-[calc(1rem_+_20px)]">
                 <Button asChild variant="secondary" className="rounded-full mb-6 bg-primary-foreground/10 hover:bg-primary-foreground/20 text-primary-foreground">
                    <Link href="/about">
                        <Briefcase className="h-4 w-4 mr-2" />
                        About Qirrus
                    </Link>
                </Button>
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                    Contact Us
                </h1>
            </div>
            <div className="h-full w-full relative min-h-[300px] md:min-h-0 pt-[24px]">
                <Image
                    src="https://firebasestorage.googleapis.com/v0/b/gilded-spoon-m4koo.firebasestorage.app/o/About%20us%2FQurris'%20customer%20support.jpg?alt=media&token=eca549bf-36dc-49e5-914d-d6cfa80d58e7"
                    alt="Customer service representative"
                    fill
                    className="object-cover md:rounded-l-2xl"
                    data-ai-hint="woman headset"
                />
            </div>
        </div>
      </section>
      
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {contactMethods.map((method) => (
              <Card key={method.title} className="flex flex-col">
                <CardHeader className="flex-row items-start gap-4 space-y-0">
                  {method.icon}
                  <div>
                    <CardTitle>{method.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground">{method.description}</p>
                   <div className="mt-4 space-y-2">
                        {method.details.map((detail, index) => (
                            <div key={index} className="flex items-center gap-2 text-sm">
                                {detail.type === 'phone' && <Phone className="w-4 h-4 text-muted-foreground" />}
                                {detail.type === 'email' && <Mail className="w-4 h-4 text-muted-foreground" />}
                                {detail.type === 'email' ? <a href={`mailto:${detail.text}`} className="hover:underline">{detail.text}</a> : <p>{detail.text}</p>}
                            </div>
                        ))}
                   </div>
                </CardContent>
                <div className="p-6 pt-0">
                   <Button asChild className="w-full">
                       <Link href={method.button.href}>{method.button.text}</Link>
                   </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-muted/40 py-16 md:py-24">
        <div className="container mx-auto px-4">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold tracking-tight">Our Offices</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {officeLocations.map((office) => (
                    <div key={office.name} className="text-center md:text-left">
                        <div className="flex justify-center md:justify-start items-center gap-3">
                            <Building className="w-6 h-6 text-primary" />
                            <h3 className="text-xl font-semibold">{office.name}</h3>
                        </div>
                        <div className="mt-2 text-muted-foreground space-y-1">
                            {office.phone && (
                                <div className="flex items-center justify-center md:justify-start gap-2">
                                    <Phone className="w-4 h-4" />
                                    <span>{office.phone}</span>
                                </div>
                            )}
                             {office.email && (
                                <div className="flex items-center justify-center md:justify-start gap-2">
                                    <Mail className="w-4 h-4" />
                                    <a href={`mailto:${office.email}`} className="hover:underline">{office.email}</a>
                                </div>
                            )}
                            <p>{office.address}</p>
                        </div>
                    </div>
                ))}
            </div>
             <div className="max-w-4xl mx-auto mt-12 text-center text-muted-foreground">
                <p>Support Ext. 1 | Billing Ext. 2 | Sales Ext. 3</p>
                <h4 className="font-semibold text-foreground mt-6 mb-2">Language availability</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <h5 className="font-semibold text-foreground">Support</h5>
                        <p>English 18/6</p>
                    </div>
                    <div>
                        <h5 className="font-semibold text-foreground">Billing (English)</h5>
                        <p>M-Th: 6:00AM - 10:00PM PST</p>
                        <p>Fri: 6:00AM - 10:00PM PST</p>
                        <p>Sun: 10:00PM - 10:00 PM PST</p>
                    </div>
                </div>
            </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 flex justify-center">
            <Image
                src="https://firebasestorage.googleapis.com/v0/b/gilded-spoon-m4koo.firebasestorage.app/o/About%20us%2FProudly-Canadian-Owned-and-Operated-1024x1024.png?alt=media&token=83d009f8-a2e3-4cce-9c25-f4e345f7c142"
                alt="Proudly Canadian Owned and Operated"
                width={300}
                height={300}
                className="mx-auto"
                data-ai-hint="proudly canadian badge"
            />
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold tracking-tight">Have a question?</h2>
            <p className="mt-4 max-w-xl mx-auto text-lg text-muted-foreground">Our support team is available 24/7. We're always happy to help you get the most out of Qirrus.</p>
            <Button asChild size="lg" className="mt-8">
                <Link href="#">Chat With Us</Link>
            </Button>
        </div>
      </section>
    </div>
  );
}
