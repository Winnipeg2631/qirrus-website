
"use client";

import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Autoplay from "embla-carousel-autoplay";

const partners = [
    { name: 'Global Payments', logo: 'https://firebasestorage.googleapis.com/v0/b/restaurant-central-x36yb.firebasestorage.app/o/logos%2FGlobal%20payments%20canada.svg?alt=media&token=d374f3cd-3777-40c7-a5a4-d61694f70b1d', hint: 'Global Payments logo' },
    { name: 'Moneris', logo: 'https://firebasestorage.googleapis.com/v0/b/restaurant-central-x36yb.firebasestorage.app/o/logos%2FMoneris-Logo-Navy-2025.png?alt=media&token=45326568-2fb5-4ae9-af59-0b758e9b55f8', hint: 'Moneris logo' },
    { name: 'SkipTheDishes', logo: 'https://firebasestorage.googleapis.com/v0/b/restaurant-central-x36yb.firebasestorage.app/o/logos%2FSkipTheDishes_logo.svg.png?alt=media&token=166949f6-837c-464e-be43-7829f245c619', hint: 'SkipTheDishes logo' },
    { name: 'Uber Eats', logo: 'https://firebasestorage.googleapis.com/v0/b/restaurant-central-x36yb.firebasestorage.app/o/logos%2FUber%20Eats.webp?alt=media&token=fcf1a7dd-c4c2-44d9-b649-f9b474a73e48', hint: 'uber eats logo' },
    { name: 'doordash', logo: 'https://firebasestorage.googleapis.com/v0/b/restaurant-central-x36yb.firebasestorage.app/o/logos%2Fdoordash%20logo.png?alt=media&token=f79797b1-5c77-4e7c-92a9-8ecc6673bd03', hint: 'doordash logo' },
    { name: 'OpenTable', logo: 'https://firebasestorage.googleapis.com/v0/b/restaurant-central-x36yb.firebasestorage.app/o/logos%2FOpentable%20logo%202389.png?alt=media&token=e1ddf528-630d-4fd6-ab10-da06da8235bb', hint: 'OpenTable logo' },
];

export function PartnersCarousel() {
    return (
        <section className="py-16 md:py-24">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-lg font-semibold text-muted-foreground">Our partnership helps grow your business, streamline processes and reduce cost</h2>
                <Carousel
                    plugins={[
                        Autoplay({
                            delay: 2000,
                        }),
                    ]}
                    opts={{
                        align: "start",
                        loop: true,
                    }}
                    className="w-full max-w-4xl mx-auto mt-8"
                >
                    <CarouselContent>
                        {partners.map((partner) => (
                            <CarouselItem key={partner.name} className="basis-1/3 md:basis-1/5">
                                <div className="p-4 flex justify-center items-center h-20">
                                    <Image src={partner.logo} alt={partner.name} width={150} height={50} className="object-contain h-full w-auto" data-ai-hint={partner.hint} />
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </div>
        </section>
    );
}
