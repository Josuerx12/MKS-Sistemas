import { CartContext } from "../../context/cartContext";
import { Product } from "../../hooks/useFetch";
import {
  AddCartButton,
  AddCartIcon,
  Card,
  CardHeader,
  CardImg,
  ProductDescription,
  ProductName,
  ProductPrice,
} from "./styles";

const ProductCard = ({ product }: { product: Product }) => {
  const { addProductToCart } = CartContext();
  return (
    <Card>
      <CardImg src={product.photo} alt={product.name} />
      <CardHeader>
        <ProductName>{product.name}</ProductName>
        <ProductPrice>{product.price}</ProductPrice>
      </CardHeader>
      <ProductDescription>{product.description}</ProductDescription>
      <AddCartButton onClick={() => addProductToCart(product)}>
        <AddCartIcon src="/bag.svg" /> Comprar
      </AddCartButton>
    </Card>
  );
};

export default ProductCard;
