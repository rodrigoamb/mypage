import styled, { keyframes } from 'styled-components';

const iconAnimation = keyframes`
3%{
  color: #282A36;
}
50% {
      color: #121318;
      filter: none;
      scale: 0.8;
  }
`;

export const ContainerSectionTech = styled.section`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .limit-content {
    display: flex;
    justify-content: center;
    width: 70%;
    max-width: 1000px;
  }

  .grid-techs {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-items: center;
    grid-column-gap: 0px;
    grid-row-gap: 20px;
  }

  .icon {
    font-size: 9rem;
    transition: all 0.2s;
  }

  .card-tech {
    padding: 10px;
    color: #eee;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: center;
  }

  .title-tech {
    display: block;
    font-weight: bold;
    margin-top: 5px;
    margin-bottom: 10px;
  }

  @media (max-width: 710px) {
    .grid-techs {
      grid-template-columns: repeat(2, 1fr);
      grid-row-gap: 5px;
    }
  }

  @media (max-width: 440px) {
    margin-top: 5px;

    .grid-techs {
      grid-template-columns: repeat(2, 1fr);
      grid-row-gap: 5px;
    }

    .icon {
      font-size: 4.8rem;
    }
  }
`;

export const LogoTech = styled.div`
  color: ${(props) => `${props.color}`};
  filter: drop-shadow(5px 5px 2px rgb(0 0 0 / 0.7));

  animation: ${iconAnimation} 8s infinite ${(props) => `${props.delay}s`};
`;
