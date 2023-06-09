/** @format */

import React from "react";
import photo from "../../assets/images/picv.jpeg";

import phone from "../../assets/images/call.jpeg";
import text from "../../assets/images/text.png";
import location from "../../assets/images/loc.jpeg";
import "./content.css";
const Profilecontent = () => {
  return (
    <div className="profilecontent_hero">
      <div className="about">
        <img src={photo} alt="photo" />
        <h1>VIJI B</h1>
        <div className="phone">
          <img src={phone} alt="phone" />
          <p>9600909763</p>
        </div>
        <div className="mail">
          <img src={text} alt="text" />
          <p>vijaybvijay1998@gmail.com</p>
        </div>
        <div className="location">
          <img src={location} alt="location" />
          <p>Chennai</p>
        </div>
      </div>
      <div className="content">
        <p>
          Highly skilled in front-end developer with a passion for creating
          user-friendly and visually appealing websites. proficient in HTML,
          CSS, and javascript with a strong understanding of responsive desin
          principle. Excellent problem-solving and communication skills with the
          ability to collaborate effectively with cross function teams
        </p>
      </div>
    </div>
  );
};
export default Profilecontent;
