import { Product } from "../../hooks/useFetch";
import {
  AddCartButton,
  AddCartIcon,
  Card,
  CartHeader,
  CartImg,
  ProductDescription,
  ProductName,
  ProductPrice,
} from "./styles";

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <Card>
      <CartImg src={product.photo} alt={product.name} />
      <CartHeader>
        <ProductName>{product.name}</ProductName>
        <ProductPrice>{product.price}</ProductPrice>
      </CartHeader>
      <ProductDescription>{product.description}</ProductDescription>
      <AddCartButton>
        <AddCartIcon src="/bag.svg" /> Comprar
      </AddCartButton>
    </Card>
  );
};

export default ProductCard;
