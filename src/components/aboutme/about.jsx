/** @format */
import React from "react";
import photo from "../../assets/images/picv.jpeg";

import phone from "../../assets/images/call.jpeg";
import text from "../../assets/images/text.png";
import location from "../../assets/images/loc.jpeg";
import "./about.css";
const Aboutme = () => {
  return (
    <div className="hero_page">
      <h1>ABOUT ME</h1>
      <div className="information_about">
        <div className="contacts">
          <img src={photo} alt="photo" />
          <h1>VIJI B</h1>
          <p>Front-end Developer</p>
          <div className="phone_no">
            <img src={phone} alt="phone" />
            <p>9600909763</p>
          </div>
          <div className="messages">
            <img src={text} alt="text" />
            <p>vijaybvijay1998@gmail.com</p>
          </div>
          <div className="places">
            <img src={location} alt="location" />
            <p>Chennai</p>
          </div>
        </div>
        <div className="qualifications">
          <h1>EDUCATION</h1>
          <span id="college">
            Siga College of Management and Computer Science
          </span>
          <p> Master of Science in Mathematics</p>
          <span id="college">Madras Christian College</span>
          <p>Bachelor of Science in Mathematics</p>
        </div>
        <div className="addtion_course">
          <h1>SKILLS</h1>
          <p>HTML5</p>
          <p>CSS</p>
          <p>REACT JS</p>
        </div>
      </div>
    </div>
  );
};
export default Aboutme;
