import React from "react";
import "../../styles/CurrentSection.css";
import Post from "../Post/Post";

function CurrentSection() {
  return (
    <div id="current-section">
      <Post
        imgSrc={"https://img-9gag-fun.9cache.com/photo/a51QMOL_460swp.webp"}
      />
      <Post
        imgSrc={"https://img-9gag-fun.9cache.com/photo/aBndB9Z_460swp.webp"}
      />
    </div>
  );
}

export default CurrentSection;
