import DashboardNav from "@/components/dashboard/dashboard-nav";
import { LayoutDashboard, Package, ShoppingBag, Settings } from "lucide-react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const navItems = [
    {
      href: "/dashboard",
      label: "Overview",
      icon: LayoutDashboard,
    },
    {
      href: "/dashboard/products",
      label: "Products",
      icon: Package,
    },
    {
      href: "/dashboard/orders",
      label: "Orders",
      icon: ShoppingBag,
    },
    {
      href: "/dashboard/store",
      label: "Store Settings",
      icon: Settings,
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8 flex gap-8">
      <aside className="w-64 hidden md:block">
        <h2 className="font-headline text-2xl font-bold mb-4">Dashboard</h2>
        <DashboardNav items={navItems} />
      </aside>
      <main className="flex-1">
        {children}
      </main>
    </div>
  );
}
