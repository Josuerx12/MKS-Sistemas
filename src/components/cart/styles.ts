import styled from "styled-components";

type props = {
  $isOpen: boolean;
};

export const CartSidebar = styled.div<props>`
  position: fixed;
  top: 0;
  right: ${(props) => (props.$isOpen ? "0" : "-800px")};
  height: 100%;
  width: 464px;
  background-color: #0f52ba;
  box-shadow: 0px 0px 8px 8px #00000021;
  transition: right 0.2s ease-in-out;
  overflow-y: auto;
  z-index: 1000;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const CartHeader = styled.header`
  padding: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 4rem;
`;

export const CartTitle = styled.h6`
  width: 180px;
  font-weight: 700;
  text-align: start;
  color: #fff;
  font-size: 27px;
  line-height: 32.91px;
`;

export const CloseButton = styled.span`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background: #000;
  font-size: 28px;
  font-weight: 400;
  line-height: 15px;
  color: #fff;
  cursor: pointer;
`;

export const CartBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  padding: 40px;

  @media (max-width: 768px) {
    padding: 0;
  }
`;
