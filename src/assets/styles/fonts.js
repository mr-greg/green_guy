import { createGlobalStyle } from "styled-components";
import Bhavuka from "../fonts/Bhavuka.ttf";
import ArtsAndCrafts from "../fonts/Arts_And_Crafts.ttf";
import Play from "../fonts/Play-Regular.ttf";
import AvenirNextBold from "../fonts/AvenirNext-Bold.otf";
import AvenirNextLight from "../fonts/AvenirNext-Light.otf";
import AvenirNextRegular from "../fonts/AvenirNext-Regular.otf";

export const GlobalFonts = createGlobalStyle`
@font-face {
  font-family: "Bhavuka";
  src: url(${Bhavuka}) format("truetype");
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}
@font-face {
  font-family: "ArtsAndCrafts";
  src: url(${ArtsAndCrafts}) format("truetype");
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}
@font-face {
  font-family: "Play";
  src: url(${Play}) format("truetype");
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}
@font-face {
    font-family: "AvenirNext";
    src: url(${AvenirNextBold}) format("opentype");
    font-weight: 700;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: "AvenirNext";
    src: url(${AvenirNextLight}) format("opentype");
    font-weight: 300;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: "AvenirNext";
    src: url(${AvenirNextRegular}) format("opentype");
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }
`;
