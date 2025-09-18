
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, Quote } from 'lucide-react';
import Link from 'next/link';
import { ContactSalesForm } from '@/components/contact-sales-form';

const benefits = [
    { text: 'Discuss the best solution to meet your business goals' },
    { text: 'Get tailored pricing information' },
    { text: 'Discover how to streamline cross-team workflows' },
];

const logos = [
    { name: 'motorola', src: 'https://placehold.co/100x40.png', hint: 'motorola logo' },
    { name: 'zippo', src: 'https://placehold.co/100x40.png', hint: 'zippo logo' },
    { name: 'lionsgate', src: 'https://placehold.co/100x40.png', hint: 'lionsgate logo' },
    { name: 'cocacola', src: 'https://placehold.co/100x40.png', hint: 'coca-cola logo' },
];

export default function ContactSalesPage() {
  return (
    <div className="bg-background text-foreground">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-16 items-start">
            {/* Left Column */}
            <div className="flex flex-col gap-12">
                <div>
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight">
                        Talk with our sales team to see how Qirrus can fit your needs
                    </h1>
                    <ul className="mt-8 space-y-4">
                        {benefits.map((benefit, index) => (
                            <li key={index} className="flex items-start gap-3">
                                <Check className="h-6 w-6 text-primary shrink-0 mt-1" />
                                <span className="text-lg">{benefit.text}</span>
                            </li>
                        ))}
                    </ul>
                    <p className="mt-8 text-muted-foreground">
                        For technical or billing support, visit our <Link href="#" className="text-primary underline">Help Center</Link>.
                    </p>
                </div>

                <Card className="bg-muted/50 border-none">
                    <CardContent className="p-6">
                        <Quote className="w-8 h-8 text-muted-foreground" />
                        <blockquote className="mt-4 text-lg italic">
                           "Qirrus Work OS saves us about 1,850 hrs of staff time and somewhere in the range of $50,000 a month."
                        </blockquote>
                        <div className="mt-6 flex items-center gap-4">
                            <Image
                                src="https://placehold.co/50x50.png"
                                alt="Stefana Muller"
                                width={50}
                                height={50}
                                className="rounded-full"
                                data-ai-hint="woman portrait"
                            />
                            <div>
                                <p className="font-semibold">Stefana Muller</p>
                                <p className="text-sm text-muted-foreground">Senior Director, CTO Product and Program Office | Oscar</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <div className="flex flex-wrap items-center gap-8 opacity-60">
                    {logos.map(logo => (
                        <Image
                            key={logo.name}
                            src={logo.src}
                            alt={`${logo.name} logo`}
                            width={100}
                            height={40}
                            data-ai-hint={logo.hint}
                        />
                    ))}
                </div>
            </div>

            {/* Right Column */}
            <div className="sticky top-24">
                <Card className="p-6 shadow-lg">
                    <CardHeader className="p-0 pb-6">
                        <CardTitle className="text-xl text-center">Contact our sales team</CardTitle>
                    </CardHeader>
                    <CardContent className="p-0">
                         <ContactSalesForm />
                    </CardContent>
                </Card>
            </div>
        </div>
      </div>
    </div>
  );
}
