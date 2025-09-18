
"use client";

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import { Gauge, LayoutTemplate, ShoppingBag, TrendingUp, MoveRight } from 'lucide-react';
import React, { useState, useEffect } from 'react';

const products = [
  {
    name: 'OG Kush',
    price: '45.00',
    category: 'Flower',
    image: 'https://placehold.co/400x400.png',
    hint: 'cannabis flower',
  },
  {
    name: 'CBD Gummies',
    price: '25.00',
    category: 'Edibles',
    image: 'https://placehold.co/400x400.png',
    hint: 'cbd gummies',
  },
  {
    name: 'Vape Cartridge',
    price: '35.00',
    category: 'Vapes',
    image: 'https://placehold.co/400x400.png',
    hint: 'vape cartridge',
  },
];

const templates = [
    { src: 'https://placehold.co/400x500.png', alt: 'Website template 1', hint: 'website design' },
    { src: 'https://placehold.co/400x500.png', alt: 'Website template 2', hint: 'website design' },
    { src: 'https://placehold.co/400x500.png', alt: 'Website template 3', hint: 'website design' },
    { src: 'https://placehold.co/400x500.png', alt: 'Website template 4', hint: 'website design' },
    { src: 'https://placehold.co/400x500.png', alt: 'Website template 5', hint: 'website design' },
]

const growthSteps = [
    {
        icon: <Gauge className="h-10 w-10 text-primary" />,
        title: 'Get Going',
        description: 'Get step-by-step guidance on how to build and launch a website with expert starter guides and planning tools.',
        linkText: 'Get Started',
        href: '#'
    },
    {
        icon: <LayoutTemplate className="h-10 w-10 text-primary" />,
        title: 'Get Online',
        description: 'Get discovered with a professional website. Easily customize with our free website builder.',
        linkText: 'Learn More',
        href: '#'
    },
    {
        icon: <ShoppingBag className="h-10 w-10 text-primary" />,
        title: 'Get Selling',
        description: 'All-in-one powerful eCommerce tools to simplify order management, shipping, and payments.',
        linkText: 'Learn More',
        href: '#'
    },
    {
        icon: <TrendingUp className="h-10 w-10 text-primary" />,
        title: 'Get Growing',
        description: 'Find new customers with integrated marketing tools, from Facebook ads to automated email campaigns.',
        linkText: 'Learn More',
        href: '#'
    }
];

