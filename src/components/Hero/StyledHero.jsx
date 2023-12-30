import styled, { keyframes } from "styled-components";
import { jiggle } from "../../assets/styles/animations.js";

export const StyledHero = styled.section`
  .heroContainer {
    margin: 0 auto;
    position: relative;
    /* height: 80vh; */
    .textContainer {
      position: absolute;
      left: 25%;
      top: 20%;
      h1,
      p {
        line-height: 0.9;
      }
      p {
        padding-left: 5px;
      }
      h1 {
        transition: ease-in-out 0.2s;
      }
      h1:hover {
        animation: ${jiggle} 2s ease-in-out;
        color: #05d530;
        opacity: 50%;
      }
    }
    img {
      max-width: 40%;
      margin: 3.5% 27% 0 auto;
      opacity: 80%;
    }
    iframe {
      margin: 2% auto 0;
      display: block;
      opacity: 70%;
      -webkit-box-shadow: 10px 10px 50px -20px rgba(0, 0, 0, 0.75);
      -moz-box-shadow: 10px 10px 50px -20px rgba(0, 0, 0, 0.75);
      box-shadow: 10px 10px 50px -20px rgba(0, 0, 0, 0.75);
    }
  }
`;
