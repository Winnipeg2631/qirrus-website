import { ChatagentClient } from '@/components/chatagent-client';
import { Metadata } from 'next';
import { Sparkles } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Chatagent | Qirrus',
  description: 'Generate restaurant names, menu items, and optimize website content with AI.',
};

export default function ChatagentPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8 flex flex-col items-center text-center">
        <div className="flex items-center gap-3">
          <Sparkles className="h-8 w-8 text-accent" />
          <h1 className="text-3xl font-bold md:text-4xl">Chatagent</h1>
        </div>
        <p className="mt-2 max-w-2xl text-muted-foreground">
          Let our generative AI help you with creative tasks. Generate names, craft menu descriptions, and optimize your content in seconds.
        </p>
      </div>
      <ChatagentClient />
    </div>
  );
}
