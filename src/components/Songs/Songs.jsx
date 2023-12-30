import React from "react";
import { StyledSong } from "./StyledSongs";
import { motion } from "framer-motion";

const Songs = ({ heading, paragraph, spotifySrc, imgSrc }) => {
  return (
    <StyledSong>
      <div className="peanutContainer">
        <div className="textContainer">
          <h3 className="song">{heading}</h3>
          <p className="description">{paragraph}</p>
        </div>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              ease: "linear",
              duration: 1,
            }}
          >
            <img src={imgSrc} alt="peanut butter and tears green guy image" />
          </motion.div>
          <iframe
            style={{ borderRadius: 12 }}
            src={spotifySrc}
            width="80%"
            height="152"
            frameBorder="0"
            allowFullScreen=""
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </StyledSong>
  );
};

export default Songs;
