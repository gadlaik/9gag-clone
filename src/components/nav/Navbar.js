import React from "react";
import "../../styles/Navbar.css";
import MenuIcon from "@mui/icons-material/Menu";
import ShuffleOnIcon from "@mui/icons-material/ShuffleOn";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AddIcon from "@mui/icons-material/Add";
import logo from "../../assets/9gagLogo.png";
import kekw from "../../assets/KEKW.png";

function Navbar() {
  return (
    <header className="top-nav">
      <nav className="nav-menu">
        <ul className="secondary-menu">
          <div href="#" id="side-menu-icon">
            <MenuIcon />
          </div>
          <a href="#" id="logo">
            <img src={logo} alt="logo" />
          </a>
          <li>
            <a href="#">
              <ShuffleOnIcon style={{ color: "darkorange" }} /> Shuffle
            </a>
          </li>
          <li>
            <a href="#">
              <PhoneAndroidIcon /> Get App
            </a>
          </li>
          <li>
            <a href="#">Donate</a>
          </li>
          <li>
            <a href="#">Crypto</a>
          </li>
          <li>
            <a href="#" title="Funny">
              <img src={kekw} alt="KEKW" />
            </a>
          </li>
          <li>
            <a href="#" title="Random">
              <QuestionMarkIcon style={{ color: "red" }} />
            </a>
          </li>
        </ul>
        <ul className="user-menu">
          <li>
            <SearchIcon />
          </li>
          <li>
            <NotificationsIcon />
          </li>
          <li>
            <ChatBubbleIcon />
          </li>
          <li id="avatar">
            <AccountCircleIcon />
          </li>
          <li>
            <button id="upload">
              <AddIcon /> Upload
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
