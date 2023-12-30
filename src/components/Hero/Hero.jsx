import React from "react";
import { StyledHero } from "./StyledHero";
import arghh from "../../assets/img/arghh.png";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <StyledHero>
      <div className="heroContainer">
        <div className="textContainer">
          <h1>Hello</h1>
          <p>meet dpr's green guy</p>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            ease: "linear",
            duration: 1,
          }}
        >
          <img src={arghh} alt="green guy shocked" />
        </motion.div>
        <iframe
          style={{ borderRadius: 12 }}
          src="https://open.spotify.com/embed/track/0Ov2HJSYNS4UTITRO3RQSd?utm_source=generator&theme=0"
          width="50%"
          height="152"
          frameBorder="0"
          allowFullScreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>

        {/* <Spotify
          wide
          theme="black"
          link="https://open.spotify.com/track/0Ov2HJSYNS4UTITRO3RQSd?si=9150744019eb43a7&theme=black"
        /> */}
      </div>
    </StyledHero>
  );
};

export default Hero;
