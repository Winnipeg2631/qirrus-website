

import Image from 'next/image';
import {
  UtensilsCrossed,
  Laptop,
  ShoppingCart,
  CalendarDays,
  Sparkles,
  Quote,
  MoveRight,
  Search,
  Globe,
  Lock,
  Rocket,
  Wrench,
  LayoutTemplate,
  BookMarked,
  MessageSquare,
  ClipboardList,
  BarChart2,
  Mic,
  CheckCircle,
  Share2,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import Link from 'next/link';
import { Input } from '@/components/ui/input';
import { RoiCalculator } from '@/components/roi-calculator';
import { CookieConsent } from '@/components/cookie-consent';
import { ConsultationForm } from '@/components/consultation-form';
import { PartnersCarousel } from '@/components/partners-carousel';

const hospitalityConcepts = [
  {
    name: 'Cannabis and Liquor',
    image: 'https://firebasestorage.googleapis.com/v0/b/restaurant-central-x36yb.firebasestorage.app/o/home%20page%20images%2Fcannabis%20online%20store.jpg?alt=media&token=a4f021a5-313b-4b3e-8017-a7d1fd807b78',
    hint: 'cannabis store',
    href: '/cannabis'
  },
  {
    name: 'Upscale restaurant',
    image: 'https://firebasestorage.googleapis.com/v0/b/restaurant-central-x36yb.firebasestorage.app/o/home%20page%20images%2Ffriends%20enjoying%20diner%20at%20a%20upscale%20restaurant.jpg?alt=media&token=870a3ba9-a30a-4c23-b2cd-c9b9fc178d2c',
    hint: 'waitress taking order',
    href: '/upscale-dining'
  },
  {
      name: 'Cafe and Bistro',
      image: 'https://firebasestorage.googleapis.com/v0/b/restaurant-central-x36yb.firebasestorage.app/o/home%20page%20images%2Fwomen%20oener%20of%20a%20small%20restaurant_standing%20in%20front%20of%20her%20restaurant%20holding%20a%20ipad.jpg?alt=media&token=e2b9d432-f8dc-45c1-9869-1bf5aec0140c',
      hint: 'barista cafe order',
      href: '/cafe-and-bistro'
  }
];

const digInFeatures = [
    {
        icon: <LayoutTemplate className="w-8 h-8 text-accent" />,
        title: "Split bill",
        description: "Skip the awkward wait for the payment terminal to make its way around the table! With our in-app Split Bill feature, guests can pay simultaneously for the specific items they ordered with SMSPay. Guests have the option to receive a digital receipt for business filing as well."
    },
    {
        icon: <BookMarked className="w-8 h-8 text-accent" />,
        title: "3 Types of reservations",
        description: "Your branded web app will feature 3 booking types: Standard, Premium table select and pre-planned diner party called; Concierge service."
    },
    {
        icon: <MessageSquare className="w-8 h-8 text-accent" />,
        title: "Table ordering",
        description: "Guests can order using your branded web app, wait staff or a hybrid option! All ordered items are shared with the restaurant's POS system and the web app for easy and seamless checkout."
    },
    {
        icon: <ClipboardList className="w-8 h-8 text-accent" />,
        title: "Pre-plan diner with RSVP",
        description: "Create your dinner party, invite guests via SMS, and our AI will populate an RSVP message for you. Next step, all invited guests can pre-order and pay for their entrée and drinks. On your selected date, you and your guests will enjoy dining at the premium table you selected, perfect for the celebration at hand."
    },
    {
        icon: <Share2 className="w-8 h-8 text-accent" />,
        title: "Share the moment",
        description: "Guests can create branded content within the app and share it with their followers, driving traffic back to your restaurant for instant brand recognition!"
    },
    {
        icon: <Mic className="w-8 h-8 text-accent" />,
        title: "Sommelier audio and written review",
        description: "Guests will now have the opportunity to hear, or read about, the characteristics, background and details of a wine from your vast cellar."
    }
];

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="relative bg-black py-20 md:py-32 h-[81vh] md:h-[95vh] flex items-center justify-center text-white overflow-hidden">
           <video
            src="https://firebasestorage.googleapis.com/v0/b/restaurant-central-x36yb.firebasestorage.app/o/video%2F9fe8697f-c5ce-4f82-9664-52f5637e415a.mp4?alt=media&token=57cc1381-e68c-4c03-b3a9-2439e6d76fb2"
            autoPlay
            loop
            muted
            playsInline
            className="absolute z-0 w-auto min-w-full min-h-full max-w-none left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-70 object-cover"
          />
          <div className="relative z-10 container mx-auto px-4 flex flex-col items-center text-center">
            <h1 className="text-4xl font-semibold tracking-tight md:text-5xl lg:text-6xl max-w-4xl" style={{ lineHeight: 1.2 }}>
              Infused with AI and built for tomorrow's cafes to upscale restaurants
            </h1>
            <p className="mt-6 max-w-3xl text-lg">
                Your all-in-one platform for restaurant success! Infused with AI, and built for take out cafes to upscale dine in. We’ve designed every innovative feature with you in mind.
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <Button asChild size="lg">
                <Link href="/contact-sales">Request a demo</Link>
              </Button>
            </div>
          </div>
        </section>

        <section id="services" className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-semibold tracking-tight md:text-4xl mb-6">
                  Web app that turns tables and level up revenue
                </h2>
                <div className="space-y-6 text-lg">
                  <p>
                    Elevate your restaurant’s dining experience with Concierge Service! A new to market, brandable web app feature that gives your guests complete control.
                  </p>
                  <p>
                    This isn’t just a reservation tool, it’s a personalized dining journey. Your guests can preselect their perfect table, coordinate with their party guests via AI powered RSVP messages, plus pre-order and pre pay for their entire meal!
                  </p>
                  <p>
                    It doesn’t stop there. Guests can even schedule the exact moment they wish to have meal items and drinks delivered to the table ensuring a seamless and unhurried VIP experience.
                  </p>
                </div>
                <div className="mt-8">
                  <Button size="lg" asChild>
                    <Link href="/website-builder">Get It Now</Link>
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Image src="https://firebasestorage.googleapis.com/v0/b/restaurant-central-x36yb.firebasestorage.app/o/home%20page%20images%2FQlux%20web%20app%202%20screeb%20display.png?alt=media&token=12a21d81-10a7-4983-bb75-802af5fd7f24" alt="QLux web app interface" width={600} height={450} className="rounded-lg" />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">
                Dig Into More Features
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
              {digInFeatures.map((feature) => (
                <div key={feature.title} className="text-center">
                  <div className="flex justify-center items-center h-12">
                    {feature.icon}
                  </div>
                  <h3 className="mt-4 text-xl font-semibold">{feature.title}</h3>
                  <p className="mt-2 text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-white dark:bg-card">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-semibold tracking-tight md:text-5xl text-center">
                Unify online ordering & offer premium table selection to boost revenue
              </h2>
            </div>
            <div className="relative mb-12 flex justify-center">
               <Image
                src="https://firebasestorage.googleapis.com/v0/b/restaurant-central-x36yb.firebasestorage.app/o/home%20page%20images%2Fqirrus_online%20ordering%20and%20gift.jpg?alt=media&token=0c7b66d7-bfab-42a0-a873-8d252d681fd8"
                alt="AI powered tools for business"
                width={1000}
                height={500}
                className="rounded-lg shadow-2xl"
                data-ai-hint="business marketing"
              />
            </div>
            <div className="max-w-4xl mx-auto grid grid-cols-1 gap-8 md:grid-cols-3 text-center">
              <div className="text-center">
                <h3 className="text-xl font-semibold">Online ordering</h3>
                <p className="mt-2 text-muted-foreground">
                  Commission-free* online ordering added to your current website that’s powered by Qirrus' proven technology and low transaction fees.
                </p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold">Premium table select</h3>
                <p className="mt-2 text-muted-foreground">
                  Turn Premium tables into revenue centre and provide next level table booking service.
                </p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold">Gift card and loyalty</h3>
                <p className="mt-2 text-muted-foreground">
                  Our in-house gift card platform can be modified to fit your business needs.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-16 md:py-24 bg-white dark:bg-card">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-semibold tracking-tight">Why offer premium table select?</h2>
                <div className="prose lg:prose-lg text-muted-foreground mt-6">
                  <p>Why let prime real estate go for free? Diners are willing to pay a premium to secure the perfect table for their special occasions. Our platform integrates seamlessly with your existing reservation system, allowing you to:</p>
                    <ul>
                        <li>Create new revenue streams from tables you already have.</li>
                        <li>Increase average check size before guests even arrive.</li>
                        <li>Enhance the guest experience by guaranteeing their ideal evening.</li>
                        <li>Gain valuable data on what your customers value most.</li>
                    </ul>
                    <h3 className="text-xl font-semibold">(How the Partnership Works)</h3>
                    <p>It's simple and transparent. For every premium table reservation booked through our platform:</p>
                    <ul>
                        <li>You Keep 75% of the table fee.</li>
                        <li>We Earn 25% for a providing the platform, marketing, and secure payment processing.</li>
                    </ul>
                </div>
              </div>
              <div className="flex justify-center">
                <RoiCalculator />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-white dark:bg-card">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="md:order-2">
                <h2 className="text-4xl font-semibold tracking-tight">Mobile Solution for Cafes and Bistros</h2>
                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-semibold">Pre-order, dine-in</h3>
                    <p className="text-muted-foreground mt-2">Diners with limited time, can now pre-order and invite others via a SMS message and dine-in. Great solution for office professionals.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold">6 languages</h3>
                    <p className="text-muted-foreground mt-2">Guest can select their own preferred language for an uplevel experience.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold">Reservation</h3>
                    <p className="text-muted-foreground mt-2">The Qcafe's AI-powered platform is designed for your specific needs. Decide how you want to operate—as a reservation-based restaurant or a private event booking space—and we'll have your system configured and ready to go in under 60 minutes.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold">Gift or stamp programs</h3>
                    <p className="text-muted-foreground mt-2">The Qurris' in-house gift cards and stamp program offer the perfect way to keep customers coming back to your business in person and online.</p>
                  </div>
                </div>
              </div>
              <div className="md:order-1 flex justify-center">
                <Image 
                  src="https://firebasestorage.googleapis.com/v0/b/restaurant-central-x36yb.firebasestorage.app/o/home%20page%20images%2FQirrus%20Cafe%20web%20app.png?alt=media&token=0fd41ba6-bcbc-48b6-86bc-bbd4475691cb"
                  alt="Online shopping experience on a mobile phone"
                  width={250}
                  height={500}
                  className="rounded-xl shadow-2xl"
                  data-ai-hint="online shopping mobile"
                />
              </div>
            </div>
          </div>
        </section>
        
        <PartnersCarousel />

        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-lg font-semibold text-accent">Qirrus online</h2>
            <h3 className="mt-2 text-3xl font-semibold tracking-tight md:text-4xl">eCommerce store that produces results!</h3>
          </div>
          <div className="container mx-auto px-4 mt-12">
            <Image src="https://firebasestorage.googleapis.com/v0/b/restaurant-central-x36yb.firebasestorage.app/o/home%20page%20images%2FCannabis%20online%20store.jpg?alt=media&token=2184df81-6678-46e3-833c-547556366c01" alt="eCommerce for beverage stores" width={1200} height={600} className="rounded-lg shadow-xl" data-ai-hint="cannabis store" />
            <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
              <div className="rounded-lg bg-blue-50 p-6 dark:bg-blue-900/20">
                <h4 className="text-xl font-semibold">Wine shops</h4>
                <p className="mt-2 text-muted-foreground">Get online fast with our AI-powered website, ready for the new AI Google browser—You provide your inventory, and Qirrus creates the Magic.</p>
              </div>
              <div className="rounded-lg bg-blue-50 p-6 dark:bg-blue-900/20">
                <h4 className="text-xl font-semibold">Cannabis dispensary</h4>
                <p className="mt-2 text-muted-foreground">Qirrus' powered Cannabis website is ready to handle high-volume requests and always stay connected with a dependable and stable infrastructure you can rely on.</p>
              </div>
              <div className="rounded-lg bg-blue-50 p-6 dark:bg-blue-900/20">
                <h4 className="text-xl font-semibold">Liquor stores</h4>
                <p className="mt-2 text-muted-foreground">Qurris takes the complexity out of online selling, from credit card processing, for a faster checkout experience for your customers.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-10 md:py-14">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
              Built to enhance your hospitality
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              Learn how Qirrus serves any restaurant concept.
            </p>
          </div>
          <Carousel
            opts={{
              align: 'start',
            }}
            className="w-full mt-12"
          >
            <CarouselContent>
              {hospitalityConcepts.map((concept, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-4">
                    <Card className="overflow-hidden">
                      <CardContent className="p-0">
                        <Image
                          src={concept.image}
                          alt={concept.name}
                          width={600}
                          height={400}
                          className="h-auto w-full object-cover aspect-[3/2]"
                          data-ai-hint={concept.hint}
                        />
                      </CardContent>
                      <CardFooter className="p-4 flex items-center justify-between">
                        <h3 className="font-semibold">{concept.name}</h3>
                        <Button variant="link" asChild>
                           <Link href={concept.href}>Learn more <MoveRight className="w-4 h-4 ml-2" /></Link>
                        </Button>
                      </CardFooter>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </section>

        <section className="py-16 md:py-24 bg-blue-50 dark:bg-blue-900/20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-semibold text-center mb-12">Processing fees</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 max-w-4xl mx-auto">
              <div>
                <h3 className="text-xl font-semibold">Credit card present</h3>
                <p className="mt-2 text-muted-foreground">When a customer taps, inserts or swipes their credit card in person. Visa, Mastercard, American Express, Discover, and international credit cards all cost the same rate.</p>
                <p className="mt-4 text-lg font-semibold">1.72% per transaction</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold">Card not present</h3>
                <p className="mt-2 text-muted-foreground">When a customer makes a purchase through your Online Store, Online Checkout, eCommerce API or pays an invoice online.</p>
                <p className="mt-4 text-lg font-semibold">2.05% + 20¢ per transaction</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold">Debit card present</h3>
                <p className="mt-2 text-muted-foreground">When a customer taps or inserts their debit card in person.</p>
                <p className="mt-4 text-lg font-semibold">0.75% + 7¢ per debit transaction</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="bg-card rounded-lg shadow-xl overflow-hidden p-8 md:p-12 border">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
                <div className="text-card-foreground">
                  <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">To Ready join our AI platform, that give you freedom!</h2>
                  <p className="mt-4 text-muted-foreground">Qirrus help keep your tablesbooked, expedite the order process, payment and dedicated diners. We help growyour revenue, streamline your operations, and empower you to provide aconsistently exceptional guest experience.</p>
                  <div className="mt-8" data-ai-hint="pos system">
                    <Image src="https://firebasestorage.googleapis.com/v0/b/restaurant-central-x36yb.firebasestorage.app/o/home%20page%20images%2Frestaurant%20dashboard_mobile_desktop%20view.jpg?alt=media&token=49878fdf-42df-4fab-a36c-97358af6afcd" width={500} height={350} alt="POS system on tablet and phone" className="rounded-lg shadow-md" />
                  </div>
                </div>
                <div>
                   <ConsultationForm />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <CookieConsent />
    </div>
  );
}

    
