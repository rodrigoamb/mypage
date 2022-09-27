import styled from 'styled-components';

export const ContainerTopHeader = styled.div`
  .container-top-header {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 10px;
    padding-top: 30px;
  }

  .title-name {
    text-decoration: none;
    font-size: 1.4rem;
    color: white;
    margin-bottom: 20px;

    &:hover {
      scale: 1.05;
    }

    &:active {
      position: relative;
      top: 2px;
    }
  }

  .my-name {
    font-weight: 900;
  }

  .symbol-keys {
    font-size: 1.4rem;
    color: #00d9ff;
  }

  .symbol-big-small-then {
    font-size: 1.3rem;
    color: #ea356f;
    font-weight: bold;
  }

  .container-img {
    background: radial-gradient(
      circle,
      rgba(204, 70, 252, 1) 0%,
      rgba(30, 50, 154, 1) 63%
    );
    width: 200px;
    height: 200px;
    border-radius: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
    border: 2px solid #fff;
  }

  .container-img img {
    width: 200px;
    height: 200px;
    border-radius: 200px;
    border: 2px solid #fff;
  }

  .about-me {
    color: #eeeeee;
    font-size: 0.9rem;
    margin-bottom: 15px;
  }

  .container-icons {
    display: flex;
    flex-direction: row;
    margin-bottom: 15px;
  }

  .icon {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
    padding: 10px;
    color: #eee;
    border: 1px solid white;
    border-radius: 8px;
    margin-right: 15px;
    transition: all 0.5s;

    &:hover {
      color: #18073f;
      background-color: #00d9ff;
      box-shadow: 0px 0px 15px #ea356f;
    }
  }
`;
