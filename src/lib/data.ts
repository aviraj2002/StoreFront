import type { User, Store, Product, Order } from "./types";
import { PlaceHolderImages } from "./placeholder-images";

const findImage = (id: string) => PlaceHolderImages.find(img => img.id === id)?.imageUrl || "https://picsum.photos/seed/default/600/400";

const users: User[] = [
  { id: 'user-1', name: 'Admin User', email: 'admin@storefront.com', role: 'admin', createdAt: new Date(), updatedAt: new Date() },
  { id: 'user-2', name: 'Bookworm Owner', email: 'owner@bookworm.com', role: 'store_owner', createdAt: new Date(), updatedAt: new Date() },
  { id: 'user-3', name: 'Techie Owner', email: 'owner@techspot.com', role: 'store_owner', createdAt: new Date(), updatedAt: new Date() },
  { id: 'user-4', name: 'Alice', email: 'alice@example.com', role: 'user', createdAt: new Date(), updatedAt: new Date() },
  { id: 'user-5', name: 'Bob', email: 'bob@example.com', role: 'user', createdAt: new Date(), updatedAt: new Date() },
];

const stores: Store[] = [
  { id: 'store-1', ownerId: 'user-2', storeName: 'The Bookworm Nook', category: 'Books', rating: 4.8, address: '123 Literary Lane, Readington', storeEmail: 'contact@bookworm.com', imageURL: findImage('store-books'), createdAt: new Date(), updatedAt: new Date() },
  { id: 'store-2', ownerId: 'user-3', storeName: 'TechSpot', category: 'Electronics', rating: 4.5, address: '456 Gadget Ave, Silicon Valley', storeEmail: 'support@techspot.com', imageURL: findImage('store-electronics'), createdAt: new Date(), updatedAt: new Date() },
  { id: 'store-3', ownerId: 'user-2', storeName: 'Chic Threads', category: 'Clothing', rating: 4.7, address: '789 Fashion St, Style City', storeEmail: 'hello@chicthreads.com', imageURL: findImage('store-clothing'), createdAt: new Date(), updatedAt: new Date() },
  { id: 'store-4', ownerId: 'user-3', storeName: 'The Daily Grind', category: 'Coffee & Bakery', rating: 4.9, address: '101 Caffeine Blvd, Beantown', storeEmail: 'orders@dailygrind.com', imageURL: findImage('store-bakery'), createdAt: new Date(), updatedAt: new Date() },
];

const products: Product[] = [
  { id: 'prod-1', storeId: 'store-1', productName: 'The Midnight Library', description: 'A novel by Matt Haig.', price: 14.99, imageURL: findImage('product-book'), createdAt: new Date(), updatedAt: new Date() },
  { id: 'prod-2', storeId: 'store-1', productName: 'Dune', description: 'Classic sci-fi by Frank Herbert.', price: 12.50, imageURL: findImage('product-book'), createdAt: new Date(), updatedAt: new Date() },
  { id: 'prod-3', storeId: 'store-2', productName: 'AeroBook Pro', description: 'A powerful and lightweight laptop for professionals.', price: 1299.00, imageURL: findImage('product-laptop'), createdAt: new Date(), updatedAt: new Date() },
  { id: 'prod-4', storeId: 'store-2', productName: 'SoundWave Headphones', description: 'Noise-cancelling over-ear headphones.', price: 199.99, imageURL: findImage('product-headphones'), createdAt: new Date(), updatedAt: new Date() },
  { id: 'prod-5', storeId: 'store-2', productName: 'CaptureMax Camera', description: 'A 4K mirrorless camera for enthusiasts.', price: 899.00, imageURL: findImage('product-camera'), createdAt: new Date(), updatedAt: new Date() },
  { id: 'prod-6', storeId: 'store-3', productName: 'Classic White Tee', description: 'A 100% cotton classic white t-shirt.', price: 25.00, imageURL: findImage('product-tshirt'), createdAt: new Date(), updatedAt: new Date() },
  { id: 'prod-7', storeId: 'store-4', productName: 'Morning Brew Beans', description: 'A medium roast blend from Ethiopia.', price: 18.00, imageURL: findImage('product-coffee'), createdAt: new Date(), updatedAt: new Date() },
  { id: 'prod-8', storeId: 'store-2', productName: 'TimeKeeper Watch', description: 'Elegant and simple analog watch.', price: 250.00, imageURL: findImage('product-watch'), createdAt: new Date(), updatedAt: new Date() },
  { id: 'prod-9', storeId: 'store-4', productName: 'Flaky Butter Croissant', description: 'Freshly baked croissant.', price: 3.50, imageURL: findImage('product-croissant'), createdAt: new Date(), updatedAt: new Date() },
  { id: 'prod-10', storeId: 'store-1', productName: 'Project Hail Mary', description: 'A sci-fi novel by Andy Weir.', price: 16.99, imageURL: findImage('product-book'), createdAt: new Date(), updatedAt: new Date() },
];

