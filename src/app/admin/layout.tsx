import DashboardNav from "@/components/dashboard/dashboard-nav";
import { Users, Store } from "lucide-react";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const navItems = [
    {
      href: "/admin/users",
      label: "Users",
      icon: Users,
    },
    {
      href: "/admin/stores",
      label: "Stores",
      icon: Store,
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8 flex gap-8">
      <aside className="w-64">
        <h2 className="font-headline text-2xl font-bold mb-4">Admin Panel</h2>
        <DashboardNav items={navItems} />
      </aside>
      <main className="flex-1">
        {children}
      </main>
    </div>
  );
}
