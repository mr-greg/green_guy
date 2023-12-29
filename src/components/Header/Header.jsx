import React from "react";
import { StyledHeader } from "./StyledHeader";

const Header = () => {
  return (
    <StyledHeader>
      <p className="logo">dpr</p>
      <h1 className="song">so i danced</h1>
      <a href="#">discover</a>
    </StyledHeader>
  );
};

export default Header;
