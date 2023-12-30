import React, { useState } from "react";
import styled from "styled-components";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Songs from "./components/Songs/Songs";
import peanut from "./assets/img/peanut-butter_tears.png";
import insane from "./assets/img/dont-go-insane.png";
import dance from "./assets/img/welp.png";
import Footer from "./components/Footer/Footer";
import {
  FullpageContainer,
  FullpageSection,
} from "@shinyongjun/react-fullpage";
import "./assets/styles/vendor/fullpage-css.css";

const StyledHome = styled.div``;

function Home() {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <StyledHome>
      <FullpageContainer
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
      >
        <FullpageSection>
          <div className="headerHeroWrapper">
            <Header />
            <Hero />
          </div>
        </FullpageSection>

        <FullpageSection>
          <Songs
            heading="Peanut Butter & Tears"
            paragraph={`"is this guy just in my head ?"`}
            imgSrc={peanut}
            spotifySrc="https://open.spotify.com/embed/track/05QrjMU5kHV7dpyNmSxqdv?utm_source=generator&theme=0"
          />
        </FullpageSection>
        <FullpageSection>
          <Songs
            heading="Don't Go Insane"
            paragraph={`"maybe drunk, but still saving the day"`}
            imgSrc={insane}
            spotifySrc="https://open.spotify.com/embed/track/5izX3yhDZHqQFi8p2m6RHi?utm_source=generator&theme=0"
          />
        </FullpageSection>
        <FullpageSection>
          <Songs
            heading="So I Danced"
            paragraph={`"my gun wasn't working..."`}
            imgSrc={dance}
            spotifySrc="https://open.spotify.com/embed/track/0Ov2HJSYNS4UTITRO3RQSd?utm_source=generator&theme=0"
          />
          <Footer />
        </FullpageSection>
      </FullpageContainer>
    </StyledHome>
  );
}

export default Home;
