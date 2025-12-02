"use client";

import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal, ArrowUpDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import type { Store } from "@/lib/types";

export const storeColumns: ColumnDef<Store>[] = [
  {
    accessorKey: "storeName",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Store Name
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "category",
    header: "Category",
  },
  {
    accessorKey: "rating",
    header: "Rating",
  },
  {
    accessorKey: "ownerId",
    header: "Owner ID",
    cell: ({ row }) => {
        const ownerId = row.getValue("ownerId") as string;
        return <div className="font-mono text-xs">{ownerId}</div>
    }
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const store = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(store.id)}
            >
              Copy store ID
            </DropdownMenuItem>
            <DropdownMenuItem>Edit store</DropdownMenuItem>
            <DropdownMenuItem className="text-destructive">Delete store</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
