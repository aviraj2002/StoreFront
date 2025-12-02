'use server';

/**
 * @fileOverview A flow to generate a product image using AI.
 *
 * - generateProductImage - A function that generates an image for a product.
 * - GenerateProductImageInput - The input type for the generateProductImage function.
 * - GenerateProductImageOutput - The return type for the generateProductImage function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateProductImageInputSchema = z.object({
  productName: z.string().describe('The name of the product.'),
  description: z.string().describe('The description of the product.'),
});
export type GenerateProductImageInput = z.infer<typeof GenerateProductImageInputSchema>;

const GenerateProductImageOutputSchema = z.object({
  imageURL: z.string().describe('The generated image URL as a data URI.'),
});
export type GenerateProductImageOutput = z.infer<typeof GenerateProductImageOutputSchema>;

export async function generateProductImage(input: GenerateProductImageInput): Promise<GenerateProductImageOutput> {
  return generateProductImageFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateProductImagePrompt',
  input: {schema: GenerateProductImageInputSchema},
  output: {schema: GenerateProductImageOutputSchema},
  prompt: `Generate an image for the following product:

Product Name: {{{productName}}}
Description: {{{description}}}

Create an image that is visually appealing and relevant to the product. Return the image as a data URI.
`,
});

const generateProductImageFlow = ai.defineFlow(
  {
    name: 'generateProductImageFlow',
    inputSchema: GenerateProductImageInputSchema,
    outputSchema: GenerateProductImageOutputSchema,
  },
  async input => {
    const {media} = await ai.generate({
      prompt: `Generate an image for the following product:

Product Name: ${input.productName}
Description: ${input.description}

Create an image that is visually appealing and relevant to the product.`, 
      model: 'googleai/imagen-4.0-fast-generate-001',
    });

    if (!media || !media.url) {
      throw new Error('Failed to generate image.');
    }

    return {imageURL: media.url};
  }
);
