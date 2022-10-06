import styled from 'styled-components';
import { css } from 'styled-components';

export const ContainerMenu = styled.nav`
  font-size: 1.2rem;
  background: rgb(204, 70, 252);
  background: linear-gradient(
    0deg,
    rgba(204, 70, 252, 0.85) 0%,
    rgba(30, 50, 154, 0.8995973389355743) 37%
  );
  backdrop-filter: blur(8px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 10;
  position: absolute;
  opacity: 0;
  pointer-events: none;
  transition: 0.5s;
  transform: translateY(-50px);

  .icon-close {
    cursor: pointer;
    color: #eee;
    position: absolute;
    top: 1.5rem;
    right: 1.5rem;
    font-size: 3rem;
    transform: rotate(45deg);
    transition: 0.7s;
  }

  .content-ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    row-gap: 60px;
    scale: 0.7;
    transition: 0.8s;

    a {
      text-transform: uppercase;
      text-decoration: none;
      font-weight: bold;
      color: #eee;
      transition: 0.3s;
      padding: 10px 20px;
      border-radius: 10px;
      background-color: #ea356f;

      &:hover {
        background-color: #00d9ff;
        color: #18053f;
        box-shadow: 0px 0px 15px #ea356f;
      }
    }
  }

  .container-icons {
    margin-top: 3rem;
    scale: 0.3;
    transform: rotate(45deg);
    transition: all 1s;

    .icon {
      color: #eee;
      font-size: 2.3rem;
      padding: 20px;

      &:hover {
        color: #ea356f;
      }
    }
  }

  ${({ menuIsVisible }) =>
    menuIsVisible &&
    css`
      opacity: 1;
      pointer-events: auto;
      transform: translateY(0px);

      .icon-close {
        transform: rotate(0deg);
      }

      .content-ul {
        scale: 1;
      }

      .container-icons {
        scale: 1;
        transform: rotate(0deg);
      }
    `};
`;
