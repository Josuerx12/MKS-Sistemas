import { CartContext } from "../../context/cartContext";
import {
  CartButton,
  CartIcon,
  LogoContainer,
  LogoText,
  NavbarWrapper,
  NumberOfItemsInCart,
  Subtitle,
} from "./styles";

const Navbar = () => {
  const { cart } = CartContext();
  const { isOpennedCart, handleOpenCart } = CartContext();
  return (
    <NavbarWrapper>
      <LogoContainer>
        <LogoText>
          MKS<Subtitle>Sistemas</Subtitle>
        </LogoText>
      </LogoContainer>
      {isOpennedCart ? (
        false
      ) : (
        <CartButton onClick={handleOpenCart}>
          <CartIcon src="/cart.svg" alt="Carrinho de Compras" />
          <NumberOfItemsInCart
            $hasItems={Array.isArray(cart) && cart.length > 0 ? true : false}
          >
            {cart ? cart.length : 0}
          </NumberOfItemsInCart>
        </CartButton>
      )}
    </NavbarWrapper>
  );
};

export default Navbar;
