import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, ShoppingCart } from "lucide-react";
import { getFeaturedProducts } from "@/lib/data";
import { Product } from "@/lib/types";
import PageHeader from "@/components/shared/page-header";

export default async function Home() {
  const featuredProducts: Product[] = await getFeaturedProducts();

  return (
    <div className="container mx-auto px-4 py-8">
      <section className="text-center py-20 px-6 rounded-xl bg-card shadow-lg">
        <h1 className="font-headline text-5xl md:text-7xl font-bold tracking-tight mb-4 text-primary">
          Welcome to StoreFront
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
          Discover unique products from independent stores around the world. Your next favorite item is just a click away.
        </p>
        <Button asChild size="lg" className="group">
          <Link href="/stores">
            Browse Stores
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </Button>
      </section>

      <section className="py-16">
        <PageHeader title="Featured Products" />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <Card key={product.id} className="overflow-hidden group transition-all hover:shadow-xl hover:-translate-y-1">
              <CardContent className="p-0">
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <Image
                    src={product.imageURL}
                    alt={product.productName}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                    data-ai-hint="product image"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-headline text-lg font-semibold truncate">{product.productName}</h3>
                  <p className="text-muted-foreground text-sm line-clamp-2">{product.description}</p>
                  <div className="flex items-center justify-between mt-4">
                    <p className="font-bold text-primary text-lg">${product.price.toFixed(2)}</p>
                    <Button variant="ghost" size="icon">
                      <ShoppingCart className="h-5 w-5" />
                      <span className="sr-only">Add to Cart</span>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
