import { Helmet } from "react-helmet";
import { Message, NotFoundContainer, StyledLink, Heading } from "./styles";
const ErrorPage = () => {
  return (
    <NotFoundContainer>
      <Helmet>
        <title>MKS - Pagina não encontrada</title>
      </Helmet>
      <Heading>Página não encontrada.</Heading>
      <Message>
        A página que você está procurando pode ter sido removida ou não está
        disponível.
      </Message>
      <StyledLink to="/">Ir para a página inicial</StyledLink>
    </NotFoundContainer>
  );
};

export default ErrorPage;
