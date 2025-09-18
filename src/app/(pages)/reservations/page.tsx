

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { CalendarDays, Users, Bell, Table, Star, CheckCircle, Clock, MoveRight, UserCheck, Tag, BarChart, Settings, Gift, BarChart2, Check, GiftIcon, UserPlus, Repeat, PieChart, TrendingUp } from 'lucide-react';
import Link from 'next/link';

const features = [
  {
    icon: <CalendarDays className="h-8 w-8 text-accent" />,
    title: '24/7 Online Booking',
    description: 'Accept reservations anytime, from your website or social media profiles.',
  },
  {
    icon: <Table className="h-8 w-8 text-accent" />,
    title: 'Table Management',
    description: 'Optimize your floor plan and seating capacity with our visual table manager.',
  },
  {
    icon: <Bell className="h-8 w-8 text-accent" />,
    title: 'Automated Notifications',
    description: 'Reduce no-shows with automated SMS and email reminders for customers.',
  },
  {
    icon: <Users className="h-8 w-8 text-accent" />,
    title: 'Guest Database',
    description: 'Build a guest database to track preferences and provide personalized service.',
  },
];

const planIncludes = [
    {
        icon: <CalendarDays className="h-6 w-6 text-accent" />,
        title: "Unlimited Reservations",
        description: "Take as many bookings as you need without any caps."
    },
    {
        icon: <Table className="h-6 w-6 text-accent" />,
        title: "Visual Table Management",
        description: "Easily manage your floor plan and assign tables."
    },
    {
        icon: <Users className="h-6 w-6 text-accent" />,
        title: "Guest Profiles & History",
        description: "Keep track of your regulars and their preferences."
    },
    {
        icon: <Bell className="h-6 w-6 text-accent" />,
        title: "Automated Waitlist",
        description: "Manage walk-ins and notify guests when their table is ready."
    },
    {
        icon: <Clock className="h-6 w-6 text-accent" />,
        title: "Shift & Schedule Planning",
        description: "Plan your staff and table availability with ease."
    },
    {
        icon: <CheckCircle className="h-6 w-6 text-accent" />,
        title: "Custom Booking Rules",
        description: "Set turn times, party sizes, and reservation availability."
    }
];

const guestProfileFeatures = [
    {
        icon: <UserCheck className="h-6 w-6 text-green-500" />,
        text: "Collect and build detailed guest profiles automatically with preferences, special occasions, guest notes, visits, order and purchase history."
    },
    {
        icon: <Tag className="h-6 w-6 text-green-500" />,
        text: "Track lifetime and itemized spend via 65+ POS integrations to empower front-of-house staff and marketing."
    },
    {
        icon: <BarChart className="h-6 w-6 text-green-500" />,
        text: "Centralize guest profiles for a unified view of the customer across locations and departments."
    },
];

const guestDataFeatures = [
    {
        icon: <BarChart2 className="h-6 w-6 text-green-500" />,
        text: "Slice and dice your data to build lookalike audiences of your top guests, and create high-intent marketing segments."
    },
    {
        icon: <Gift className="h-6 w-6 text-green-500" />,
        text: "Find new champions based on visit history and POS sales data and turn them into raving fans with in-service Perks to reward them for their loyalty."
    },
    {
        icon: <Settings className="h-6 w-6 text-green-500" />,
        text: "Easily export guest data or specific segments to fuel personalized marketing campaigns."
    }
];

const pricingPlans = [
    {
        name: 'Basic',
        price: '29',
        description: 'Get the basics you need to start managing reservations.',
        features: [
            'Online booking page',
            'Table management for up to 20 tables',
            'Guest database for up to 500 contacts',
            'Automated email confirmations'
        ],
        recommended: false,
    },
    {
        name: 'Pro',
        price: '79',
        description: 'Boost your efficiency with robust tools for a growing business.',
        features: [
            'Includes all the features of Basic plus:',
            'SMS reminders to reduce no-shows',
            'Waitlist management',
            'Advanced guest analytics',
            'Table management for up to 50 tables',
            'Customizable booking widget'
        ],
        recommended: true,
    },
    {
        name: 'Ultimate',
        price: '149',
        description: 'Maximize your growth with full access to powerful features.',
        features: [
            'Includes all the features of Pro plus:',
            'POS integration',
            'Customizable guest surveys',
            'API access for custom solutions',
            'Dedicated account manager',
            'Unlimited tables and contacts'
        ],
        recommended: false,
    }
]

