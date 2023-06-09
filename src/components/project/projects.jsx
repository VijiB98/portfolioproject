/** @format */

import React from "react";
import frontend from "../../assets/images/frontend.jpg";
import network from "../../assets/images/backgroundone.jpg";
import "./projects.css";
const Projects = () => {
  return (
    <div className="project_cards">
      <h1>PROJECTS</h1>
      <div className="portfolio_card">
        <div className="portfolio_image">
          <img src={frontend} alt="frontend" />
          <a href="">Portfolio</a>
        </div>
        <div className="about_portfolio">
          Portfolio is a tye of resume that shows your skills and achievements
          in visual appealing and interactive format. It goes beyond the
          traditional text based resume by incorporating images, graphics,
          vedios and other multimedia elements
        </div>
      </div>
      <div className="socialmedia_card">
        <div className="socialmedia_image">
          <img src={network} alt="network" />
          <a href="">Socialnetwork</a>
        </div>
        <div className="about_socialnetwork">
          A social network are online platforms that allow individuals to creat
          profiles, connect with others, and share information, interests, and
          media with their network of friends or follers
        </div>
      </div>
    </div>
  );
};
export default Projects;
