"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LucideIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

interface DashboardNavProps {
  items: {
    href: string;
    label: string;
    icon: LucideIcon;
  }[];
}

export default function DashboardNav({ items }: DashboardNavProps) {
  const pathname = usePathname();

  return (
    <nav className="flex flex-col gap-2">
      {items.map((item) => {
        const Icon = item.icon;
        return (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              buttonVariants({ variant: "ghost" }),
              "justify-start",
              pathname === item.href ? "bg-accent text-accent-foreground" : ""
            )}
          >
            <Icon className="mr-2 h-4 w-4" />
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
