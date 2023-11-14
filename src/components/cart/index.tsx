import { CartContext } from "../../context/cartContext";
import { Product } from "../../hooks/useFetch";
import CartProductCard from "./cartProductCard";
import {
  CartBody,
  CartHeader,
  CartSidebar,
  CartTitle,
  CloseButton,
} from "./styles";

const Cart = () => {
  const { isOpennedCart, handleOpenCart, cart } = CartContext();
  return (
    <CartSidebar $isOpen={isOpennedCart}>
      <CartHeader>
        <CartTitle>Carrinho de compras</CartTitle>
        <CloseButton onClick={handleOpenCart}>X</CloseButton>
      </CartHeader>

      <CartBody>
        {cart && cart!.length <= 0 && "Nenhum item no carrinho"}
        {cart?.map((product: Product) => (
          <CartProductCard key={product.id} product={product} />
        ))}
      </CartBody>
    </CartSidebar>
  );
};

export default Cart;
