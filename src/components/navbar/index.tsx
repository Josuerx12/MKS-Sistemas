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
  return (
    <NavbarWrapper>
      <LogoContainer>
        <LogoText>
          MKS<Subtitle>Sistemas</Subtitle>
        </LogoText>
      </LogoContainer>
      <CartButton>
        <CartIcon src="/cart.svg" alt="Carrinho de Compras" />
        <NumberOfItemsInCart>0</NumberOfItemsInCart>
      </CartButton>
    </NavbarWrapper>
  );
};

export default Navbar;
