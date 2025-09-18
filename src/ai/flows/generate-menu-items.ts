'use server';

/**
 * @fileOverview Menu item description generator.
 *
 * - generateMenuItems - A function that generates menu item descriptions based on cuisine and dietary options.
 * - GenerateMenuItemsInput - The input type for the generateMenuItems function.
 * - GenerateMenuItemsOutput - The return type for the generateMenuItems function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateMenuItemsInputSchema = z.object({
  cuisine: z.string().describe('The type of cuisine (e.g., Italian, Mexican, Vegan).'),
  dietaryOptions: z.string().describe('Dietary options (e.g., Gluten-Free, Vegetarian, Halal).'),
  itemDescription: z.string().describe('Short description of the menu item.'),
});

export type GenerateMenuItemsInput = z.infer<typeof GenerateMenuItemsInputSchema>;

const GenerateMenuItemsOutputSchema = z.object({
  menuItemDescription: z.string().describe('A compelling description of the menu item.'),
});

export type GenerateMenuItemsOutput = z.infer<typeof GenerateMenuItemsOutputSchema>;

export async function generateMenuItems(input: GenerateMenuItemsInput): Promise<GenerateMenuItemsOutput> {
  return generateMenuItemsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateMenuItemsPrompt',
  input: {schema: GenerateMenuItemsInputSchema},
  output: {schema: GenerateMenuItemsOutputSchema},
  prompt: `You are a marketing expert specializing in restaurant menu descriptions.

  Based on the cuisine, dietary options, and basic item description provided, create an appealing and enticing menu item description.

  Cuisine: {{{cuisine}}}
  Dietary Options: {{{dietaryOptions}}}
  Item Description: {{{itemDescription}}}

  Menu Item Description:`,
});

const generateMenuItemsFlow = ai.defineFlow(
  {
    name: 'generateMenuItemsFlow',
    inputSchema: GenerateMenuItemsInputSchema,
    outputSchema: GenerateMenuItemsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
