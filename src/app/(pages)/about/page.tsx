
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Building, Target, Users, Handshake, Globe, BarChart, Briefcase } from 'lucide-react';
import Link from 'next/link';

const values = [
    {
        icon: <Building className="h-8 w-8 text-primary" />,
        title: 'Innovation',
        description: 'We are constantly pushing the boundaries of technology to create cutting-edge solutions that empower restaurant owners and operators.'
    },
    {
        icon: <Users className="h-8 w-8 text-primary" />,
        title: 'Customer-Centric',
        description: 'Our customers are at the heart of everything we do. We are dedicated to providing exceptional support and building long-lasting partnerships.'
    },
    {
        icon: <Handshake className="h-8 w-8 text-primary" />,
        title: 'Integrity',
        description: 'We believe in transparency, honesty, and ethical practices in all our business dealings. Trust is the foundation of our relationships.'
    }
];

const teamMembers = [
    {
        name: 'Alex Chen',
        role: 'Founder & CEO',
        image: 'https://placehold.co/400x400.png',
        hint: 'man portrait'
    },
    {
        name: 'Samantha Rodriguez',
        role: 'Chief Technology Officer',
        image: 'https://placehold.co/400x400.png',
        hint: 'woman portrait'
    },
    {
        name: 'David Lee',
        role: 'Head of Product',
        image: 'https://placehold.co/400x400.png',
        hint: 'man portrait'
    },
    {
        name: 'Maria Garcia',
        role: 'VP of Customer Success',
        image: 'https://placehold.co/400x400.png',
        hint: 'woman portrait'
    }
]

