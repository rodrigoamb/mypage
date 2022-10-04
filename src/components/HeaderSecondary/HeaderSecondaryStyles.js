import styled from 'styled-components';
import { keyframes } from 'styled-components';

const movimenta1 = keyframes`
0%{ clip-path: ellipse(135% 100% at -1.85% 0%);}
50%{
  clip-path: ellipse(78% 100% at 22% 0%);
  height: 200px
}
100%{ clip-path: ellipse(135% 100% at -1.85% 0%);}
`;

const movimenta2 = keyframes`
0%{ clip-path: ellipse(135% 100% at -1.85% 0%); }
50%{clip-path: ellipse(168% 100% at -57.38% 0%); }
100%{ clip-path: ellipse(135% 100% at -1.85% 0%);}
`;

const movimenta3 = keyframes`
0%{ clip-path: ellipse(135% 100% at -1.85% 0%); }
50%{
  clip-path: ellipse(105% 100% at 17% 0%);
  height: 440px 
}
100%{ clip-path: ellipse(135% 100% at -1.85% 0%);}
`;

export const ContainerHeaderSecondary = styled.div`
  .card {
    position: relative;
    z-index: 4;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
    padding-top: 70px;
  }

  .container-curved {
    position: relative;
    display: block;
    width: 100%;
    margin-bottom: 70px;
  }

  .curved1 {
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    height: 230px;
    background-color: #18053f;
    z-index: 2;
    clip-path: ellipse(135% 100% at -1.85% 0%);
    animation: ${movimenta1} 20s infinite;
  }
  .curved2 {
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    height: 430px;
    background-color: #310666;
    z-index: 1;
    clip-path: ellipse(135% 100% at -1.85% 0%);
    animation: ${movimenta2} 20s infinite;
  }
  .curved3 {
    width: 100%;
    position: absolute;
    top: 0px;
    left: 0;
    display: block;
    height: 520px;
    background-color: #661377;
    clip-path: ellipse(246% 100% at -67.6% 0%);
    animation: ${movimenta3} 20s infinite;
    z-index: 0;
  }

  /* styles card */

  .info-card {
    width: 40%;
    margin-right: 35px;
    color: #eee;
  }

  .info-card h1 {
    font-size: 2.8rem;
  }

  .info-card h2 {
    margin-bottom: 15px;
  }

  .info-card p {
    margin-bottom: 35px;
  }

  .info-card p span {
    display: block;
    margin-top: 3px;
  }

  .img-card {
    width: 250;
    height: 250px;
    border: 3px solid #eee;
  }

  .container-btn {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }

  .btn-card {
    padding: 8px 20px;
    margin-right: 15px;
    margin-bottom: 15px;
    text-decoration: none;
    color: #eee;
    border-radius: 8px;
    background-color: #ea356f;
    transition: all 0.2s;

    &:hover {
      color: #18073f;
      background-color: #00d9ff;
      box-shadow: 0px 0px 15px #ea356f;
      scale: 1.05;
    }
  }

  @media (max-width: 1350px) {
    .info-card {
      width: 50%;
    }
  }

  @media (max-width: 820px) {
    .card {
      width: 90%;
      margin: auto;
      text-align: center;
      flex-direction: column-reverse;
      justify-content: center;
    }

    .container-img {
      width: 100%;

      img {
        width: 185px;
        height: 200px;
      }
    }

    .info-card {
      margin: auto;
      width: 80%;
    }

    .container-btn {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }

    .container-curved {
      margin-bottom: 10px;
    }

    .curved1,
    .curved2,
    .curved3 {
      display: none;
    }
  }
`;
