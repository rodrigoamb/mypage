import styled from 'styled-components';

export const ContainerFormMsg = styled.div`
  min-height: 635px;
  margin-top: 35px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .limit-content-form {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    width: 60%;
  }

  label {
    width: 90%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 10px;
  }
  span {
    color: white;
    width: 100%;
    margin-bottom: 5px;
  }
  .input-form {
    width: 100%;
    height: 40px;
    border-radius: 50px;
    background-color: #181c36;
    border: 2px solid #8be9fd;
    padding-left: 20px;
    padding-right: 20px;
    color: white;
    letter-spacing: 1px;
  }

  .input-form:focus,
  textarea:focus {
    border: 2px solid #ea356f;
    box-shadow: 0px 0px 20px #ea356f;
  }

  .title-textarea {
    width: 100%;
    margin-bottom: 5px;
  }

  .content-textarea {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 15px;
  }

  textarea {
    resize: none;
    width: 100%;
    max-width: 874.8px;
    height: 250px;
    background-color: #181c36;
    border: 2px solid #8be9fd;
    padding: 15px;
    color: white;
    letter-spacing: 1px;
    border-radius: 20px;
    font-family: sans-serif;
  }

  .btn-submit {
    text-transform: uppercase;
    background-color: #ea356f;
    color: white;
    border: none;
    border-radius: 8px;
    padding: 10px 20px;
    transition: 0.2s;

    &:hover {
      cursor: pointer;
      background-color: #8be9fd;
      color: #181c36;
      box-shadow: 0 0 15px #ea356f;
      scale: 1.1;
    }
  }

  .btn-submit:active {
    position: relative;
    top: 1px;
  }

  .message {
    padding-top: 30px;
    font-size: 1.3rem;
    color: #ea356f;
  }

  .spinner {
    width: 40px;
    height: 40px;
    margin-top: 10px;
    border-radius: 50%;
    background: conic-gradient(#0000 10%, #00d9ff);

    animation: spinner-zp9dbg 1s infinite linear;
  }

  @keyframes spinner-zp9dbg {
    to {
      transform: rotate(1turn);
    }
  }
`;
