import React, { useEffect, useState } from "react";
import "../../styles/SideMenu.css";
import HomeIcon from "@mui/icons-material/Home";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import BarChartIcon from "@mui/icons-material/BarChart";
import StarIcon from "@mui/icons-material/Star";
import CloseIcon from "@mui/icons-material/Close";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../../firebase";
import { useDispatch, useSelector } from "react-redux";
import { switchSection } from "../features/sectionSlice";

function SideMenu() {
  const [recents, setRecents] = useState();
  const [popular, setPopular] = useState();
  const [allSections, setAllSections] = useState();

  const dispatch = useDispatch();
  const currSection = useSelector((state) => state.section.value);

  useEffect(
    () =>
      onSnapshot(collection(db, "sections"), (snapshot) => {
        setRecents(
          snapshot.docs
            .filter((doc) => doc.data().recents)
            .map((i) => (
              <li
                key={i.id}
                onClick={() => {
                  document
                    .querySelector(".side-menu-background")
                    .classList.remove("show-menu");
                  dispatch(
                    switchSection({
                      min: 0,
                      max: 1000000,
                      section: i.data().section,
                    })
                  );
                }}
              >
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
            .sort((a, b) => a.data().section.localeCompare(b.data().section))
            .map((i) => (
              <li
                key={i.id}
                onClick={() => {
                  document
                    .querySelector(".side-menu-background")
                    .classList.remove("show-menu");
                  dispatch(
                    switchSection({
                      min: 0,
                      max: 1000000,
                      section: i.data().section,
                    })
                  );
                }}
              >
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
              <li
                key={i.id}
                onClick={() => {
                  document
                    .querySelector(".side-menu-background")
                    .classList.remove("show-menu");
                  dispatch(
                    switchSection({
                      min: 0,
                      max: 1000000,
                      section: i.data().section,
                    })
                  );
                }}
              >
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
        <ul className="main-sections">
          <h5>9GAG</h5>
          <li
            onClick={() => {
              document
                .querySelector(".side-menu-background")
                .classList.remove("show-menu");
              dispatch(switchSection({ min: 199, max: 999, section: null }));
            }}
          >
            <a href="/">
              <HomeIcon /> Hot
            </a>
          </li>
          <li
            onClick={() => {
              document
                .querySelector(".side-menu-background")
                .classList.remove("show-menu");
              dispatch(switchSection({ min: 49, max: 199, section: null }));
            }}
          >
            <a href="/">
              <TrendingUpIcon /> Trending
            </a>
          </li>
          <li
            onClick={() => {
              document
                .querySelector(".side-menu-background")
                .classList.remove("show-menu");
              dispatch(switchSection({ min: 0, max: 49, section: null }));
            }}
          >
            <a href="/">
              <AccessTimeIcon /> Fresh
            </a>
          </li>
          <li
            onClick={() => {
              document
                .querySelector(".side-menu-background")
                .classList.remove("show-menu");
              dispatch(
                switchSection({ min: 999, max: 1000000, section: null })
              );
            }}
          >
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
