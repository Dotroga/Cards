import styled from "styled-components";

export const WrapperApp = styled.div`
  text-align: center;
  .App-logo {
    height: 40vmin;
    pointer-events: none;
  }
  @media (prefers-reduced-motion: no-preference) {
    .App-logo {
      animation: App-logo-float infinite 3s ease-in-out;
    }
  }
  .App-header {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
  }
  @keyframes App-logo-float {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(10px);
    }
    100% {
      transform: translateY(0px);
    }
  }
`;
