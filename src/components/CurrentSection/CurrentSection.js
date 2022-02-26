import React from "react";
import "../../styles/CurrentSection.css";
import ShortMenu from "./ShortMenu";

function CurrentSection() {
  return (
    <div id="current-section">
      <ShortMenu />
      <div className="post">
        <img
          src="https://img-9gag-fun.9cache.com/photo/aYrV2Aw_460swp.webp"
          alt="meme"
        />
      </div>
    </div>
  );
}

export default CurrentSection;
