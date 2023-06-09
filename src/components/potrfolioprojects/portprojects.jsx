/** @format */

import React from "react";
import connectimg from "../../assets/images/connect.jpeg";
import clickimg from "../../assets/images/hand.jpeg";

import "./portprojects.css";
import { Link } from "react-router-dom";

const Projectsname = () => {
  return (
    <div className="port_projects">
      <h1>My Projects</h1>
      <div className="projects_name">
        <div className="media_lander">
          <img src={connectimg} alt="" />
          <h2>Socialnetwork</h2>
        </div>
        <div className="media_header">
          <img src={clickimg} alt="" />
          <h2> Portfolio</h2>
        </div>
        <div className="project_links">
          <h1>About Project</h1>
          <Link to="/socialnetwork">Socialnetwork</Link>
          <Link to="/portfoliolink">Portfolio</Link>
        </div>
      </div>
    </div>
  );
};
export default Projectsname;
