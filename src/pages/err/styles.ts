import { Link } from "react-router-dom";
import styled from "styled-components";

export const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: calc(100dvh - 101px - 34px);
  text-align: center;
`;

export const Heading = styled.h2`
  font-size: 2rem;
  margin-bottom: 10px;
`;

export const Message = styled.p`
  font-size: 1rem;
  margin-bottom: 20px;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: #007bff;
  font-weight: bold;
`;
