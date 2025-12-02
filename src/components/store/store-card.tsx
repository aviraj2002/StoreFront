import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";
import type { Store } from "@/lib/types";

type StoreCardProps = {
  store: Store;
};

export default function StoreCard({ store }: StoreCardProps) {
  return (
    <Link href={`/stores/${store.id}`} className="group">
      <Card className="h-full flex flex-col transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
        <CardHeader className="p-0">
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-t-lg">
            <Image
              src={store.imageURL}
              alt={store.storeName}
              fill
              className="object-cover transition-transform group-hover:scale-105"
              data-ai-hint="store image"
            />
          </div>
        </CardHeader>
        <CardContent className="flex-grow p-4">
          <CardTitle className="font-headline text-xl mb-2 truncate">{store.storeName}</CardTitle>
          <Badge variant="secondary">{store.category}</Badge>
        </CardContent>
        <CardFooter className="p-4 pt-0 flex justify-between items-center text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 text-yellow-500 fill-yellow-400" />
            <span>{store.rating.toFixed(1)}</span>
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
}
