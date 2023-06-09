/** @format */

import React from "react";
import Content from "../components/herocontent/herocontent";
import Degree from "../components/education/education";
import Skills from "../components/skills/skills";
const Certify = () => {
  return (
    <div className="certification_hero">
      <Content />

      <Degree />
      <Skills />
    </div>
  );
};
export default Certify;
