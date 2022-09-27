import styled from 'styled-components';

export const ContainerButton = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 30px;

  .btn-link {
    text-decoration: none;

    &:hover {
      box-shadow: 0px 0px 15px #ea356f;
      scale: 1.1;
    }
  }

  .btn-name {
    color: white;
    background-color: #ea356f;
    border-radius: 8px;
    font-size: 1rem;
    transition: all 0.2s;
    padding: 10px 20px;
    text-decoration: none;

    &:hover {
      color: #18073f;
      background-color: #00d9ff;
      box-shadow: 0px 0px 15px #ea356f;
      scale: 1.1;
    }
  }
`;
