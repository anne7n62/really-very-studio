import styled from "styled-components";

export const BG = styled.section`
  background-image: url("/bg.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;

  height: 100vh;
  width: 100vw;

  /* &&:after {
    animation: grain 12s steps(10) infinite;
    background-image: url("grain.jpeg");
    content: "";
    height: 300%;
    left: -50%;
    opacity: 0.13;
    mix-blend-mode: overlay;
    position: fixed;
    top: -100%;
    width: 300%;
  }

  @keyframes grain {
    0%,
    100% {
      transform: translate(0, 0);
    }
    10% {
      transform: translate(-5%, -10%);
    }
    20% {
      transform: translate(-15%, 5%);
    }
    30% {
      transform: translate(7%, -25%);
    }
    40% {
      transform: translate(-5%, 25%);
    }
    50% {
      transform: translate(-15%, 10%);
    }
    60% {
      transform: translate(15%, 0%);
    }
    70% {
      transform: translate(0%, 15%);
    }
    80% {
      transform: translate(3%, 30%);
    }
    90% {
      transform: translate(-10%, 10%);
    }
  } */
`;
