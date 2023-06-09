/** @format */

import React from "react";
import "./study.css";
import corse from "../../assets/images/dgr.jpg";
import name from "../../assets/images/clg.png";
const College = () => {
  return (
    <div className="edu">
      <h1>Education</h1>

      <div className="degree_name">
        {" "}
        <img src={corse} alt="" />
        <p>Master of science in Mathematics</p>{" "}
      </div>
      <div className="institute_name">
        {" "}
        <img src={name} alt="" />
        <p>Siga College of Management and Computer Science</p>{" "}
      </div>
      <div className="percentage">
        <h4>MSC</h4>
        <div className="bar">
          <div className="range">85%</div>
        </div>
      </div>
    </div>
  );
};
export default College;
