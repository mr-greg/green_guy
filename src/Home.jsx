import React from "react";
import styled from "styled-components";
import Header from "./components/Header/Header";

const StyledHome = styled.div`
  min-width: 100vw;
  min-height: 100vh;
  /* background-color: #f0f0f0; */
`;

function Home() {
  return (
    <StyledHome>
      <Header />
    </StyledHome>
  );
}

export default Home;
