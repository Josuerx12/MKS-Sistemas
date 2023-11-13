import styled, { keyframes } from "styled-components";

const shimmer = keyframes`
  to {
    background-position: 100% 0;
  }
`;

export const SkeletonWrapper = styled.div`
  display: inline-block;
`;

export const SkeletonElement = styled.div`
  width: 218px;
  height: 285px;
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  border-radius: 10px;
  animation: ${shimmer} 1.5s infinite linear;
`;
