import React from "react";
import "../../styles/Navbar.css";
import MenuIcon from "@mui/icons-material/Menu";
import ShuffleOnIcon from "@mui/icons-material/ShuffleOn";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import logo from "../../assets/9gagLogo.png";
import funny from "../../assets/funnySection.jpg";

function Navbar() {
  return (
    <div className="navbar">
      <div className="menu-nav">
        <div className="menu">
          <MenuIcon />
        </div>
        <a href="/" className="logo">
          <img src={logo} alt="logo" />
        </a>
        <ul className="secondary-menu">
          <li>
            <a href="#">
              <ShuffleOnIcon /> Shuffle
            </a>
          </li>
          <li>
            <a href="#">
              <PhoneAndroidIcon /> Get App
            </a>
          </li>
          <li>
            <a href="#">
              <img src={funny} alt="funny section" />
            </a>
          </li>
          <li>
            <a href="#">Donate</a>
          </li>
          <li>
            <a href="#">Crypto</a>
          </li>
          <li>
            <a href="#">80s</a>
          </li>
          <li>
            <a href="#">
              <QuestionMarkIcon className="random" />
            </a>
          </li>
        </ul>
      </div>

      <div className="user-nav">
        <li></li>
        <li>*</li>
        <li>*</li>
        <li>*</li>
        <li>*</li>
      </div>
    </div>
  );
}

export default Navbar;
