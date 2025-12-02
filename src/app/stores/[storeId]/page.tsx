import Image from "next/image";
import { notFound } from "next/navigation";
import { getStoreById, getProductsByStoreId } from "@/lib/data";
import { Store, Product } from "@/lib/types";
import ProductCard from "@/components/store/product-card";
import PageHeader from "@/components/shared/page-header";
import { Badge } from "@/components/ui/badge";
import { Star, Mail, MapPin } from "lucide-react";

export default async function StoreDetailPage({ params }: { params: { storeId: string } }) {
  const store: Store | undefined = await getStoreById(params.storeId);
  if (!store) {
    notFound();
  }

  const products: Product[] = await getProductsByStoreId(params.storeId);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8 mb-12">
        <div className="md:w-1/3">
          <div className="relative aspect-video w-full overflow-hidden rounded-lg shadow-lg">
            <Image
              src={store.imageURL}
              alt={store.storeName}
              fill
              className="object-cover"
              data-ai-hint="store image"
            />
          </div>
        </div>
        <div className="md:w-2/3">
          <PageHeader title={store.storeName} />
          <div className="flex flex-wrap items-center gap-4 mb-4">
            <Badge variant="secondary" className="text-sm">{store.category}</Badge>
            <div className="flex items-center gap-1 text-muted-foreground">
              <Star className="w-5 h-5 text-yellow-500 fill-yellow-400" />
              <span className="font-bold text-lg">{store.rating.toFixed(1)}</span>
            </div>
          </div>
          <div className="space-y-2 text-muted-foreground">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>{store.address}</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <a href={`mailto:${store.storeEmail}`} className="hover:text-primary transition-colors">{store.storeEmail}</a>
            </div>
          </div>
        </div>
      </div>

      <h3 className="font-headline text-2xl font-bold mb-6">Products</h3>
      {products.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12 bg-card rounded-lg">
          <p className="text-muted-foreground">This store has no products yet.</p>
        </div>
      )}
    </div>
  );
}
