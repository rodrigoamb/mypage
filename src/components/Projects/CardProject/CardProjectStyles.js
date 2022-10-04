import styled from 'styled-components';

export const ContainerCardProject = styled.div`
  padding: 30px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  width: 80%;
  margin-bottom: 30px;
  color: white;
  border-bottom: 5px solid #555;

  .middle-card {
    width: 50%;
    margin-left: 50px;

    h2 {
      margin-bottom: 10px;
    }

    p {
      padding-bottom: 20px;
    }

    span {
      font-weight: bold;
    }
  }

  .image-card {
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      border: 4px solid #eee;
    }
  }

  .container-btn-card {
    padding: 10px;
    margin-top: 10px;
    a {
      color: white;
      text-decoration: none;
      border-radius: 8px;
      background-color: #ea356f;
      padding: 10px 20px;
      margin-right: 5px;
      margin-bottom: 5px;
    }
  }

  @media (max-width: 1450px) {
    flex-direction: column;
    align-items: center;

    .middle-card {
      width: 80%;
      margin: auto;
      display: flex;
      align-items: center;
      flex-direction: column;
      text-align: center;
    }
  }

  @media (max-width: 1450px) {
    .middle-card {
      h2 {
        margin-top: 15px;
      }
    }
  }

  @media (max-width: 1075px) {
    .middle-card {
      margin: auto;
    }
  }

  @media (max-width: 630px) {
    width: 95%;
    .image-card {
      background-color: yellow;

      img {
        width: 250px;
        height: 150px;
      }
    }

    .middle-card {
      margin: auto;
      width: 100%;

      h2 {
        margin-top: 15px;
      }
    }

    .container-btn-card {
      margin: auto;
      display: flex;
      flex-direction: column;

      a {
        margin-bottom: 15px;
      }
    }
  }
`;
