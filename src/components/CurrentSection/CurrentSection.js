import React from "react";
import "../../styles/CurrentSection.css";
import Post from "../Post/Post";
import ShortMenu from "./ShortMenu";

function CurrentSection() {
  return (
    <div id="current-section">
      <ShortMenu />
      <div className="post">
        <Post
          imgSrc={"https://img-9gag-fun.9cache.com/photo/a51QMOL_460swp.webp"}
        />
        <Post
          imgSrc={"https://img-9gag-fun.9cache.com/photo/aBndB9Z_460swp.webp"}
        />
      </div>
    </div>
  );
}

export default CurrentSection;
