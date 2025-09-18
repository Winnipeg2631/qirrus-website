import Link from 'next/link';
import { Twitter, Facebook, Instagram } from 'lucide-react';
import Image from 'next/image';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from './ui/button';

export function Footer() {
  return (
    <footer className="border-t" style={{ backgroundColor: '#DDCBA4' }}>
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="flex flex-col space-y-4">
            <Link href="/" className="flex items-center gap-2">
               <Image src="https://firebasestorage.googleapis.com/v0/b/restaurant-central-x36yb.firebasestorage.app/o/Company%20logo%2FqirrusNew_Nov%202023-11.png?alt=media&token=45dbe27d-c236-43c2-907e-11a6d1e87060" alt="Qirrus Logo" width={100} height={32} />
            </Link>
            <p className="text-muted-foreground">
              Your all-in-one platform for restaurant success.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <Instagram className="h-5 w-5" />
              </Link>
            </div>
          </div>
          <div>
            <h3 className="font-semibold">Products</h3>
            <ul className="mt-4 space-y-2">
              <li><Link href="/upscale-dining" className="text-muted-foreground hover:text-foreground">Business type</Link></li>
              <li><Link href="/website-builder" className="text-muted-foreground hover:text-foreground">Website Builder</Link></li>
              <li><Link href="/reservations" className="text-muted-foreground hover:text-foreground">Reservations</Link></li>
              <li><Link href="/cafe-and-bistro" className="text-muted-foreground hover:text-foreground">Cafe & Bistro</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold">Resources</h3>
            <ul className="mt-4 space-y-2">
              <li><Link href="/chatagent" className="text-muted-foreground hover:text-foreground">Chatagent</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-foreground">Blog</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-foreground">Support</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold">Company</h3>
            <ul className="mt-4 space-y-2">
              <li><Link href="/about" className="text-muted-foreground hover:text-foreground">About Us</Link></li>
              <li><Link href="/contact" className="text-muted-foreground hover:text-foreground">Contact</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-foreground">Careers</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Qirrus. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
