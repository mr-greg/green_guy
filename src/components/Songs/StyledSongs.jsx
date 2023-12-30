import styled from "styled-components";

export const StyledSong = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  .peanutContainer {
    text-align: center;
    position: relative;
    width: 50%;

    .textContainer {
      position: absolute;
      top: -100px; /* Adjust the top position as needed */
      left: 50%; /* Center horizontally */
      transform: translateX(-50%);
    }

    .container {
      margin: 1% auto 0;
      border: 1px dashed rgba(255, 255, 255, 0.25);
      position: relative;

      img {
        width: 80%;
        opacity: 70%;
        -webkit-transform: scaleX(-1);
        transform: scaleX(-1);
        margin-left: auto;
      }
      iframe {
        position: absolute;
        left: 50%;
        transform: translate(-50%, -50%);
        top: 50%;
        opacity: 85%;
      }
    }
  }
`;
