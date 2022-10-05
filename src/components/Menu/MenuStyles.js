import styled from 'styled-components';

export const ContainerMenu = styled.div`
  font-size: 1.2rem;
  background: rgb(204, 70, 252);
  background: linear-gradient(
    0deg,
    rgba(204, 70, 252, 0.85) 0%,
    rgba(30, 50, 154, 0.8463760504201681) 100%
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

  .icon-close {
    color: #eee;
    position: absolute;
    top: 20px;
    right: 20px;
    font-size: 3rem;
  }

  .content-ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: center;

    li {
      margin-bottom: 30px;
    }

    a {
      text-transform: uppercase;
      text-decoration: none;
      font-weight: bold;
      color: #eee;
    }
  }
`;
