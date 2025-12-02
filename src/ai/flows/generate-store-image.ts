'use server';

/**
 * @fileOverview A flow to generate an image for a store using AI.
 *
 * - generateStoreImage - A function that generates an image for a store.
 * - GenerateStoreImageInput - The input type for the generateStoreImage function.
 * - GenerateStoreImageOutput - The return type for the generateStoreImage function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateStoreImageInputSchema = z.object({
  storeName: z.string().describe('The name of the store.'),
  category: z.string().describe('The category of the store.'),
});
export type GenerateStoreImageInput = z.infer<typeof GenerateStoreImageInputSchema>;

const GenerateStoreImageOutputSchema = z.object({
  imageURL: z.string().describe('The generated image URL as a data URI.'),
});
export type GenerateStoreImageOutput = z.infer<typeof GenerateStoreImageOutputSchema>;

export async function generateStoreImage(input: GenerateStoreImageInput): Promise<GenerateStoreImageOutput> {
  return generateStoreImageFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateStoreImagePrompt',
  input: {schema: GenerateStoreImageInputSchema},
  output: {schema: GenerateStoreImageOutputSchema},
  prompt: `Generate an appealing image for a store named "{{storeName}}" that belongs to the "{{category}}" category. The image should be suitable for use on a store's webpage. Focus on creating a visually engaging image that captures the essence of the store.`, 
});

const generateStoreImageFlow = ai.defineFlow(
  {
    name: 'generateStoreImageFlow',
    inputSchema: GenerateStoreImageInputSchema,
    outputSchema: GenerateStoreImageOutputSchema,
  },
  async input => {
    const { media } = await ai.generate({
      model: 'googleai/imagen-4.0-fast-generate-001',
      prompt: await prompt(input),
    });

    if (!media) {
      throw new Error('No image was generated.');
    }

    return {
      imageURL: media.url,
    };
  }
);
