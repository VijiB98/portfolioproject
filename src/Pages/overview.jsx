/** @format */

import React from "react";
import "./overview.css";

import Projects from "../components/project/projects";
import Profilecontent from "../components/overviewcontent/content";

const Overview = () => {
  return (
    <>
      <div className="profilebody_main">
        <Profilecontent />
      </div>
      <Projects />
    </>
  );
};
export default Overview;
