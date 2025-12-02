"use client";

import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { useCart } from "@/hooks/use-cart";
import type { Product } from "@/lib/types";

type AddToCartButtonProps = {
  product: Product;
};

export default function AddToCartButton({ product }: AddToCartButtonProps) {
  const { addToCart } = useCart();
  const { toast } = useToast();

  const handleAddToCart = () => {
    addToCart({
      productId: product.id,
      productName: product.productName,
      price: product.price,
      quantity: 1,
      imageURL: product.imageURL,
    });
    toast({
      title: "Added to cart!",
      description: `${product.productName} has been added to your cart.`,
    });
  };

  return (
    <Button variant="outline" size="icon" onClick={handleAddToCart}>
      <ShoppingCart className="h-5 w-5" />
      <span className="sr-only">Add to Cart</span>
    </Button>
  );
}
