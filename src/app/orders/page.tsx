import Image from "next/image";
import { getOrdersByUserId } from "@/lib/data";
import { Order } from "@/lib/types";
import PageHeader from "@/components/shared/page-header";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { format } from "date-fns";

const statusColors = {
  pending: "bg-yellow-500",
  confirmed: "bg-blue-500",
  shipped: "bg-purple-500",
  delivered: "bg-green-500",
};

// Mock current user ID
const MOCK_USER_ID = "user-4";

export default async function OrdersPage() {
  const orders: Order[] = await getOrdersByUserId(MOCK_USER_ID);

  return (
    <div className="container mx-auto px-4 py-8">
      <PageHeader
        title="My Orders"
        description="View your order history and track current shipments."
      />
      <div className="space-y-6">
        {orders.length > 0 ? (
          orders.map((order) => (
            <Card key={order.id}>
              <CardHeader className="flex flex-row justify-between items-start">
                <div>
                  <CardTitle className="font-headline">Order #{order.id.slice(0, 7)}</CardTitle>
                  <CardDescription>
                    Placed on {format(order.createdAt, "PPP")}
                  </CardDescription>
                </div>
                <Badge variant="default" className="capitalize">
                   <span className={`w-2 h-2 mr-2 rounded-full ${statusColors[order.status]}`}></span>
                  {order.status}
                </Badge>
              </CardHeader>
              <CardContent>
                <p className="text-sm font-medium mb-2">Store: {order.store?.storeName}</p>
                <Separator />
                <ul className="divide-y divide-border mt-4">
                  {order.items.map((item) => (
                    <li key={item.productId} className="py-2 flex justify-between items-center text-sm">
                      <span>{item.quantity} x Product ID: {item.productId.slice(0, 6)}...</span>
                      <span>${(item.price * item.quantity).toFixed(2)}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="bg-muted/50 p-4 flex justify-end">
                <div className="text-right">
                  <p className="text-sm text-muted-foreground">Total</p>
                  <p className="text-lg font-bold">${order.totalAmount.toFixed(2)}</p>
                </div>
              </CardFooter>
            </Card>
          ))
        ) : (
          <p>You haven't placed any orders yet.</p>
        )}
      </div>
    </div>
  );
}
