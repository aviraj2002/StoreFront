import PageHeader from "@/components/shared/page-header";
import StoreCard from "@/components/store/store-card";
import { getStores } from "@/lib/data";
import { Store } from "@/lib/types";

export default async function StoresPage() {
  const stores: Store[] = await getStores();

  return (
    <div className="container mx-auto px-4 py-8">
      <PageHeader
        title="Explore Our Stores"
        description="Find unique products from our curated collection of independent stores."
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {stores.map((store) => (
          <StoreCard key={store.id} store={store} />
        ))}
      </div>
    </div>
  );
}
