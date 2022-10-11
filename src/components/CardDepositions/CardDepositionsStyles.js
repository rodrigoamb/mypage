import styled from 'styled-components';

export const ContainerDepositions = styled.section`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

  .limit-cards {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    width: 80%;
    row-gap: 40px;
    column-gap: 40px;
    padding: 20px;
  }
`;
