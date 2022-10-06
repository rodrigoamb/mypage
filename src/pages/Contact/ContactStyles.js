import styled from "styled-components";

export const ContainerContact = styled.main`
  width: calc(100% - 300px);
  min-height: 100vh;
  position: absolute;
  right: 0;

  @media (max-width: 1075px) {
    width: 100%;
  }

  ${({ menuIsVisible }) =>
    menuIsVisible &&
    css`
      position: fixed;
      top: 0;
      bottom: 0;
      right: 0;
      left: 0;
      overflow-y: hidden;
      overflow-x: hidden;
    `}
`;
