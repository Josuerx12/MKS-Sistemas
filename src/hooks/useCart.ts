import { useState, useEffect } from "react";
import { Product } from "./useFetch";

export const useCart = () => {
  const [cart, setCart] = useState<Product[] | null>(null);
  const [isOpennedCart, setOpenCart] = useState(false);
  useEffect(() => {
    const cartFromLocalStorage = JSON.parse(
      localStorage.getItem("cart") || "[]"
    );

    setCart(cartFromLocalStorage);
  }, []);

  function addProductToCart(product: Product) {
    setCart((prev) => {
      if (!prev) {
        const updatedCart = [{ ...product, quantity: 1 }];
        localStorage.setItem("cart", JSON.stringify(updatedCart));
        return updatedCart;
      }

      const updatedCart = prev.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );

      if (!updatedCart.some((item) => item.id === product.id)) {
        updatedCart.push({ ...product, quantity: 1 });
      }

      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return updatedCart;
    });
  }

  function decrementProductInCart(id: number) {
    setCart((prev) => {
      if (!prev) {
        return null;
      }

      const updatedCart = prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity - 1 } : item
      );

      const filteredCart = updatedCart.filter((item) => item.quantity > 0);

      localStorage.setItem("cart", JSON.stringify(filteredCart));
      return filteredCart;
    });
  }

  function incrementProductInCart(id: number) {
    setCart((prev) => {
      if (!prev) {
        return null;
      }

      const updatedCart = prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      );

      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return updatedCart;
    });
  }

  function deleteFromCart(id: number) {
    setCart((prev) => {
      if (!prev) {
        return null;
      }

      const updatedCart = prev.filter((item) => item.id !== id);

      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return updatedCart;
    });
  }

  function removeItemToCart(id: number) {
    if (cart) {
      setCart((prev) => {
        const updatedCart = Array.isArray(prev)
          ? prev.filter((item) => item.id !== id)
          : prev;
        localStorage.setItem("cart", JSON.stringify(updatedCart));
        return updatedCart;
      });
    }
  }
  function cleanCart() {
    setCart(null);
    localStorage.removeItem("cart");
  }
  function handleOpenCart() {
    setOpenCart((prev) => !prev);
  }
  return {
    cart,
    addProductToCart,
    removeItemToCart,
    cleanCart,
    isOpennedCart,
    handleOpenCart,
    decrementProductInCart,
    incrementProductInCart,
    deleteFromCart,
  };
};
