import styled from 'styled-components';

export const EmptySpace = styled.div`
  display: block;
  width: 100%;
  height: 120px;
`;

export const ContainerFooter = styled.footer`
  display: block;
  margin-top: 50px;
  width: 100%;
  height: 80px;
  background-color: #661377;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 0;

  span {
    color: #eee;
    text-align: center;
  }

  @media (max-width: 600px) {
    span {
      width: 80%;
    }
  }
`;
