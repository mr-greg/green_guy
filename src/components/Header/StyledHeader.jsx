import styled, { keyframes } from "styled-components";

export const StyledHeader = styled.header`
  padding-top: 15px;
  display: flex;
  justify-content: space-around;
  align-items: center;

  .logo {
    font-family: "ArtsAndCrafts";
    color: rgba(255, 255, 255, 0.7);
    font-size: 32px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    transition: ease-in-out 0.2s;
    cursor: pointer;
  }
  :hover {
    color: white;
  }
  .song {
    color: #fff;
    font-family: "ArtsAndCrafts";
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-decoration: none;
    position: relative;
  }
  .song::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    border-radius: 4px;
    background-color: #ffffff;
    bottom: 0;
    left: 0;
    transform-origin: right;
    transform: scaleX(0);
    transition: transform 0.3s ease-in-out;
  }
  .song:hover::before {
    transform-origin: left;
    transform: scaleX(1);
  }
  a {
    color: rgba(255, 255, 255, 0.7);
    font-family: "Play";
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-decoration: none;
    text-transform: uppercase;
    transition: ease-in-out 0.2s;
  }
  :hover {
    color: white;
  }
`;
