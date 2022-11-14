import styled from "styled-components";

const LoadingStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(255, 255, 255, 0.5);

  .loader {
    width: 48px;
    height: 24px;
    color: ${(props) => props.theme.colorPrimary};
    background: currentColor;
    border-radius: 50% 50% 0 0;
    position: relative;
    display: block;
    margin: 60px auto 0;
    box-sizing: border-box;
    animation: animloader 4s linear infinite;
  }
  .loader::after {
    content: "";
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 28px;
    height: 28px;
    border-radius: 50%;
    background: currentColor;
    top: -34px;
    box-sizing: border-box;
    animation: animloader1 4s linear infinite;
  }

  @keyframes animloader {
    0% {
      box-shadow: 0 0 0 -2px, 0 0 0 -2px, 0 0 0 -5px, 0 0 0 -5px;
    }
    20% {
      box-shadow: 40px -1px 0 -2px, 0 0 0 -2px, 40px -1px 0 -5px, 0 0 0 -5px;
    }
    40% {
      box-shadow: 40px -1px 0 -2px, -40px -1px 0 -2px, 40px -1px 0 -5px,
        -40px -1px 0 -5px;
    }
    60% {
      box-shadow: 40px -1px 0 -2px, -40px -1px 0 -2px, 23px -29px 0 -5px,
        -40px -1px 0 -5px;
    }
    80%,
    95% {
      box-shadow: 40px -1px 0 -2px, -40px -1px 0 -2px, 23px -29px 0 -5px,
        -23px -29px 0 -5px;
    }
    100% {
      box-shadow: 40px -1px 0 -2px rgba(255, 255, 255, 0),
        -40px -1px 0 -2px rgba(255, 255, 255, 0),
        23px -29px 0 -5px rgba(255, 255, 255, 0),
        -23px -29px 0 -5px rgba(255, 255, 255, 0);
    }
  }

  @keyframes animloader1 {
    0% {
      box-shadow: 0 0 0 -2px, 0 0 0 -2px, 0 0 0 -5px, 0 0 0 -5px;
    }
    20% {
      box-shadow: 40px 2px 0 -2px, 0 0 0 -2px, 40px 2px 0 -5px, 0 0 0 -5px;
    }
    40% {
      box-shadow: 40px 2px 0 -2px, -40px 2px 0 -2px, 40px 2px 0 -5px,
        -40px 2px 0 -5px;
    }
    60% {
      box-shadow: 40px 2px 0 -2px, -40px 2px 0 -2px, 23px -23px 0 -5px,
        -40px 2px 0 -5px;
    }
    80%,
    95% {
      box-shadow: 40px 2px 0 -2px, -40px 2px 0 -2px, 23px -23px 0 -5px,
        -23px -23px 0 -5px;
    }
    100% {
      box-shadow: 40px 2px 0 -2px rgba(255, 255, 255, 0),
        -40px 2px 0 -2px rgba(255, 255, 255, 0),
        23px -23px 0 -5px rgba(255, 255, 255, 0),
        -23px -23px 0 -5px rgba(255, 255, 255, 0);
    }
  }
`;

export default LoadingStyled;