const giftCardFeatures = [
    {
        title: "Gift Cards",
        content: "Offer reloadable gift cards that match your company branding. Refill them easily with our ordering system. Use your own POS or terminal to add and check balances and redeem them in-store."
    },
    {
        title: "Promo Cards",
        content: "Drive new business with promotional cards. Offer a discount on a future visit or a free item to get new customers in the door."
    },
    {
        title: "E-gift Cards",
        content: "Sell digital gift cards directly from your website. Customers can send them to friends and family via email, making it a convenient gift option."
    },
    {
        title: "E-Gift Promo Cards",
        content: "Run targeted digital promotions with E-Gift Promo Cards. Perfect for online campaigns and reaching a wider audience."
    }
];

const giftCardBenefits = [
    {
        icon: <UserPlus className="h-8 w-8 text-green-500" />,
        title: "Attract new customers",
        description: "41% of people who receive a gift card visit a new business as a result."
    },
    {
        icon: <Repeat className="h-8 w-8 text-green-500" />,
        title: "Encourage repeat visits",
        description: "55% of gift card recipients need more than one visit to spend the card's entire value."
    },
    {
        icon: <PieChart className="h-8 w-8 text-green-500" />,
        title: "See better profits",
        description: "30% of gift card balances remain unused, contributing to your bottom line as \"breakage\"."
    },
    {
        icon: <TrendingUp className="h-8 w-8 text-green-500" />,
        title: "Boost revenue",
        description: "59% of gift card recipients spend more than their gift card's original value."
    }
];

