
'use client';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { ComparisonModal } from '@/components/comparison-modal';
import React from 'react';
import { Chatbot } from '@/components/chatbot';

export default function PagesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  return (
    <div className="flex min-h-screen flex-col">
      <ComparisonModal isOpen={isModalOpen} onOpenChange={setIsModalOpen} />
      <Header onGetStartedClick={() => setIsModalOpen(true)} />
      <main className="flex-1">{children}</main>
      <Footer />
      <Chatbot />
    </div>
  );
}
