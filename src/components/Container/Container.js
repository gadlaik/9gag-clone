import React from "react";
import "../../styles/Container.css";
import CurrentSection from "../CurrentSection/CurrentSection";
import Sidebar from "../Sidebar/Sidebar";

function Container() {
  return (
    <div id="container">
      <CurrentSection />
      <Sidebar />
    </div>
  );
}

export default Container;