export default function ReservationsPage() {
  return (
    <>
      <section className="bg-white dark:bg-card py-20 md:py-28">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
            Never Miss a Reservation
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Streamline your booking process, manage tables efficiently, and reduce no-shows with our all-in-one reservation system.
          </p>
          <Button asChild size="lg" className="mt-8">
            <Link href="#">Get a Demo</Link>
          </Button>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto bg-muted/50 dark:bg-card rounded-lg p-8">
                <div className="flex justify-start mb-4">
                    <span className="inline-block bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full">STANDARD</span>
                </div>
                <h2 className="text-3xl font-semibold tracking-tight text-left mb-8">
                    Every Reservation plan includes:
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

      <section className="bg-white dark:bg-card py-16 md:py-24">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div data-ai-hint="customer profile card">
            <Image src="https://placehold.co/600x700.png" alt="Guest profile card for Liam Crawford" width={600} height={700} className="rounded-xl shadow-2xl" />
          </div>
          <div>
            <h2 className="text-4xl font-semibold tracking-tight">Actionable guest profiles, built automatically</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              360° guest profiles built automatically with over 100 unique data points on each of your diners to spice up service and supercharge marketing.
            </p>
            <ul className="mt-8 space-y-6">
                {guestProfileFeatures.map((feature, index) => (
                    <li key={index} className="flex items-start gap-4">
                        <div className="flex-shrink-0 mt-1">{feature.icon}</div>
                        <p className="text-muted-foreground">{feature.text}</p>
                    </li>
                ))}
            </ul>
          </div>
        </div>
      </section>
      
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div data-ai-hint="customer database crm">
            <Image src="https://placehold.co/600x450.png" alt="Customer database with filters" width={600} height={450} className="rounded-xl shadow-2xl" />
          </div>
          <div>
            <h2 className="text-4xl font-semibold tracking-tight">Use guest data to create targeted marketing and personalized experiences</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Quickly find customer subsegments like "big spenders" and "brand champions" to uncover engaged guests and serve them up tailored service and marketing.
            </p>
            <ul className="mt-8 space-y-6">
                {guestDataFeatures.map((feature, index) => (
                    <li key={index} className="flex items-start gap-4">
                        <div className="flex-shrink-0 mt-1">{feature.icon}</div>
                        <p className="text-muted-foreground">{feature.text}</p>
                    </li>
                ))}
            </ul>
          </div>
        </div>
      </section>

       <section className="bg-white dark:bg-card py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Join the Waitlist</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                No tables available? No problem. Let your guests join a digital waitlist and receive an SMS notification as soon as their table is ready. Reduce walkaways and keep your restaurant full.
              </p>
            </div>
            <div data-ai-hint="restaurant hostess tablet">
              <Image 
                src="https://placehold.co/600x450.png"
                width={600}
                height={450}
                alt="Hostess managing a waitlist on a tablet"
                className="rounded-xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
            <div className="text-center mb-12">
                <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">
                    Your front-of-house command center.
                </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">
                <div>
                    <h3 className="text-3xl font-semibold tracking-tight">Stay in control, from anywhere.</h3>
                    <p className="mt-4 text-lg text-muted-foreground">
                        Our powerful dashboard gives you a real-time view of your floor, from table status and server assignments to guest notes and waitlist times.
                    </p>
                </div>
                 <div data-ai-hint="restaurant dashboard">
                    <Image
                        src="https://placehold.co/600x450.png"
                        alt="Restaurant reservation dashboard on a tablet"
                        width={600}
                        height={450}
                        className="rounded-lg shadow-xl"
                    />
                </div>
            </div>
        </div>
      </section>

      <section className="bg-white dark:bg-card py-16 md:py-24">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12 px-4">
            <div data-ai-hint="woman social media">
              <Image
                src="https://placehold.co/600x400.png"
                alt="Woman engaging with social media on her phone"
                width={600}
                height={400}
                className="rounded-lg shadow-xl"
              />
            </div>
            <div>
              <h2 className="text-3xl font-semibold tracking-tight">Engage with social and email.</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Target customers with social content and easy-to-create emails to reinforce your brand.
              </p>
            </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto grid grid-cols-1 items-center gap-12 px-4 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight">Get found with SEO.</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Get your site Google-ready to help customers find your business.
            </p>
          </div>
          <div data-ai-hint="woman searching phone">
            <Image
              src="https://placehold.co/600x450.png"
              alt="Woman searching on her phone with Google results overlay"
              width={600}
              height={450}
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
              Fill Your Seats, Effortlessly
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-lg text-muted-foreground">
              Our reservation system is designed to help you maximize your revenue and provide a better guest experience.
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
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
          <div data-ai-hint="restaurant reservation system">
            <Image
              src="https://placehold.co/600x450.png"
              alt="Reservation system on a tablet"
              width={600}
              height={450}
              className="rounded-lg shadow-xl"
            />
          </div>
          <div>
            <h2 className="text-3xl font-semibold tracking-tight">Your Command Center</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Manage your entire front-of-house from one intuitive dashboard. See upcoming reservations, assign tables, and manage your waitlist with ease.
            </p>
            <Button asChild size="lg" variant="outline" className="mt-8">
              <Link href="/dashboard">Explore the Dashboard</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto grid grid-cols-1 items-center gap-12 px-4 md:grid-cols-2">
            <div>
                <h2 className="text-3xl font-semibold tracking-tight">Plug into a global network of last-mile delivery partners</h2>
                <p className="mt-4 text-lg text-muted-foreground">
                    Expand the reach of your online ordering with our network of popular last-mile delivery partners.
                </p>
                <ul className="mt-6 space-y-4">
                    <li className="flex items-start gap-3">
                        <CheckCircle className="h-6 w-6 shrink-0 text-green-500 mt-1" />
                        <span>Integrate your restaurant online ordering system with leading restaurant last-mile delivery platforms like DoorDash Drive, Drive Yello, Deliverect and more.</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <CheckCircle className="h-6 w-6 shrink-0 text-green-500 mt-1" />
                        <span>Get more direct, commission-free online orders via booking integrations like Google, Facebook and Instagram.</span>
                    </li>
                </ul>
            </div>
            <div className="relative" data-ai-hint="delivery person">
                <Image
                    src="https://firebasestorage.googleapis.com/v0/b/gilded-spoon-m4koo.firebasestorage.app/o/Upscale%2FA%20food%20delivery%20driver%20is%20handing%20a%20customer%20her%20food%20order%20in%20front%20of%20the%20customer's%20condo%20building.jpg?alt=media&token=a38e2da4-8c61-4a8a-b23c-9fb096b1adef"
                    alt="Customer receiving a delivery"
                    width={600}
                    height={450}
                    className="rounded-lg shadow-xl"
                />
                <div className="absolute top-4 right-4 bg-white p-4 rounded-lg shadow-lg w-48">
                    <div className="space-y-4">
                        <Image src="https://placehold.co/120x30.png" alt="Doordash Drive" width={120} height={30} data-ai-hint="doordash logo" />
                        <Image src="https://placehold.co/120x30.png" alt="Yello" width={120} height={30} data-ai-hint="yello logo" />
                        <Image src="https://placehold.co/120x30.png" alt="Deliverect" width={120} height={30} data-ai-hint="deliverect logo" />
                    </div>
                </div>
            </div>
        </div>
      </section>
      
       <section className="bg-white dark:bg-card py-16 md:py-24">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 items-center gap-16">
            <div className="relative" data-ai-hint="gift card">
                <div className="bg-green-700/20 dark:bg-green-900/30 rounded-full aspect-square w-[80%] absolute -left-10 -top-10"></div>
                <Image 
                    src="https://placehold.co/500x350.png" 
                    alt="Gift Card" 
                    width={500} 
                    height={350} 
                    className="rounded-xl shadow-lg relative z-10"
                />
                 <div className="absolute -bottom-8 -right-8 bg-card p-4 rounded-xl shadow-lg border">
                    <GiftIcon className="h-12 w-12 text-accent" />
                 </div>
            </div>
            <div>
                <h2 className="text-3xl font-semibold tracking-tight">Boost traffic, increase sales, and resolve customer service issues</h2>
                <Accordion type="single" collapsible className="w-full mt-8" defaultValue="item-0">
                    {giftCardFeatures.map((feature, index) => (
                        <AccordionItem key={index} value={`item-${index}`}>
                            <AccordionTrigger className="text-lg">{feature.title}</AccordionTrigger>
                            <AccordionContent className="text-muted-foreground">
                                {feature.content}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {giftCardBenefits.map((benefit) => (
              <div key={benefit.title} className="text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/30">
                  {benefit.icon}
                </div>
                <h3 className="mt-4 text-xl font-semibold">{benefit.title}</h3>
                <p className="mt-2 text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

       <section className="bg-white dark:bg-card py-16 md:py-24">
        <div className="container mx-auto px-4">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
                    Find the perfect plan for your restaurant
                </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
                {pricingPlans.map((plan) => (
                    <Card key={plan.name} className={`flex flex-col ${plan.recommended ? 'border-2 border-accent shadow-lg' : ''}`}>
                         {plan.recommended && (
                            <div className="bg-accent text-accent-foreground text-xs font-bold uppercase tracking-wider text-center py-1 rounded-t-lg -mt-px">
                                Recommended
                            </div>
                        )}
                        <CardHeader className="text-center">
                            <CardTitle className="text-2xl font-semibold">{plan.name}</CardTitle>
                            <p className="text-muted-foreground">{plan.description}</p>
                        </CardHeader>
                        <CardContent className="flex-grow">
                            <div className="text-center mb-6">
                                <span className="text-4xl font-bold">${plan.price}</span>
                                <span className="text-muted-foreground">/mo</span>
                                <p className="text-xs text-muted-foreground mt-1">First 30 days free. Credit card required.</p>
                            </div>
                            <Button className="w-full" variant={plan.recommended ? 'default' : 'outline'}>
                                Start for Free
                            </Button>
                             <div className="mt-6 space-y-4 text-sm text-muted-foreground">
                                {plan.features.map((feature, index) => (
                                    <div key={index} className="flex items-start gap-3">
                                        <Check className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                                        <span>{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
       </section>
      
      <section className="bg-gray-800 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">
            <div data-ai-hint="takeout food bag">
              <Image 
                src="https://placehold.co/600x400.png"
                alt="Takeout bag being handed to a customer"
                width={600}
                height={400}
                className="rounded-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl font-semibold tracking-tight">Takeout & Food Delivery Best Practices</h2>
              <p className="mt-4 text-lg text-gray-300">
                Turn your takeout and delivery service into a booming business with these actionable tips and industry best practices.
              </p>
              <Button asChild variant="link" className="mt-4 text-white p-0 h-auto text-lg">
                <Link href="#">
                  Read more <MoveRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
