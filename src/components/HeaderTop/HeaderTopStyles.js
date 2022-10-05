import styled from 'styled-components';

export const Container = styled.div`
  display: none;

  @media (max-width: 1075px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 70px;
    background-color: #18083f;
    border-bottom: 3px solid #372a53;

    .limit-content {
      width: 85%;
      /* background-color: red; */
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
    }

    .icon-burger {
      font-size: 2.5rem;
      color: #eee;

      &:hover {
        cursor: pointer;
      }
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
  }

  @media (max-width: 640px) {
    .limit-content {
      width: 90%;
    }

    .title-name,
    .symbol-keys,
    .symbol-big-small-then {
      font-size: 1.2rem;
    }
  }
`;
