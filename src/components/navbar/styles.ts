import styled from "styled-components";

type props = {
  $hasItems: boolean;
};

export const NavbarWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 80px;
  height: 101px;
  background-color: #0f52ba;
  color: #fff;

  @media (max-width: 768px) {
    padding: 0 20px;
    height: 80px;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const LogoText = styled.h1`
  font-size: 40px;
  font-weight: 600;
  margin: 0;
`;

export const Subtitle = styled.span`
  font-size: 20px;
  font-weight: 300;
  margin-left: 5px;
`;

export const CartButton = styled.button`
  display: flex;
  justify-content: start;
  padding: 0 0.925rem;
  align-items: center;
  gap: 0.525rem;
  color: #000;
  cursor: pointer;
  background: #ffff;
  border-radius: 8px;
  width: 90px;
  height: 45px;
  transition: 0.2s ease-in-out;

  &:hover {
    background: #ccc;
  }
`;

export const CartIcon = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 5px;
`;

export const NumberOfItemsInCart = styled.span<props>`
  font-size: 16px;
  font-weight: bold;
  background: ${(props) => (props.$hasItems ? "red" : "")};
  color: ${(props) => (props.$hasItems ? "#fff" : "#000")};
  width: 25px;
  height: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-radius: 50%;
`;
