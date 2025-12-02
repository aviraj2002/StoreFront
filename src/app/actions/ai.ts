"use server";

import { generateProductImage } from "@/ai/flows/generate-product-image";
import { generateStoreImage } from "@/ai/flows/generate-store-image";

export async function generateProductImageAction(
  productName: string,
  description: string
) {
  try {
    const result = await generateProductImage({ productName, description });
    return { success: true, imageURL: result.imageURL };
  } catch (error) {
    console.error("Error generating product image:", error);
    return { success: false, error: "Failed to generate image." };
  }
}

export async function generateStoreImageAction(
  storeName: string,
  category: string
) {
  try {
    const result = await generateStoreImage({ storeName, category });
    return { success: true, imageURL: result.imageURL };
  } catch (error) {
    console.error("Error generating store image:", error);
    return { success: false, error: "Failed to generate image." };
  }
}
