/** @format */

import React from "react";
import { useState } from "react";
import ham from "../../assets/icons/hamburger.svg";
import cancel from "../../assets/icons/cancel.svg";
import "./head.css";
import { Link } from "react-router-dom";
const Header = () => {
  const [sidebarOn, setsidebaron] = useState(false);
  const hamburger = (
    <>
      {!sidebarOn ? (
        <img
          src={ham}
          alt="hamicon"
          className="hamimage"
          onClick={(e) => {
            e.preventDefault();
            setsidebaron(true);
          }}
        />
      ) : (
        <img
          src={cancel}
          alt="closeicon"
          className="hamimage"
          onClick={(e) => {
            e.preventDefault();
            setsidebaron(false);
          }}
        />
      )}
    </>
  );
  const Sidebar = (
    <div className="sidebar">
      <div className="sidebar_content">
        <Link to="/">Overview</Link>
        <Link to="/portfolio">Portfolio</Link>
        <Link to="/certification">Certification</Link>
      </div>
    </div>
  );
  return (
    <div className="hero_header">
      <h1>
        <span>My</span> Portfolio
      </h1>
      <div className="head_links">
        <Link to="/">Overview</Link>
        <Link to="/portfolio">Portfolio</Link>
        <Link to="/certification">Certification</Link>
      </div>
      {hamburger}
      {sidebarOn && Sidebar}
      <button>Hire me</button>
    </div>
  );
};
export default Header;
