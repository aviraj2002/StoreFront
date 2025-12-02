export type User = {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'store_owner' | 'user';
  createdAt: Date;
  updatedAt: Date;
};

export type Store = {
  id: string;
  ownerId: string;
  storeName: string;
  category: string;
  rating: number;
  address: string;
  storeEmail: string;
  imageURL: string;
  createdAt: Date;
  updatedAt: Date;
};

export type Product = {
  id: string;
  storeId: string;
  productName: string;
  description: string;
  price: number;
  imageURL: string;
  createdAt: Date;
  updatedAt: Date;
};

export type CartItem = {
  productId: string;
  productName: string;
  imageURL: string;
  price: number;
  quantity: number;
};

export type OrderItem = {
  productId: string;
  quantity: number;
  price: number;
};

export type Order = {
  id: string;
  userId: string;
  storeId: string;
  items: OrderItem[];
  totalAmount: number;
  status: 'pending' | 'confirmed' | 'shipped' | 'delivered';
  createdAt: Date;
  updatedAt: Date;
  user?: User;
  store?: Store;
};
