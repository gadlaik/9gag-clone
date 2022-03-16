import React from "react";
import { useDispatch } from "react-redux";
import { switchSection } from "../features/sectionSlice";

function ShortMenu() {
  const dispatch = useDispatch();

  function changeActive(e) {
    e.preventDefault();

    document
      .querySelectorAll(".short-menu li a")
      .forEach((item) => item.classList.remove("active"));

    if (e.target.nodeName === "A") e.target.classList.add("active");
  }

  return (
    // <div className="short-menu-container">
    <ul className="short-menu" onClick={changeActive}>
      <li
        onClick={() =>
          dispatch(switchSection({ min: 199, max: 999, section: null }))
        }
      >
        <a href="/" className="active">
          Hot
        </a>
      </li>
      <li
        onClick={() =>
          dispatch(switchSection({ min: 49, max: 199, section: null }))
        }
      >
        <a href="/">Trending</a>
      </li>
      <li
        onClick={() =>
          dispatch(switchSection({ min: 0, max: 49, section: null }))
        }
      >
        <a href="/">Fresh</a>
      </li>
      <li
        onClick={() =>
          dispatch(switchSection({ min: 999, max: 1000000, section: null }))
        }
      >
        <a href="/">Top</a>
      </li>
      <li
        onClick={() =>
          dispatch(
            switchSection({ min: 9, max: 1000000, section: "Anime & Manga" })
          )
        }
      >
        <a href="/">Anime</a>
      </li>
      <li
        onClick={() =>
          dispatch(switchSection({ min: 9, max: 1000000, section: "Gaming" }))
        }
      >
        <a href="/">Games</a>
      </li>
      <li
        onClick={() =>
          dispatch(
            switchSection({ min: 9, max: 1000000, section: "Movie & TV" })
          )
        }
      >
        <a href="/">Movies</a>
      </li>
    </ul>
    // </div>
  );
}

export default ShortMenu;
