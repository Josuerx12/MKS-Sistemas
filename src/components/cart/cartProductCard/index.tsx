import { CartContext } from "../../../context/cartContext";
import { Product } from "../../../hooks/useFetch";
import {
  Button,
  Card,
  CardImg,
  Price,
  ProductTitle,
  RemoveButton,
  Span,
  VolumeFunctions,
} from "./styles";

const CartProductCard = ({ product }: { product: Product }) => {
  const { incrementProductInCart, decrementProductInCart, deleteFromCart } =
    CartContext();
  return (
    <Card>
      <CardImg src={product.photo} />
      <ProductTitle>{product.name}</ProductTitle>
      <VolumeFunctions>
        <Button onClick={() => decrementProductInCart(product.id)}>-</Button>
        <Span>{product.quantity}</Span>
        <Button onClick={() => incrementProductInCart(product.id)}>+</Button>
      </VolumeFunctions>
      <Price>{product.price}</Price>
      <RemoveButton onClick={() => deleteFromCart(product.id)}>X</RemoveButton>
    </Card>
  );
};

export default CartProductCard;