const FadingImage = ({ images, interval = 3000 }: { images: string[], interval?: number }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);
    return () => clearInterval(timer);
  }, [images.length, interval]);

  return (
    <div className="relative w-full h-full">
      {images.map((src, index) => (
        <Image
          key={src}
          src={src}
          alt="Fading image"
          fill
          className={`object-contain transition-opacity duration-1000 ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
          data-ai-hint="person smiling"
        />
      ))}
    </div>
  );
};


export default function CannabisPage() {
  return (
    <div className="bg-background text-foreground">
      <section className="py-20 md:py-28 bg-gray-50 dark:bg-gray-900 overflow-hidden">
        <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Build a professional website that grows with your business.
            </h1>
            <div className="mt-8 mb-12">
              <Button size="lg" asChild>
                <Link href="/website-builder#pricing">Create Your Website</Link>
              </Button>
            </div>
        </div>
        <div className="relative h-[400px] flex justify-center items-end -mx-32">
            {/* Image 1 & 2 Fading */}
            <div className="relative w-[300px] h-[380px] z-10">
                 <FadingImage images={['https://firebasestorage.googleapis.com/v0/b/restaurant-central-x36yb.firebasestorage.app/o/cannabis%20page%2Fwomen%20cannabis%20store%20owner.png?alt=media&token=f9aa2173-8137-42ea-967d-d4d366168a89', 'https://firebasestorage.googleapis.com/v0/b/restaurant-central-x36yb.firebasestorage.app/o/cannabis%20page%2FMale%20Cannabis%20store%20owner.png?alt=media&token=7efc5309-3df4-4356-93eb-95af875e5d08']} />
            </div>

            {/* Image 3 Center */}
            <div className="relative w-[500px] h-full z-20 -mx-12">
                <Image
                    src="https://firebasestorage.googleapis.com/v0/b/restaurant-central-x36yb.firebasestorage.app/o/cannabis%20page%2Fgreen%20market%20cannabis%20store.jpg?alt=media&token=324865db-3544-4a11-9b95-73fe25946ddf"
                    width={600}
                    height={450}
                    alt="Cannabis Website Builder"
                    className="rounded-lg shadow-xl object-contain w-full h-full"
                    data-ai-hint="cannabis website"
                />
            </div>
            
            {/* Image 4 Right */}
            <div className="relative w-[300px] h-[350px] z-0">
                 <Image
                    src="https://placehold.co/300x350.png"
                    width={300}
                    height={350}
                    alt="Cannabis products"
                    className="object-contain"
                    data-ai-hint="cannabis products"
                />
            </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Build a free website that grows with your business.
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Get access to customizable webpage designs and useful tools to build your website and grow your ideal business. Easily build a free website to help you get discovered and grow your customer base in style. Start today with our powerful free website builder.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Button asChild size="lg">
              <Link href="/website-builder#pricing">Get Started</Link>
            </Button>
            <Button asChild variant="link" size="lg">
              <Link href="/website-builder#templates">More Designs</Link>
            </Button>
          </div>
        </div>
        <div className="mt-16 overflow-x-hidden">
            <div className="flex gap-4 animate-infinite-scroll">
                {templates.concat(templates).map((template, index) => (
                    <div key={index} className="w-[300px] md:w-[400px] flex-shrink-0">
                         <Image
                            src={template.src}
                            alt={template.alt}
                            width={400}
                            height={500}
                            className="rounded-lg shadow-lg"
                            data-ai-hint={template.hint}
                        />
                    </div>
                ))}
            </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Succeed with the right website builder, from start to growth.
            </h2>
          </div>
          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-12 text-center">
            {growthSteps.map((step) => (
                <div key={step.title}>
                    <div className="flex justify-center mb-4">
                        {step.icon}
                    </div>
                    <h3 className="text-xl font-semibold">{step.title}</h3>
                    <p className="mt-2 text-muted-foreground">{step.description}</p>
                    <Button asChild variant="link" className="mt-4 text-primary">
                        <Link href={step.href}>{step.linkText} <MoveRight className="w-4 h-4 ml-2" /></Link>
                    </Button>
                </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white dark:bg-card">
        <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                    Freedom to sell anytime, anywhere with Qirrus.
                </h2>
                <p className="mt-4 text-muted-foreground">
                    This means never missing a sale and letting your customers pay how they want to. Whether it's at a pop-up shop or your own online store, Qirrus takes care of your payments for you, so you can focus on your business.
                </p>
                <div className="mt-8 flex justify-center gap-4">
                    <Button asChild size="lg">
                        <Link href="#">Sign Up</Link>
                    </Button>
                    <Button asChild variant="link" size="lg">
                        <Link href="#">Learn More <MoveRight className="w-4 h-4 ml-2" /></Link>
                    </Button>
                </div>
            </div>
            <div className="mt-12" data-ai-hint="boutique store interior">
                <video
                    src="https://firebasestorage.googleapis.com/v0/b/restaurant-central-x36yb.firebasestorage.app/o/cannabis%20page%2Fshopping%20for%20cannabis.mp4?alt=media&token=70fdde32-1b88-4bff-8c07-ed6127295793"
                    width={1200}
                    height={600}
                    className="rounded-lg shadow-xl"
                    playsInline
                    autoPlay
                    muted
                    loop
                />
            </div>
        </div>
      </section>
    </div>
  );
}