const orders: Order[] = [
    { id: 'order-1', userId: 'user-4', storeId: 'store-2', items: [{ productId: 'prod-3', quantity: 1, price: 1299.00 }], totalAmount: 1299.00, status: 'delivered', createdAt: new Date('2023-10-10'), updatedAt: new Date('2023-10-15') },
    { id: 'order-2', userId: 'user-5', storeId: 'store-1', items: [{ productId: 'prod-1', quantity: 2, price: 14.99 }], totalAmount: 29.98, status: 'shipped', createdAt: new Date('2023-10-28'), updatedAt: new Date('2023-10-29') },
    { id: 'order-3', userId: 'user-4', storeId: 'store-4', items: [{ productId: 'prod-7', quantity: 1, price: 18.00 }, { productId: 'prod-9', quantity: 4, price: 3.50 }], totalAmount: 32.00, status: 'pending', createdAt: new Date('2023-11-01'), updatedAt: new Date('2023-11-01') },
];

// Simulate API calls
export const getUsers = async (): Promise<User[]> => {
  return new Promise(resolve => setTimeout(() => resolve(users), 500));
}

export const getStores = async (): Promise<Store[]> => {
  return new Promise(resolve => setTimeout(() => resolve(stores), 500));
}

export const getStoreById = async (id: string): Promise<Store | undefined> => {
  return new Promise(resolve => setTimeout(() => resolve(stores.find(s => s.id === id)), 500));
}

export const getProductsByStoreId = async (storeId: string): Promise<Product[]> => {
  return new Promise(resolve => setTimeout(() => resolve(products.filter(p => p.storeId === storeId)), 500));
}

export const getFeaturedProducts = async (): Promise<Product[]> => {
    return new Promise(resolve => setTimeout(() => resolve(products.slice(0, 4)), 500));
}

export const getProductById = async (id: string): Promise<Product | undefined> => {
    return new Promise(resolve => setTimeout(() => resolve(products.find(p => p.id === id)), 500));
}

export const getOrdersByUserId = async (userId: string): Promise<Order[]> => {
  const userOrders = orders.filter(o => o.userId === userId);
  const populatedOrders = userOrders.map(order => {
    const user = users.find(u => u.id === order.userId);
    const store = stores.find(s => s.id === order.storeId);
    return {...order, user, store };
  })
  return new Promise(resolve => setTimeout(() => resolve(populatedOrders), 500));
}

export const getOrdersByStoreId = async (storeId: string): Promise<Order[]> => {
    const storeOrders = orders.filter(o => o.storeId === storeId);
    const populatedOrders = storeOrders.map(order => {
      const user = users.find(u => u.id === order.userId);
      return {...order, user };
    })
    return new Promise(resolve => setTimeout(() => resolve(populatedOrders), 500));
}
