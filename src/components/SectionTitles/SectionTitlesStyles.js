import styled from 'styled-components';

export const ContainerTitles = styled.div`
  margin-top: 35px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .limit-content-title {
    text-align: center;
    padding: 0 30px;
    width: 60%;
  }

  .container-title {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: start;

    h2 {
      margin-bottom: 5px;
      font-size: 3rem;
      display: inline-block;
      margin-left: -160px;
      color: #ea356f;
    }
  }

  .detail-title {
    padding: 35px;
    display: inline-block;
    width: 180px;
    height: 60px;
    border-left: 8px solid #7f00be;
    border-bottom: 8px solid #7f00be;
    margin-bottom: 5px;
  }

  p {
    margin-top: 5px;
    font-size: 1rem;
    color: #eee;
  }
`;
