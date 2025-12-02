import PageHeader from "@/components/shared/page-header";
import { DataTable } from "@/components/shared/data-table";
import { storeColumns } from "@/components/admin/store-columns";
import { getStores } from "@/lib/data";
import { Store } from "@/lib/types";

export default async function AdminStoresPage() {
  const stores: Store[] = await getStores();

  return (
    <div>
      <PageHeader
        title="Store Management"
        description="View, edit, and manage all stores on the platform."
      />
      <DataTable columns={storeColumns} data={stores} filterColumn="storeName" />
    </div>
  );
}
