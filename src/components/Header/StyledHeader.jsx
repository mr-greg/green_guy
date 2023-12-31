import styled from "styled-components";

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
  .logo:hover {
    color: #05d530;
    opacity: 50%;
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
  a:hover {
    color: #05d530;
    opacity: 50%;
  }
`;
