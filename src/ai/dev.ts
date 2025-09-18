'use server';
import { config } from 'dotenv';
config();

import '@/ai/flows/optimize-website-content.ts';
import '@/ai/flows/generate-menu-items.ts';
import '@/ai/flows/generate-restaurant-name.ts';
import '@/ai/flows/generate-image.ts';
import '@/ai/flows/chatbot-flow.ts';
