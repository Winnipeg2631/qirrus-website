import { z } from 'zod';

export const nameSchema = z.object({
  cuisine: z.string().min(3, { message: 'Cuisine is required.' }),
  location: z.string().min(2, { message: 'Location is required.' }),
  style: z.string().optional(),
});

export type NameSchema = z.infer<typeof nameSchema>;

export const menuSchema = z.object({
  itemDescription: z.string().min(3, { message: 'Item description is required.' }),
  cuisine: z.string().min(3, { message: 'Cuisine is required.' }),
  dietaryOptions: z.string().optional(),
});

export type MenuSchema = z.infer<typeof menuSchema>;

export const contentSchema = z.object({
  content: z.string().min(20, { message: 'Content must be at least 20 characters.' }),
  restaurantType: z.string().min(3, { message: 'Restaurant type is required.' }),
  brandStatement: z.string().optional(),
});

export type ContentSchema = z.infer<typeof contentSchema>;

export const imageSchema = z.object({
    prompt: z.string().min(10, { message: 'Prompt must be at least 10 characters.' }),
});

export type ImageSchema = z.infer<typeof imageSchema>;
