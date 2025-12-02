"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/hooks/use-cart";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import PageHeader from "@/components/shared/page-header";
import { Trash2, ShoppingCart } from "lucide-react";

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, total } = useCart();

  return (
    <div className="container mx-auto px-4 py-8">
      <PageHeader title="Your Shopping Cart" />
      {cart.length === 0 ? (
        <div className="text-center py-20 bg-card rounded-lg shadow-sm">
          <ShoppingCart className="mx-auto h-12 w-12 text-muted-foreground" />
          <h3 className="mt-4 text-lg font-medium">Your cart is empty</h3>
          <p className="mt-1 text-sm text-muted-foreground">
            You have no items in your shopping cart.
          </p>
          <div className="mt-6">
            <Button asChild>
              <Link href="/stores">Start Shopping</Link>
            </Button>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card>
              <CardContent className="p-0">
                <ul role="list" className="divide-y divide-border">
                  {cart.map((item) => (
                    <li key={item.productId} className="flex p-6">
                      <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-border">
                        <Image
                          src={item.imageURL}
                          alt={item.productName}
                          width={96}
                          height={96}
                          className="h-full w-full object-cover object-center"
                          data-ai-hint="product image"
                        />
                      </div>

                      <div className="ml-4 flex flex-1 flex-col">
                        <div>
                          <div className="flex justify-between text-base font-medium text-foreground">
                            <h3>
                              <Link href={`/products/${item.productId}`}>{item.productName}</Link>
                            </h3>
                            <p className="ml-4">${item.price.toFixed(2)}</p>
                          </div>
                        </div>
                        <div className="flex flex-1 items-end justify-between text-sm">
                          <div className="flex items-center gap-2">
                            <label htmlFor={`quantity-${item.productId}`} className="sr-only">Quantity</label>
                            <Input
                              id={`quantity-${item.productId}`}
                              type="number"
                              min="1"
                              value={item.quantity}
                              onChange={(e) => updateQuantity(item.productId, parseInt(e.target.value, 10))}
                              className="w-20"
                            />
                          </div>
                          <div className="flex">
                            <Button
                              type="button"
                              variant="ghost"
                              size="sm"
                              onClick={() => removeFromCart(item.productId)}
                            >
                              <Trash2 className="h-4 w-4 mr-1" />
                              Remove
                            </Button>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-1">
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle>Order summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <p className="text-muted-foreground">Subtotal</p>
                  <p>${total.toFixed(2)}</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-muted-foreground">Shipping</p>
                  <p>Free</p>
                </div>
                <Separator />
                <div className="flex justify-between font-bold text-lg">
                  <p>Total</p>
                  <p>${total.toFixed(2)}</p>
                </div>
              </CardContent>
              <CardFooter>
                <Button size="lg" className="w-full">
                  Proceed to Checkout
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      )}
    </div>
  );
}
