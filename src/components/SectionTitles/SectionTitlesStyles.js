import styled from 'styled-components';

export const ContainerTitles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 30px 0;

  .limit-title {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: white;

    h2 {
      color: #ea356f;
      font-size: 2.8rem;
      padding-bottom: 10px;
      margin-bottom: 10px;
      border-bottom: 8px solid #661377;
    }

    @media (max-width: 775px) {
      width: 80%;
      text-align: center;

      h2 {
        font-size: 2.3rem;
      }
    }
  }
`;
