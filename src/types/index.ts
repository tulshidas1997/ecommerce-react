export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  images: string[];
  reviews: Review[];
}

export interface Review {
  id: string;
  productId: string;
  rating: number;
  comment: string;
  user: User;
}

export interface User {
  id: string;
  username: string;
  email: string;
  password?: string; // Optional for security reasons
  orderHistory: Order[];
}

export interface Order {
  id: string;
  userId: string;
  products: Product[];
  totalAmount: number;
  orderDate: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface Cart {
  items: CartItem[];
  totalAmount: number;
}