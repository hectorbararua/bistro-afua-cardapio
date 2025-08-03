import  { createContext, useContext, useState, ReactNode } from "react";

interface FoodItem {
  name: string;
  img: string;
  price: number;
  quantity?: number;
}

interface CartContextType {
  cart: FoodItem[];
  addToCart: (item: FoodItem) => void;
  removeFromCart: (name: string) => void;
  increment: (name: string) => void;
  decrement: (name: string) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<FoodItem[]>([]);

  const addToCart = (item: FoodItem) => {
    setCart(prev => {
      const existing = prev.find(i => i.name === item.name);
      if (existing) {
        return prev.map(i =>
          i.name === item.name ? { ...i, quantity: (i.quantity || 1) + 1 } : i
        );
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  const removeFromCart = (name: string) => {
    setCart(prev => prev.filter(i => i.name !== name));
  };

  const increment = (name: string) => {
    setCart(prev =>
      prev.map(i =>
        i.name === name ? { ...i, quantity: (i.quantity || 1) + 1 } : i
      )
    );
  };

  const decrement = (name: string) => {
    setCart(prev =>
      prev.map(i =>
        i.name === name
          ? { ...i, quantity: Math.max((i.quantity || 1) - 1, 1) }
          : i
      )
    );
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, increment, decrement }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart deve ser usado dentro de um CartProvider");
  }
  return context;
};
