import React from "react";

function ShortMenu() {
  return (
    <ul className="short-menu">
      <li>
        <a href="#" className="active">
          Hot
        </a>
      </li>
      <li>
        <a href="#">Trending</a>
      </li>
      <li>
        <a href="#">Fresh</a>
      </li>
      <li>
        <a href="#">Top</a>
      </li>
      <li>
        <a href="#">Anime</a>
      </li>
      <li>
        <a href="#">Games</a>
      </li>
      <li>
        <a href="#">Movies</a>
      </li>
    </ul>
  );
}

export default ShortMenu;