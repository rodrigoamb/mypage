import styled from 'styled-components';

export const ContainerHeader = styled.header`
  width: 300px;
  height: 100vh;
  background-color: #24124c;
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 20px;
  border-right: 5px solid #372a53;
  position: fixed;

  @media (max-width: 1075px) {
    display: none;
  }
`;
