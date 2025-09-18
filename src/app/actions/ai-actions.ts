'use server';

import { generateRestaurantName } from '@/ai/flows/generate-restaurant-name';
import { generateMenuItems } from '@/ai/flows/generate-menu-items';
import { optimizeWebsiteContent } from '@/ai/flows/optimize-website-content';
import { generateImage } from '@/ai/flows/generate-image';
import { nameSchema, menuSchema, contentSchema, imageSchema } from '@/lib/schemas';

type FormState = {
  message: 'success' | 'error' | null;
  result?: string | null;
};

export async function generateNameAction(prevState: FormState, formData: FormData): Promise<FormState> {
  const validatedFields = nameSchema.safeParse({
    cuisine: formData.get('cuisine'),
    location: formData.get('location'),
    style: formData.get('style'),
  });

  if (!validatedFields.success) {
    return {
      message: 'error',
    };
  }

  try {
    const { restaurantName } = await generateRestaurantName(validatedFields.data);
    return { message: 'success', result: restaurantName };
  } catch (e) {
    console.error(e);
    return { message: 'error' };
  }
}

export async function generateMenuItemsAction(prevState: FormState, formData: FormData): Promise<FormState> {
    const validatedFields = menuSchema.safeParse({
        cuisine: formData.get('cuisine'),
        dietaryOptions: formData.get('dietaryOptions'),
        itemDescription: formData.get('itemDescription'),
    });

    if (!validatedFields.success) {
        return {
            message: 'error',
        };
    }

    try {
        const { menuItemDescription } = await generateMenuItems(validatedFields.data);
        return { message: 'success', result: menuItemDescription };
    } catch (e) {
        console.error(e);
        return { message: 'error' };
    }
}

export async function optimizeContentAction(prevState: FormState, formData: FormData): Promise<FormState> {
    const validatedFields = contentSchema.safeParse({
        content: formData.get('content'),
        restaurantType: formData.get('restaurantType'),
        brandStatement: formData.get('brandStatement'),
    });

    if (!validatedFields.success) {
        return {
            message: 'error',
        };
    }

    try {
        const { optimizedContent } = await optimizeWebsiteContent(validatedFields.data);
        return { message: 'success', result: optimizedContent };
    } catch (e) {
        console.error(e);
        return { message: 'error' };
    }
}

export async function generateImageAction(prevState: FormState, formData: FormData): Promise<FormState> {
    const validatedFields = imageSchema.safeParse({
        prompt: formData.get('prompt'),
    });

    if (!validatedFields.success) {
        return {
            message: 'error',
        };
    }

    try {
        const { imageUrl } = await generateImage(validatedFields.data);
        return { message: 'success', result: imageUrl };
    } catch (e) {
        console.error(e);
        return { message: 'error' };
    }
}
