"use client";

import { useFormState, useFormStatus } from 'react-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  generateNameAction,
  generateMenuItemsAction,
  optimizeContentAction,
  generateImageAction,
} from '@/app/actions/ai-actions';
import { nameSchema, menuSchema, contentSchema, imageSchema } from '@/lib/schemas';
import type { NameSchema, MenuSchema, ContentSchema, ImageSchema } from '@/lib/schemas';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Loader2, Sparkles, Image as ImageIcon } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from './ui/alert';
import Image from 'next/image';

function SubmitButton({ children }: { children: React.ReactNode }) {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending}>
      {pending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Sparkles className="mr-2 h-4 w-4" />}
      {children}
    </Button>
  );
}

function NameGenerator() {
  const [state, formAction] = useFormState(generateNameAction, { message: null, result: null });
  const { register, formState: { errors } } = useForm<NameSchema>({
    resolver: zodResolver(nameSchema),
  });

  return (
    <Card>
      <form action={formAction}>
        <CardHeader>
          <CardTitle>Restaurant Name Generator</CardTitle>
          <CardDescription>Get unique name ideas for your business.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="cuisine">Cuisine</Label>
            <Input id="cuisine" placeholder="e.g., Italian, Mexican, Fusion" {...register('cuisine')} />
            {errors.cuisine && <p className="text-sm text-destructive">{errors.cuisine.message}</p>}
          </div>
          <div className="space-y-2">
            <Label htmlFor="location">Location</Label>
            <Input id="location" placeholder="e.g., San Francisco, SoHo" {...register('location')} />
            {errors.location && <p className="text-sm text-destructive">{errors.location.message}</p>}
          </div>
          <div className="space-y-2">
            <Label htmlFor="style">Style (Optional)</Label>
            <Input id="style" placeholder="e.g., Modern, Classic, Quirky" {...register('style')} />
          </div>
        </CardContent>
        <CardFooter className="flex-col items-start gap-4">
          <SubmitButton>Generate Name</SubmitButton>
          {state.message === 'error' && <p className="text-sm text-destructive">Could not generate a name. Please try again.</p>}
          {state.result && (
            <Alert>
              <Sparkles className="h-4 w-4" />
              <AlertTitle>Generated Name</AlertTitle>
              <AlertDescription className="text-lg font-semibold text-foreground">
                {state.result}
              </AlertDescription>
            </Alert>
          )}
        </CardFooter>
      </form>
    </Card>
  );
}

function MenuGenerator() {
  const [state, formAction] = useFormState(generateMenuItemsAction, { message: null, result: null });
  const { register, formState: { errors } } = useForm<MenuSchema>({
    resolver: zodResolver(menuSchema),
  });
  return (
    <Card>
      <form action={formAction}>
        <CardHeader>
          <CardTitle>Menu Item Generator</CardTitle>
          <CardDescription>Create compelling descriptions for your menu items.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="itemDescription">Item Name/Description</Label>
            <Input id="itemDescription" placeholder="e.g., Classic beef burger with cheddar" {...register('itemDescription')} />
             {errors.itemDescription && <p className="text-sm text-destructive">{errors.itemDescription.message}</p>}
          </div>
          <div className="space-y-2">
            <Label htmlFor="menuCuisine">Cuisine</Label>
            <Input id="menuCuisine" placeholder="e.g., American, Italian" {...register('cuisine')} />
            {errors.cuisine && <p className="text-sm text-destructive">{errors.cuisine.message}</p>}
          </div>
          <div className="space-y-2">
            <Label htmlFor="dietaryOptions">Dietary Options (Optional)</Label>
            <Input id="dietaryOptions" placeholder="e.g., Gluten-Free, Vegan" {...register('dietaryOptions')} />
          </div>
        </CardContent>
        <CardFooter className="flex-col items-start gap-4">
          <SubmitButton>Generate Description</SubmitButton>
          {state.message === 'error' && <p className="text-sm text-destructive">Could not generate a description. Please try again.</p>}
          {state.result && (
            <Alert>
              <Sparkles className="h-4 w-4" />
              <AlertTitle>Generated Description</AlertTitle>
              <AlertDescription className="text-base text-foreground">
                {state.result}
              </AlertDescription>
            </Alert>
          )}
        </CardFooter>
      </form>
    </Card>
  );
}

