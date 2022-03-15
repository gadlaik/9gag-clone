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

function Navbar() {
  return (
    <header className="top-nav">
      <nav className="nav-menu">
        <ul className="secondary-menu">
          <li
            href="#"
            id="side-menu-icon"
            className="hoverCircle menuHover"
            onClick={() => {
              document
                .querySelector(".side-menu-background")
                .classList.toggle("show-menu");
            }}
          >
            <MenuIcon />
          </li>
          <a href="/" id="logo">
            9GAG
          </a>
          <li>
            <a href="/">
              <ShuffleOnIcon style={{ color: "darkorange" }} /> Shuffle
            </a>
          </li>
          <li>
            <a href="/">
              <PhoneAndroidIcon /> Get App
            </a>
          </li>
          <li>
            <a href="/">Donate</a>
          </li>
          <li>
            <a href="/">Crypto</a>
          </li>
          <li>
            <a href="/" title="Funny">
              <img
                src="https://miscmedia-9gag-fun.9cache.com/images/thumbnail-facebook/1557376304.186_U5U7u5_100x100wp.webp"
                alt="funny section"
              />
            </a>
          </li>
          <li>
            <a href="/" title="Random">
              <QuestionMarkIcon
                style={{
                  color: "red",
                  fontSize: "xx-large",
                  transform: "translateX(-3px)",
                }}
              />
            </a>
          </li>
        </ul>
        <ul className="user-menu">
          <li className="hoverCircle">
            <SearchIcon />
          </li>
          <li className="hoverCircle trio">
            <NotificationsIcon />
          </li>
          <li className="hoverCircle">
            <ChatBubbleIcon />
          </li>
          <li id="avatar" className="trio">
            <AccountCircleIcon />
          </li>
          <li className="logIn-signUp">
            <button
              className="logIn-btn"
              onClick={() => {
                document
                  .querySelector(".logIn-container")
                  .classList.add("show-form");
              }}
            >
              Log in
            </button>
            <button
              className="signUp-btn"
              onClick={() => {
                document
                  .querySelector(".signUp-container")
                  .classList.add("show-form");
              }}
            >
              Sign up
            </button>
          </li>
          <li id="upload" className="trio">
            <AddIcon /> Upload
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
