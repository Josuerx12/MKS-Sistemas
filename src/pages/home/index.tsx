import { Helmet } from "react-helmet";
import { HomeContainer } from "./styles";
import { useQuery } from "@tanstack/react-query";
import { useFetch, Products, Product } from "../../hooks/useFetch";
import Skeleton from "../../components/skeleton";
import ProductCard from "../../components/productCard";
import Cart from "../../components/cart";
const Home = () => {
  const url =
    "https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=1&rows=10&sortBy=id&orderBy=DESC";
  const { data, isLoading, isError, error } = useQuery<Products>({
    queryKey: ["products"],
    // eslint-disable-next-line react-hooks/rules-of-hooks
    queryFn: () => useFetch(url),
  });

  return (
    <HomeContainer>
      <Helmet>
        <title>MKS - Página Inicial</title>
      </Helmet>
      {!isError ? (
        isLoading ? (
          Array.from(Array(8)).map((_, index) => <Skeleton key={index} />)
        ) : (
          data?.products?.map((product: Product) => (
            <ProductCard product={product} key={product.id} />
          ))
        )
      ) : (
        <>
          <h4>Error</h4>
          <p>Erro ao carregar os produtos tente novamente mais tarde!</p>
          <p>{error.message}</p>
        </>
      )}
      <Cart />
    </HomeContainer>
  );
};

export default Home;
