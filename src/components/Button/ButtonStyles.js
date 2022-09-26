import styled from 'styled-components';

export const ContainerButton = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 30px;

  .btn-link {
    background-color: #ea356f;
    padding: 10px 20px;
    border-radius: 8px;
    font-size: 1rem;
    text-decoration: none;
    transition: all 0.2s;

    &:hover {
      background-color: #3b00b4;
      box-shadow: 0px 0px 15px #ea356f;
      scale: 1.1;
    }
  }

  .btn-name {
    color: white;
  }
`;
