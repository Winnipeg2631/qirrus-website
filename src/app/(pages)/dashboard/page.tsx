import { DashboardClient } from '@/components/dashboard-client';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Analytics Dashboard | Qirrus',
  description: 'View website traffic, sales data, and customer behavior.',
};

export default function DashboardPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="text-muted-foreground">Welcome back! Here's your restaurant's performance at a glance.</p>
      </div>
      <DashboardClient />
    </div>
  );
}
