import styled from "styled-components";

export const Card = styled.div`
  width: 218px;
  height: 300px;
  border-radius: 8px;
  box-shadow: 0 0 8px 0px #00000022;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const CardHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 38px;
  gap: 1rem;
  margin: auto;
`;

export const CardImg = styled.img`
  margin: auto;
  width: 138px;
  height: 138px;
`;

export const AddCartButton = styled.button`
  width: 100%;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
  gap: 1rem;
  color: #fff;
  background-color: #0f52ba;
  border-radius: 0 0 8px 8px;
  cursor: pointer;
  transition: 0.3s ease-in-out;

  &:hover {
    background: #0f12ba;
  }
`;

export const AddCartIcon = styled.img`
  width: 15px;
  height: 17.5px;
`;

export const ProductPrice = styled.button`
  width: 64px;
  height: 26px;
  text-align: center;
  color: #fff;
  background: #373737;
  font-weight: 700;
  border-radius: 5px;
`;

export const ProductName = styled.h4`
  font-size: 16px;
  width: 124px;
  color: #2c2c2c;
  font-weight: 400;
`;

export const ProductDescription = styled.p`
  font-weight: 300;
  width: 90%;
  margin: auto;

  font-size: 10px;
  text-align: start;
  line-height: 12px;
  color: #2c2c2c;
`;
