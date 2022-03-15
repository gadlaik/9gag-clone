import React from "react";

function ShortMenu() {
  function changeActive(e) {
    document
      .querySelectorAll(".short-menu li a")
      .forEach((item) => item.classList.remove("active"));

    if (e.target.nodeName === "A") e.target.classList.add("active");
  }

  return (
    // <div className="short-menu-container">
    <ul className="short-menu" onClick={changeActive}>
      <li>
        <a href="/" className="active">
          Hot
        </a>
      </li>
      <li>
        <a href="/">Trending</a>
      </li>
      <li>
        <a href="/">Fresh</a>
      </li>
      <li>
        <a href="/">Top</a>
      </li>
      <li>
        <a href="/">Anime</a>
      </li>
      <li>
        <a href="/">Games</a>
      </li>
      <li>
        <a href="/">Movies</a>
      </li>
    </ul>
    // </div>
  );
}

export default ShortMenu;
