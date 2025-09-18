'use server';

/**
 * @fileOverview An AI agent that optimizes website content for restaurants.
 *
 * - optimizeWebsiteContent - A function that optimizes the website content.
 * - OptimizeWebsiteContentInput - The input type for the optimizeWebsiteContent function.
 * - OptimizeWebsiteContentOutput - The return type for the optimizeWebsiteContent function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const OptimizeWebsiteContentInputSchema = z.object({
  content: z
    .string()
    .describe('The website content to optimize, including text and other media.'),
  restaurantType: z
    .string()
    .describe('The type of restaurant (e.g., Italian, Mexican, Cannabis Dispensary, Liquor Store).'),
  brandStatement: z
    .string()
    .optional()
    .describe('Optional brand statement for the restaurant.'),
});
export type OptimizeWebsiteContentInput = z.infer<typeof OptimizeWebsiteContentInputSchema>;

const OptimizeWebsiteContentOutputSchema = z.object({
  optimizedContent: z
    .string()
    .describe('The optimized website content, shortened and focused for better engagement.'),
});
export type OptimizeWebsiteContentOutput = z.infer<typeof OptimizeWebsiteContentOutputSchema>;

export async function optimizeWebsiteContent(input: OptimizeWebsiteContentInput): Promise<OptimizeWebsiteContentOutput> {
  return optimizeWebsiteContentFlow(input);
}

const prompt = ai.definePrompt({
  name: 'optimizeWebsiteContentPrompt',
  input: {schema: OptimizeWebsiteContentInputSchema},
  output: {schema: OptimizeWebsiteContentOutputSchema},
  prompt: `You are an expert website content optimizer for restaurants, cannabis dispensaries, and liquor stores. Your goal is to make website content shorter, more engaging, and focused to improve engagement and load performance.

  You should re-write the provided content to be shorter while highlighing key information that restaurant customers would be interested in, such as menu, location, hours of operations, special offers.

  Restaurant Type: {{{restaurantType}}}
  Brand Statement: {{{brandStatement}}}
  Original Content: {{{content}}}

  Optimized Content:`,
});

const optimizeWebsiteContentFlow = ai.defineFlow(
  {
    name: 'optimizeWebsiteContentFlow',
    inputSchema: OptimizeWebsiteContentInputSchema,
    outputSchema: OptimizeWebsiteContentOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
