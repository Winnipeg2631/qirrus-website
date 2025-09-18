import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { CheckCircle, Smartphone, UtensilsCrossed, Zap } from 'lucide-react';
import Link from 'next/link';

const features = [
  {
    icon: <Smartphone className="h-8 w-8 text-accent" />,
    title: 'Custom Menu Apps',
    description: 'Showcase your menu with beautiful, interactive, and easy-to-navigate mobile apps.',
  },
  {
    icon: <Zap className="h-8 w-8 text-accent" />,
    title: 'Seamless Ordering',
    description: 'Enable customers to order directly from their phones for pickup or delivery.',
  },
  {
    icon: <UtensilsCrossed className="h-8 w-8 text-accent" />,
    title: 'Kitchen Integration',
    description: 'Orders flow directly to your kitchen display system, reducing errors and saving time.',
  },
];

export default function WebAppBuilderPage() {
  return (
    <>
      <section className="bg-white dark:bg-card py-20 md:py-28">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
            Powerful Web Apps for Your Restaurant
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Engage your customers and streamline your operations with a custom-branded web app for menus and online ordering.
          </p>
          <Button asChild size="lg" className="mt-8">
            <Link href="#">Start Building Your App</Link>
          </Button>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight">The Modern Way to Dine</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Our web app builder helps you create a seamless digital experience for your customers, from browsing the menu to placing an order.
              </p>
              <ul className="mt-8 space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 mt-1 shrink-0 text-green-500" />
                  <span><strong>No App Store Needed:</strong> Instantly accessible to customers via a link or QR code.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 mt-1 shrink-0 text-green-500" />
                  <span><strong>Fully Branded:</strong> Customize the look and feel to match your restaurant's brand.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 mt-1 shrink-0 text-green-500" />
                  <span><strong>Real-time Updates:</strong> Update your menu, pricing, and specials anytime, from anywhere.</span>
                </li>
              </ul>
            </div>
            <div data-ai-hint="mobile app ordering">
              <Image
                src="https://placehold.co/500x550.png"
                alt="Mobile phone showing a restaurant app"
                width={500}
                height={550}
                className="mx-auto rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white dark:bg-card py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
              How It Works
            </h2>
          </div>
          <div className="mt-12 grid max-w-4xl mx-auto gap-8 md:grid-cols-3">
            {features.map((feature, index) => (
              <div key={feature.title} className="text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-accent/10">
                  {feature.icon}
                </div>
                <h3 className="mt-4 text-xl font-semibold">{feature.title}</h3>
                <p className="mt-2 text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
