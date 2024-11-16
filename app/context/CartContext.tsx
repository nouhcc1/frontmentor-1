"use client";
import React, { createContext, useState, useContext } from 'react';

type Product = {
  name: string;
  count: number;
  price: number;
};

type CartContextType = {
  cartItems: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (name: string) => void;
  getProductCount: (name: string) => number; 
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cartItems, setCartItems] = useState<Product[]>([]);

  const addToCart = (product: Product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.name === product.name);
      if (existingItem) {
        return prevItems.map((item) =>
          item.name === product.name ? { ...item, count: item.count + 1 } : item
        );
      } else {
        return [...prevItems, { ...product, count: 1 }];
      }
    });
  };
  const removeFromCart = (name: string) => {
    setCartItems((prevItems) => {
      return prevItems.filter((item) =>
        item.name != name);
    });
  };
  const getProductCount = (name: string) => {
      const existingItem = cartItems.find((item) => item.name === name);
      if (existingItem) {
        return existingItem.count;
      } else {
        return 0;
      }
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart , removeFromCart,getProductCount}}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
