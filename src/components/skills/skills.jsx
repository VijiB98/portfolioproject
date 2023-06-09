/** @format */

import React from "react";
import "./skills.css";
const Skills = () => {
  return (
    <div className="skills_knowledge">
      <h1>Skills</h1>
      <div className="knowledge">
        <div className="html_knowledge">
          <h3>HTML</h3>
          <div className="html_bar">
            <div className="html_range">
              <p>90%</p>
            </div>
          </div>
        </div>
        <div className="css_knowledge">
          <h3>CSS</h3>
          <div className="css_bar">
            <div className="css_range">
              <p>85%</p>
            </div>
          </div>
        </div>
        <div className="react_knowledge">
          <h3>React js</h3>
          <div className="react_bar">
            <div className="react_range">
              <p>60%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Skills;