export default function AboutUsPage() {
  return (
    <div className="bg-background text-foreground">
      
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground">
        <div className="grid md:grid-cols-2 items-center gap-0">
          <div className="container mx-auto px-4">
            <div className="py-20 md:py-28 text-left pr-8">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/50 px-4 py-2 mb-6">
                  <Briefcase className="h-5 w-5" />
                  <span>About Qirrus</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                About Qirrus
              </h1>
              <p className="mt-6 text-lg text-primary-foreground/80">
                  We are pioneers in restaurant technology, dedicated to empowering businesses of all sizes with the tools they need to thrive in a digital world.
              </p>
            </div>
          </div>
          <div className="relative h-96 md:h-[500px] w-full bg-primary pt-[22px]" data-ai-hint="store owners">
              <Image 
                src="https://firebasestorage.googleapis.com/v0/b/gilded-spoon-m4koo.firebasestorage.app/o/About%20us%2FCannabis%20store%20owners%2C%20opening%20their%20doors%20with%20a%20welcome%20gesture.jpg?alt=media&token=2d9a6c17-02a9-498e-aa29-5d0ef9b3d082"
                alt="Store owners welcoming customers"
                fill
                className="object-cover md:rounded-l-2xl"
              />
          </div>
        </div>
      </section>

      {/* Proudly Canadian Badge Section */}
      <section className="py-10">
        <div className="container mx-auto px-4 flex justify-center">
            <Image
                src="https://firebasestorage.googleapis.com/v0/b/gilded-spoon-m4koo.firebasestorage.app/o/About%20us%2FProudly-Canadian-Owned-and-Operated-1024x1024.png?alt=media&token=83d009f8-a2e3-4cce-9c25-f4e345f7c142"
                alt="Proudly Canadian Owned and Operated"
                width={168}
                height={168}
                className="mx-auto"
                data-ai-hint="proudly canadian badge"
            />
        </div>
      </section>

      {/* Our Story Section */}
       <section className="pb-10 pt-4 md:pb-14 md:pt-8">
        <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold tracking-tight">Our Story</h2>
                 <p className="mt-4 text-lg text-muted-foreground">
                    Our mission is to simplify complexity and drive growth through innovation and partnership.
                </p>
            </div>
        </div>
      </section>
      
      {/* Alternating Sections */}
      <section className="bg-primary text-primary-foreground">
        <div className="grid md:grid-cols-2 items-center gap-0">
          <div className="container mx-auto">
            <div className="py-12 md:py-20 px-4 md:pr-12">
              <h3 className="text-2xl font-semibold">Proudly Canadian</h3>
              <p className="mt-4 text-primary-foreground/80">
                  We are a proudly Canadian, AI-powered solution provider based in Burnaby, British Columbia. As a dedicated partner to Canadian cafes, bistros, and upscale restaurants, our goal is simple: to deliver powerful tools that work for today’s—and tomorrow’s—businesses.
              </p>
            </div>
          </div>
          <div className="h-64 md:h-full w-full relative" data-ai-hint="cafe owner">
             <Image
                src="https://firebasestorage.googleapis.com/v0/b/gilded-spoon-m4koo.firebasestorage.app/o/About%20us%2FCafe%20owner%20leleaning%20over%20her%20counter.jpg?alt=media&token=a65a27c0-21ba-45c0-8ebc-ac55523d8a88"
                alt="Cafe owner leaning over her counter"
                fill
                className="object-cover"
            />
          </div>
        </div>
      </section>

       <section>
        <div className="grid md:grid-cols-2 items-center gap-0">
          <div className="h-64 md:h-full w-full relative order-last md:order-first" data-ai-hint="mobile order">
             <Image
                src="https://firebasestorage.googleapis.com/v0/b/gilded-spoon-m4koo.firebasestorage.app/o/About%20us%2Fcustomer%20reviewing%20their%20mobile%20cafe%20order%20on%20their%20phone..jpg?alt=media&token=5bb02a55-ec32-4ece-9b85-6de9f01b794b"
                alt="Customer reviewing mobile order"
                fill
                className="object-cover"
            />
          </div>
           <div className="container mx-auto">
            <div className="py-12 md:py-20 px-4 md:pl-12 order-first md:order-last">
              <h3 className="text-2xl font-semibold">Driving Growth</h3>
              <p className="mt-4 text-muted-foreground">
                  Our platform is designed to drive customer engagement, uplift revenue, and expand brand awareness for restaurants, liquor, wine, and cannabis stores. We are committed to minimizing costs and maximizing growth for our partners.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-primary text-primary-foreground">
        <div className="grid md:grid-cols-2 items-center gap-0">
          <div className="container mx-auto">
            <div className="py-12 md:py-20 px-4 md:pr-12">
              <h3 className="text-2xl font-semibold">Constant Innovation</h3>
              <p className="mt-4 text-primary-foreground/80">
                 We will never stop innovating to enhance the Canadian hospitality experience. Our goal is to become the nation’s leader in AI-driven website and web app solutions, including e-commerce and table-side ordering. Let's work together to build a more vibrant and successful food, wine, cannabis, and liquor community.
              </p>
            </div>
          </div>
          <div className="h-64 md:h-full w-full relative" data-ai-hint="community event">
             <video
                src="https://firebasestorage.googleapis.com/v0/b/gilded-spoon-m4koo.firebasestorage.app/o/About%20us%2FCafe%20owners%20handing%20free%20coffee%20to%20guest.mp4?alt=media&token=f27a7ec2-b1ba-4f00-834d-6155d5c026d0"
                autoPlay
                loop
                muted
                playsInline
                className="object-cover w-full h-full"
            />
          </div>
        </div>
      </section>


      {/* Core Values Section */}
      <section className="bg-white dark:bg-card py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
                Our Core Values
            </h2>
            <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
                Our values guide our actions and define who we are as a company.
            </p>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
                {values.map((value) => (
                    <Card key={value.title} className="text-center border-0 shadow-lg">
                        <CardHeader>
                            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                                {value.icon}
                            </div>
                            <CardTitle className="mt-4">{value.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground">{value.description}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
      </section>

      {/* Leadership Team Section */}
      <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 text-center">
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
                  Meet the Leadership Team
              </h2>
              <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8">
                  {teamMembers.map((member) => (
                      <div key={member.name}>
                          <div className="relative h-48 w-48 mx-auto rounded-full overflow-hidden mb-4">
                             <Image 
                                src={member.image}
                                alt={member.name}
                                fill
                                className="object-cover"
                                data-ai-hint={member.hint}
                             />
                          </div>
                          <h3 className="text-lg font-semibold">{member.name}</h3>
                          <p className="text-muted-foreground">{member.role}</p>
                      </div>
                  ))}
              </div>
          </div>
      </section>

      {/* Video Holder Section */}
      <section>
        <div className="w-full h-[600px]">
          <video
            src="https://firebasestorage.googleapis.com/v0/b/gilded-spoon-m4koo.firebasestorage.app/o/About%20us%2FQirrus%20team%20members%20in%20the%20downtown%20Vancouver%20office.mp4?alt=media&token=d76ed077-cbf0-411b-8c3f-6e7a096288aa"
            autoPlay
            loop
            muted
            playsInline
            className="object-cover w-full h-full"
          />
        </div>
      </section>

      {/* Join Team CTA */}
       <section className="bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 py-20 text-center">
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
                Join Our Team
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-foreground/80">
                We're always looking for talented individuals to join our mission. Explore our open positions and find your next career opportunity.
            </p>
            <Button asChild size="lg" variant="secondary" className="mt-8">
              <Link href="#">View Careers</Link>
            </Button>
        </div>
      </section>

    </div>
  );
}
