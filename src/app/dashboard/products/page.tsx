import PageHeader from "@/components/shared/page-header";
import { DataTable } from "@/components/shared/data-table";
import { productColumns } from "@/components/dashboard/product-columns";
import { getProductsByStoreId } from "@/lib/data";
import { Product } from "@/lib/types";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { PlusCircle } from "lucide-react";

// Mock current store ID
const MOCK_STORE_ID = "store-2";

export default async function DashboardProductsPage() {
  const products: Product[] = await getProductsByStoreId(MOCK_STORE_ID);

  return (
    <div>
      <div className="flex justify-between items-center">
        <PageHeader
          title="Your Products"
          description="Manage your product catalog."
        />
        <Button asChild>
            <Link href="/dashboard/products/new">
                <PlusCircle className="mr-2 h-4 w-4" />
                Add Product
            </Link>
        </Button>
      </div>
      <DataTable columns={productColumns} data={products} filterColumn="productName" />
    </div>
  );
}
