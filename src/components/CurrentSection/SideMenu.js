import React, { useEffect, useState } from "react";
import "../../styles/SideMenu.css";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import BarChartIcon from "@mui/icons-material/BarChart";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../../firebase";

function SideMenu() {
  const [recents, setRecents] = useState();

  useEffect(() => {
    return onSnapshot(collection(db, "recents"), (snapshot) =>
      setRecents(
        snapshot.docs
          .map((snap) => snap.data())
          .map((i, index) => (
            <li key={index}>
              <a href="#">
                <img src={i.imgSrc} alt="section img" /> {i.section}
              </a>
            </li>
          ))
      )
    );
  }, []);

  setTimeout(() => {
    console.log(recents);
  }, 1000);

  return (
    <div className="side-menu">
      <div className="side-menu-header">
        <li href="#" id="side-menu-icon" className="hoverCircle menuHover">
          <MenuIcon />
        </li>
        <a href="#" id="logo">
          9GAG
        </a>
      </div>
      <ul className="main-sections">
        <h4>9GAG</h4>
        <li>
          <a href="">
            <HomeIcon /> Hot
          </a>
        </li>
        <li>
          <a href="">
            <TrendingUpIcon /> Trending
          </a>
        </li>
        <li>
          <a href="">
            <AccessTimeIcon /> Fresh
          </a>
        </li>
        <li>
          <a href="">
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
        <li>
          <a href="">Funny</a>
        </li>
        <li>
          <a href="">Latest News</a>
        </li>
        <li>
          <a href="">Politics</a>
        </li>
        <li>
          <a href="">WTF</a>
        </li>
        <li>
          <a href="">Cryptocurrency</a>
        </li>
        <li>
          <a href="">Anime & Manga</a>
        </li>
        <li>
          <a href="">Random</a>
        </li>
        <li>
          <a href="">Animals</a>
        </li>
        <li>
          <a href="">Awesome</a>
        </li>
        <li>
          <a href="">Gaming</a>
        </li>
        <li>
          <a href="">Car</a>
        </li>
        <li>
          <a href="">GIF</a>
        </li>
        <li>
          <a href="">League of Legends</a>
        </li>
        <li>
          <a href="">Video</a>
        </li>
      </ul>

      <ul className="all-sections">
        <h4>All Sections</h4>
        <li>
          <a href="">Among Us</a>
        </li>
        <li>
          <a href="">Ask 9GAG</a>
        </li>
        <li>
          <a href="">Coronavirus</a>
        </li>
        <li>
          <a href="">Countryballs</a>
        </li>
        <li>
          <a href="">Crappy Design</a>
        </li>
        <li>
          <a href="">Drawing, DIY & Crafts</a>
        </li>
        <li>
          <a href="">Football</a>
        </li>
        <li>
          <a href="">Fashion & Beauty</a>
        </li>
        <li>
          <a href="">Food & Drinks</a>
        </li>
        <li>
          <a href="">Fortnite</a>
        </li>
        <li>
          <a href="">History</a>
        </li>
        <li>
          <a href="">Movie & TV</a>
        </li>
        <li>
          <a href="">Music</a>
        </li>
        <li>
          <a href="">NBA</a>
        </li>
        <li>
          <a href="">Sport</a>
        </li>
        <li>
          <a href="">PC Master Race</a>
        </li>
        <li>
          <a href="">Pokémon</a>
        </li>
        <li>
          <a href="">PUBG</a>
        </li>
        <li>
          <a href="">Satisfying</a>
        </li>
        <li>
          <a href="">Science & Tech</a>
        </li>
        <li>
          <a href="">Wholesome</a>
        </li>
      </ul>
    </div>
  );
}

export default SideMenu;
