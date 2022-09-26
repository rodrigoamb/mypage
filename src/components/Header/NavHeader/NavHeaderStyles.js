import styled from 'styled-components';

export const ContainerNavBar = styled.nav`
  height: 150px;
  height: 800px;
  border: none;
  position: relative;
  bottom: -20px;
  background: linear-gradient(
    0deg,
    rgba(127, 0, 190, 1) 0%,
    rgba(0, 0, 0, 0) 100%
  );

  ul {
    list-style: none;
  }

  ul li {
    margin-bottom: 15px;
    padding-left: 60px;
    display: flex;
    flex-direction: row;
  }

  .btn-nav {
    text-transform: uppercase;
    font-weight: bold;
    display: flex;
    flex-direction: row;
    text-decoration: none;
    justify-content: start;
    color: white;
    transition: all 0.2s;
  }

  .btn-nav:hover {
    text-shadow: 0px 0px 15px rgba(204, 70, 252, 1);
    filter: drop-shadow(0px 0px 15px rgba(204, 70, 252, 1));
    color: #ea356f;
    scale: 1.05;
    cursor: pointer;
  }

  .active {
    text-shadow: 0px 0px 15px rgba(204, 70, 252, 1);
    filter: drop-shadow(0px 0px 15px rgba(204, 70, 252, 1));
    color: #00d9ff;
    scale: 1.05;
  }

  .icon-nav {
    color: #eee;
    font-size: 1.5rem;
    margin-right: 10px;
  }
`;
