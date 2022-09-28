import styled from 'styled-components';

export const ContainerCardProject = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
  padding: 30px;
  border-bottom: 3px solid #eee;

  .middle-card {
    width: 49%;
    height: 250px;
    display: flex;
    align-items: flex-start;
    justify-content: space-around;
    flex-direction: column;
    padding: 10px;

    h2 {
      color: #eee;
      font-size: 1.6rem;
    }

    p {
      color: #eee;

      span {
        font-weight: bold;
      }
    }
  }

  .image-card {
    justify-content: center;
    align-items: center;

    img {
      border: 3px solid #eee;
    }
  }

  .container-btn-card {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;

    a {
      text-decoration: none;
      color: #eee;
      background-color: #ea356f;
      padding: 10px 20px;
      margin-right: 10px;
      margin-bottom: 5px;
      border-radius: 8px;
      transition: 0.2s;

      &:hover {
        background-color: #00d9ff;
        color: #18073f;
        scale: 1.05;
        box-shadow: 0px 0px 15px #ea356f;
      }
    }
  }
`;
