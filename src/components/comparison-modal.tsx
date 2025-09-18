
'use client';

import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { MoveRight } from 'lucide-react';
import Link from 'next/link';

interface ComparisonModalProps {
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
}

export function ComparisonModal({ isOpen, onOpenChange }: ComparisonModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="bg-[#0f292e] border-none text-white max-w-xl p-0">
        <div className="relative flex flex-col md:flex-row">
            <div className="md:w-1/2 p-8 flex flex-col justify-center">
                 <div className="relative h-48 mb-4">
                    <div className="absolute top-0 left-0 w-3/4 h-3/4">
                         <Image
                            src="https://placehold.co/400x300.png"
                            alt="Woman at a cafe counter"
                            width={400}
                            height={300}
                            className="rounded-lg object-cover shadow-lg"
                            data-ai-hint="woman cafe"
                        />
                    </div>
                    <div className="absolute bottom-0 right-0 w-1/2 h-1/2">
                        <Image
                            src="https://placehold.co/200x200.png"
                            alt="POS system being used for payment"
                            width={200}
                            height={200}
                            className="rounded-full object-cover shadow-2xl border-4 border-[#0f292e]"
                            data-ai-hint="pos payment"
                        />
                    </div>
                </div>

                <h2 className="text-2xl font-bold tracking-tight">Kick-start your online ordering and rewards program with Qirrus - get 45 days on us!</h2>
                <p className="mt-2 text-gray-300 text-sm">
                    Browse our full range of comparison materials that can help you find the right POS solution for your restaurant.
                </p>
                <Button asChild className="mt-6 bg-[#007d8a] hover:bg-[#006b77] w-full md:w-auto text-xs">
                    <Link href="/contact-sales" onClick={() => onOpenChange(false)}>
                        Contact sales <MoveRight className="ml-2 h-4 w-4" />
                    </Link>
                </Button>
            </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
