
"use client";

import Link from 'next/link';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Utensils, Coffee, Zap, Leaf, Wine } from 'lucide-react';
import Image from 'next/image';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from '@/lib/utils';
import React from 'react';

const navLinks = [
  { href: '/website-builder', label: 'Websites' },
  { href: '/reservations', label: 'Reservation' },
  { href: '/digital-marketing', label: 'Marketing' },
  { href: '/chatagent', label: 'Chatagent' },
];

const businessTypes: { title: string; href: string; description: string, icon: React.ReactNode }[] = [
    {
        title: "Upscale Dining",
        href: "/upscale-dining",
        description: "Elevate your service with a POS designed for upscale dining.",
        icon: <Utensils className="h-5 w-5" />
    },
     {
        title: "Cafe & Bistro",
        href: "/cafe-and-bistro",
        description: "The flexible POS system for coffee shops and bistros.",
        icon: <Coffee className="h-5 w-5" />
    },
    {
        title: "Cannabis Dispensary",
        href: "/cannabis",
        description: "A compliant and powerful POS for cannabis retail.",
        icon: <Leaf className="h-5 w-5" />
    },
    {
        title: "Liquor store",
        href: "/website-builder",
        description: "Sell your selection of wine, beer, and spirits online.",
        icon: <Wine className="h-5 w-5" />
    },
];


export function Header({ onGetStartedClick }: { onGetStartedClick?: () => void }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleGetStartedClick = () => {
    if (onGetStartedClick) {
      onGetStartedClick();
    }
    setIsOpen(false);
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="bg-[#4a4de6] text-white py-2 text-center text-sm">
        <p className="px-4">
          Grow your business with our all-in-one platform for Canadian restaurants, cafés, bistros, and cannabis brands. With unified e-commerce and marketing, we do it all!{' '}
          <Link href="/contact-sales" className="underline font-semibold hover:text-white/80">
            Get started with a 2-month free trial.
          </Link>
        </p>
      </div>
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          <Image src="https://firebasestorage.googleapis.com/v0/b/restaurant-central-x36yb.firebasestorage.app/o/Company%20logo%2FqirrusNew_Nov%202023-11.png?alt=media&token=45dbe27d-c236-43c2-907e-11a6d1e87060" alt="Qirrus Logo" width={100} height={32} />
        </Link>
        <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
                <NavigationMenuItem>
                    <NavigationMenuTrigger>Business type</NavigationMenuTrigger>
                    <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                        {businessTypes.map((component) => (
                        <ListItem
                            key={component.title}
                            title={component.title}
                            href={component.href}
                            icon={component.icon}
                        >
                            {component.description}
                        </ListItem>
                        ))}
                    </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                {navLinks.map((link) => (
                    <NavigationMenuItem key={link.href}>
                        <Link href={link.href} legacyBehavior passHref>
                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                {link.label}
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                ))}
            </NavigationMenuList>
        </NavigationMenu>
        <div className="hidden items-center gap-4 md:flex">
          {onGetStartedClick ? (
            <Button onClick={handleGetStartedClick}>Get Started</Button>
          ) : (
            <Button asChild>
                <Link href="/website-builder#pricing">Get Started</Link>
            </Button>
          )}
           <Button variant="ghost" asChild>
            <Link href="#">Merchant login</Link>
          </Button>
        </div>
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="outline" size="icon">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Open menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <nav className="flex h-full flex-col p-6">
              <Link
                href="/"
                className="mb-8 flex items-center gap-2"
                onClick={() => setIsOpen(false)}
              >
                <Image src="https://firebasestorage.googleapis.com/v0/b/restaurant-central-x36yb.firebasestorage.app/o/Company%20logo%2FqirrusNew_Nov%202023-11.png?alt=media&token=45dbe27d-c236-43c2-907e-11a6d1e87060" alt="Qirrus Logo" width={100} height={32} />
              </Link>
              <div className="flex flex-col gap-4">
                 <p className="text-lg font-medium text-muted-foreground">Business type</p>
                 {businessTypes.map((link) => (
                  <Link
                    key={link.title}
                    href={link.href}
                    className="text-lg font-medium pl-4"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.title}
                  </Link>
                ))}
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-lg font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
              <div className="flex flex-col gap-4 mt-auto">
                 <Button variant="ghost" asChild>
                  <Link href="#">Merchant login</Link>
                </Button>
                {onGetStartedClick ? (
                    <Button onClick={handleGetStartedClick}>Get Started</Button>
                ) : (
                    <Button asChild>
                        <Link href="/website-builder#pricing" onClick={() => setIsOpen(false)}>Get Started</Link>
                    </Button>
                )}
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & { icon: React.ReactNode }
>(({ className, title, children, icon, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="flex items-center gap-2">
            {icon}
            <div className="text-sm font-medium leading-none">{title}</div>
          </div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
