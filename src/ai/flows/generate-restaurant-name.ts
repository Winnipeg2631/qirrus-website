'use server';

/**
 * @fileOverview This file defines a Genkit flow for generating restaurant names based on location and cuisine.
 *
 * @exports generateRestaurantName - An async function that takes RestaurantNameInput and returns RestaurantNameOutput.
 * @exports RestaurantNameInput - The input type for the generateRestaurantName function.
 * @exports RestaurantNameOutput - The return type for the generateRestaurantName function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const RestaurantNameInputSchema = z.object({
  location: z
    .string()
    .describe('The location of the restaurant (e.g., city, neighborhood).'),
  cuisine: z.string().describe('The type of cuisine the restaurant serves.'),
  style: z.string().optional().describe('Preferred style of the restaurant name, e.g. modern, classic, quirky'),
  brandStatement: z.string().optional().describe('Brand statement that should be taken into account when generating the name'),
});
export type RestaurantNameInput = z.infer<typeof RestaurantNameInputSchema>;

const RestaurantNameOutputSchema = z.object({
  restaurantName: z.string().describe('The generated restaurant name.'),
});
export type RestaurantNameOutput = z.infer<typeof RestaurantNameOutputSchema>;

export async function generateRestaurantName(
  input: RestaurantNameInput
): Promise<RestaurantNameOutput> {
  return generateRestaurantNameFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateRestaurantNamePrompt',
  input: {schema: RestaurantNameInputSchema},
  output: {schema: RestaurantNameOutputSchema},
  prompt: `You are a creative naming consultant specializing in restaurant names.

  Generate a catchy and memorable restaurant name based on the following information:

  Location: {{{location}}}
  Cuisine: {{{cuisine}}}
  {{#if style}}Style: {{{style}}}{{/if}}
  {{#if brandStatement}}Brand statement: {{{brandStatement}}}{{/if}}

  The restaurant name should be unique, easy to pronounce, and relevant to the cuisine and location.
  The name should also be no more than 3 words long.
  Return ONLY the name of the restaurant without any additional text or explanation.`,
});

const generateRestaurantNameFlow = ai.defineFlow(
  {
    name: 'generateRestaurantNameFlow',
    inputSchema: RestaurantNameInputSchema,
    outputSchema: RestaurantNameOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
