import React, { useEffect, useState } from "react";
import "../../styles/SideMenu.css";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import BarChartIcon from "@mui/icons-material/BarChart";
import StarIcon from "@mui/icons-material/Star";
import CloseIcon from "@mui/icons-material/Close";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../../firebase";

function SideMenu() {
  const [recents, setRecents] = useState();
  const [popular, setPopular] = useState();
  const [allSections, setAllSections] = useState();

  useEffect(
    () =>
      onSnapshot(collection(db, "sections"), (snapshot) => {
        setRecents(
          snapshot.docs
            .filter((doc) => doc.data().recents)
            .map((i) => (
              <li key={i.id}>
                <a href="/">
                  <img src={i.data().imgSrc} alt="section img" />{" "}
                  {i.data().section}
                </a>

                <div className="close-fav">
                  <CloseIcon className="remove-fav" />
                  <StarIcon className="fav-btn" />
                </div>
              </li>
            ))
        );

        setPopular(
          snapshot.docs
            .filter((doc) => doc.data().popular)
            .map((i) => (
              <li key={i.id}>
                <a href="/">
                  <img src={i.data().imgSrc} alt="section img" />{" "}
                  {i.data().section}
                </a>

                <div className="close-fav">
                  <StarIcon className="fav-btn" />
                </div>
              </li>
            ))
        );

        setAllSections(
          snapshot.docs
            .filter((doc) => !doc.data().popular)
            .sort((a, b) => a.data().section.localeCompare(b.data().section))
            .map((i) => (
              <li key={i.id}>
                <a href="/">
                  <img src={i.data().imgSrc} alt="section img" />{" "}
                  {i.data().section}
                </a>

                <div className="close-fav">
                  <StarIcon className="fav-btn" />
                </div>
              </li>
            ))
        );
      }),
    []
  );

  return (
    <div
      className="side-menu-background"
      onClick={(e) =>
        e.target.className.includes("side-menu-background") &&
        document
          .querySelector(".side-menu-background")
          .classList.remove("show-menu")
      }
    >
      <div className="side-menu">
        <div className="side-menu-header">
          <li
            href="#"
            id="side-menu-icon"
            className="hoverCircle menuHover"
            onClick={() =>
              document
                .querySelector(".side-menu-background")
                .classList.toggle("show-menu")
            }
          >
            <MenuIcon />
          </li>
          <a href="/" id="logo">
            9GAG
          </a>
        </div>
        <ul className="main-sections">
          <h4>9GAG</h4>
          <li>
            <a href="/">
              <HomeIcon /> Hot
            </a>
          </li>
          <li>
            <a href="/">
              <TrendingUpIcon /> Trending
            </a>
          </li>
          <li>
            <a href="/">
              <AccessTimeIcon /> Fresh
            </a>
          </li>
          <li>
            <a href="/">
              <BarChartIcon /> Top
            </a>
          </li>
        </ul>

        <ul className="recents-sections">
          <h4>Recents</h4>
          {recents && recents}
        </ul>

        <ul className="popular-sections">
          <h4>Popular</h4>
          {popular && popular}
        </ul>

        <ul className="all-sections">
          <h4>All Sections</h4>
          {allSections}
        </ul>
      </div>
    </div>
  );
}

export default SideMenu;
