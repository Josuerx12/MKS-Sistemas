import { createContext, useContext } from "react";
import { useCart } from "../hooks/useCart";
import { Product } from "../hooks/useFetch";

type context = {
  cart: Product[] | null;
  addProductToCart: (product: Product) => void;
  removeItemToCart: (id: number) => void;
  isOpennedCart: boolean;
  handleOpenCart: () => void;
  decrementProductInCart: (id: number) => void;
  incrementProductInCart: (id: number) => void;
  deleteFromCart: (id: number) => void;
};

const Context = createContext<context | null>(null);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const {
    cart,
    addProductToCart,
    removeItemToCart,
    isOpennedCart,
    handleOpenCart,
    decrementProductInCart,
    incrementProductInCart,
    deleteFromCart,
  } = useCart();
  return (
    <Context.Provider
      value={{
        cart,
        addProductToCart,
        removeItemToCart,
        isOpennedCart,
        handleOpenCart,
        decrementProductInCart,
        incrementProductInCart,
        deleteFromCart,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const CartContext = () => {
  const context = useContext(Context);
  if (!context) {
    throw new Error(
      "Contexto deve ser inicializado antes para um bom funcionamento."
    );
  }
  return context;
};
