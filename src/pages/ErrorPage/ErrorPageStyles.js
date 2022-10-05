import styled from 'styled-components';

export const ContainerErrorPage = styled.div`
  background-color: #282a36;
  position: absolute;
  right: 0;
  width: calc(100% - 300px);
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .icon {
    font-size: 4rem;
    color: #eee;
    margin-bottom: 10px;
  }

  .msg-error {
    color: #eee;
    font-size: 1.5rem;
    margin-bottom: 20px;
  }

  .btn-return-home {
    color: #ea356f;
    text-decoration: none;
    text-transform: uppercase;
    padding-bottom: 5px;
    border-bottom: 2px dotted #ea356f;
    transition: all 0.2s;

    &:hover {
      scale: 1.1;
    }
  }

  @media (max-width: 1075px) {
    width: 100%;
    margin-top: 150px;
    max-height: 300px;
    justify-content: flex-start;

    .icon,
    .msg-error,
    .btn-return-home {
      text-align: center;
      scale: 0.8;
    }
  }
`;
