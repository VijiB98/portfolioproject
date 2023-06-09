/** @format */

import React from "react";
import college from "../../assets/images/dgr.jpg";
import siga from "../../assets/images/clg.png";
import "./education.css";

const Degree = () => {
  return (
    <div className="hero">
      <h1>Education</h1>
      <div className="education">
        <div className="hero_education">
          <div className="master_clg">
            <img src={siga} alt="" />
            <h3>Siga College of Management And Computer Science</h3>
          </div>
          <div className="master">
            <img src={college} alt="" />
            <h3>Master of Science in Mathematics(2020-2022)</h3>
          </div>
          <div className="level">
            <div className="bar">
              <div className="range">
                <p>85%</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bachelor">
          <div className="bachelor_clg">
            <img src={siga} alt="" />
            <h3>Madras Christian College</h3>
          </div>
          <div className="bachelor_dgr">
            <img src={college} alt="" />
            <h3>Bachelor of Science in Mathematics(2017-2020)</h3>
          </div>
          <div className="bachelor_level">
            <div className="bachelor_bar">
              <div className="bachelor_range">
                <p>80%</p>
              </div>
            </div>
          </div>
        </div>
        <div className="school">
          <div className="school_name">
            <img src={siga} alt="" />
            <h3>Mount Park Hr SEc School</h3>
          </div>
          <div className="school_dgr">
            <img src={college} alt="" />
            <h3>Higher Secondary School</h3>
          </div>
          <div className="school_level">
            <div className="school_bar">
              <div className="school_range">
                <p>80%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Degree;