function ContentOptimizer() {
    const [state, formAction] = useFormState(optimizeContentAction, { message: null, result: null });
    const { register, formState: { errors } } = useForm<ContentSchema>({
        resolver: zodResolver(contentSchema),
    });

  return (
    <Card>
      <form action={formAction}>
        <CardHeader>
          <CardTitle>Website Content Optimizer</CardTitle>
          <CardDescription>Make your website content shorter, more engaging, and focused.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="content">Original Content</Label>
            <Textarea id="content" placeholder="Paste your website text here..." rows={8} {...register('content')} />
            {errors.content && <p className="text-sm text-destructive">{errors.content.message}</p>}
          </div>
          <div className="space-y-2">
            <Label htmlFor="restaurantType">Restaurant Type</Label>
            <Input id="restaurantType" placeholder="e.g., Italian, Cannabis Dispensary" {...register('restaurantType')} />
            {errors.restaurantType && <p className="text-sm text-destructive">{errors.restaurantType.message}</p>}
          </div>
           <div className="space-y-2">
            <Label htmlFor="brandStatement">Brand Statement (Optional)</Label>
            <Input id="brandStatement" placeholder="e.g., Family-owned, locally sourced ingredients" {...register('brandStatement')} />
          </div>
        </CardContent>
        <CardFooter className="flex-col items-start gap-4">
          <SubmitButton>Optimize Content</SubmitButton>
          {state.message === 'error' && <p className="text-sm text-destructive">Could not optimize content. Please try again.</p>}
          {state.result && (
            <Alert>
              <Sparkles className="h-4 w-4" />
              <AlertTitle>Optimized Content</AlertTitle>
              <AlertDescription className="text-base text-foreground whitespace-pre-wrap">
                {state.result}
              </AlertDescription>
            </Alert>
          )}
        </CardFooter>
      </form>
    </Card>
  );
}

function ImageStudio() {
    const [state, formAction] = useFormState(generateImageAction, { message: null, result: null });
    const { register, formState: { errors } } = useForm<ImageSchema>({
        resolver: zodResolver(imageSchema),
    });

  return (
    <Card>
      <form action={formAction}>
        <CardHeader>
          <CardTitle>Image Studio</CardTitle>
          <CardDescription>Generate unique images for your website, menus, and marketing.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="prompt">Image Prompt</Label>
            <Textarea id="prompt" placeholder="e.g., A delicious-looking pizza with pepperoni and mushrooms on a rustic wooden table." rows={4} {...register('prompt')} />
            {errors.prompt && <p className="text-sm text-destructive">{errors.prompt.message}</p>}
          </div>
        </CardContent>
        <CardFooter className="flex-col items-start gap-4">
          <SubmitButton>Generate Image</SubmitButton>
          {state.message === 'error' && <p className="text-sm text-destructive">Could not generate an image. Please try again.</p>}
          {state.result && (
            <Alert>
                <ImageIcon className="h-4 w-4" />
                <AlertTitle>Generated Image</AlertTitle>
                <AlertDescription>
                    <div className="relative mt-2 h-64 w-full">
                        <Image src={state.result} alt="Generated image" layout="fill" objectFit="contain" />
                    </div>
                </AlertDescription>
            </Alert>
          )}
        </CardFooter>
      </form>
    </Card>
  );
}

export function AiAssistantClient() {
  return (
    <Tabs defaultValue="name-generator" className="w-full max-w-3xl mx-auto">
      <TabsList className="grid w-full grid-cols-4">
        <TabsTrigger value="name-generator">Name Generator</TabsTrigger>
        <TabsTrigger value="menu-generator">Menu Generator</TabsTrigger>
        <TabsTrigger value="content-optimizer">Content Optimizer</TabsTrigger>
        <TabsTrigger value="image-studio">Image Studio</TabsTrigger>
      </TabsList>
      <TabsContent value="name-generator">
        <NameGenerator />
      </TabsContent>
      <TabsContent value="menu-generator">
        <MenuGenerator />
      </TabsContent>
      <TabsContent value="content-optimizer">
        <ContentOptimizer />
      </TabsContent>
       <TabsContent value="image-studio">
        <ImageStudio />
      </TabsContent>
    </Tabs>
  );
}
