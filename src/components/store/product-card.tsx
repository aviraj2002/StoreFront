import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import type { Product } from "@/lib/types";
import AddToCartButton from "./add-to-cart-button";

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Card className="overflow-hidden group transition-all duration-300 hover:shadow-xl hover:-translate-y-1 h-full flex flex-col">
      <CardContent className="p-0 flex flex-col flex-grow">
        <div className="relative aspect-[4/3] w-full overflow-hidden">
          <Image
            src={product.imageURL}
            alt={product.productName}
            fill
            className="object-cover transition-transform group-hover:scale-105"
            data-ai-hint="product image"
          />
        </div>
        <div className="p-4 flex flex-col flex-grow">
          <h3 className="font-headline text-lg font-semibold truncate flex-grow">{product.productName}</h3>
          <p className="text-muted-foreground text-sm line-clamp-2 my-2">{product.description}</p>
          <div className="flex items-center justify-between mt-auto pt-2">
            <p className="font-bold text-primary text-lg">${product.price.toFixed(2)}</p>
            <AddToCartButton product={product} />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
