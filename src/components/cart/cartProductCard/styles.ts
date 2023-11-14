import styled from "styled-components";

export const Card = styled.div`
  position: relative;
  padding: 0 20px;
  gap: 1rem;
  width: 400px;
  height: 101px;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  background: #fff;
  align-items: center;
  box-shadow: 0 0 8px 8px #0000000d;

  @media (max-width: 768px) {
    padding: 0px;
  }
`;

export const RemoveButton = styled.div`
  position: absolute;
  top: -9px;
  right: -10px;
  width: 28px;
  font-size: 1.1rem;
  height: 28px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000;
  color: #ffff;
  transition: 0.3s ease;
  cursor: pointer;

  &:hover {
    scale: 1.05;
  }
`;

export const CardImg = styled.img`
  width: 50px;
`;

export const ProductTitle = styled.span`
  width: 150px;
  font-weight: 400;
  font-size: 16px;
  color: #2c2c2c;
`;

export const VolumeFunctions = styled.div`
  display: flex;
  justify-content: space-between;
  height: 30px;
  gap: 0.3rem;
  padding: 0 0.4rem;
  align-items: center;
  border: 1px solid #bfbfbf;
  border-radius: 8px;
`;

export const Span = styled.span`
  border-left: 1px solid #bfbfbf;
  border-right: 1px solid #bfbfbf;
  width: 20px;
`;

export const Button = styled.button`
  background: transparent;
  font-size: 24px;
  cursor: pointer;
`;

export const Price = styled.span`
  font-weight: 700;
  font-size: 20px;
`;
