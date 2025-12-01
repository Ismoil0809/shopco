import {
  createContext,
  useContext,
  useState,
  useEffect,
  type ReactNode,
} from "react";
import { type Product } from "../data/type";

type CartItem = Product & {
  qty: number;
  selectedColor: string;
  selectedSize: string;
  key: string; // stable composite key id-color-size
};

type CartContextType = {
  cart: CartItem[];
  addToCart: (
    product: Product,
    selectedColor: string,
    selectedSize: string
  ) => void;
  removeFromCart: (key: string) => void;
  updateQty: (key: string, amount: number) => void;
  totalItems: number;
  subtotal: number;
  discount: number;
  deliveryFee: number;
  total: number;
  applyPromoCode: (code: string) => void;
  promoCode: string;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within a CartProvider");
  return context;
};

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const raw = localStorage.getItem("cart");
      return raw ? (JSON.parse(raw) as CartItem[]) : [];
    } catch {
      return [];
    }
  });
  const [promoCode, setPromoCode] = useState<string>(() => {
    try {
      return localStorage.getItem("promoCode") || "";
    } catch {
      return "";
    }
  });

  const deliveryFee = cart.length ? 10 : 0;

  function addToCart(product: Product, selectedColor: string, selectedSize: string) {
    const key = `${product.id}-${selectedColor}-${selectedSize}`;
    setCart((prev) => {
      const exist = prev.find((item) => item.key === key);
      if (exist) {
        return prev.map((item) => (item.key === key ? { ...item, qty: item.qty + 1 } : item));
      }
      return [
        ...prev,
        { ...product, qty: 1, selectedColor, selectedSize, key },
      ];
    });
  }

  function removeFromCart(key: string) {
    setCart((prev) => prev.filter((item) => item.key !== key));
  }

  function updateQty(key: string, amount: number) {
    setCart((prev) =>
      prev.map((item) =>
        item.key === key ? { ...item, qty: Math.max(1, item.qty + amount) } : item
      )
    );
  }

  function applyPromoCode(code: string) {
    setPromoCode(code.toUpperCase());
  }

  useEffect(() => {
    try {
      localStorage.setItem("cart", JSON.stringify(cart));
    } catch {}
  }, [cart]);

  useEffect(() => {
    try {
      localStorage.setItem("promoCode", promoCode);
    } catch {}
  }, [promoCode]);

  const subtotal = cart.reduce((sum, item) => sum + item.price.new * item.qty, 0);

  const discount =
    promoCode === "DISCOUNT10" ? subtotal * 0.1 : 0;

  const total = subtotal - discount + deliveryFee;

  const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQty,
        totalItems,
        subtotal,
        discount,
        deliveryFee,
        total,
        applyPromoCode,
        promoCode,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
