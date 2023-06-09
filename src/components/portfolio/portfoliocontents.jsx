/** @format */

import React from "react";
import portimage from "../../assets/images/new.webp";
import "./portfoliocontents.css";
const Portfoliocontents = () => {
  return (
    <div className="portfolio_main">
      <h1>PORTFOLIO</h1>
      <div className="portfolio_heropage">
        <div className="portfolio_heroimage">
          <img src={portimage} alt="portimage" />
          <h3>Portfolio</h3>
        </div>
        <div className="portfolio_maincontent">
          <b>
            A portfolio resume allows you to go beyond the tradition resume
            format by including samples of your work, such as design projects
            writting samples coding projects or artwork. It provides a
            comprehensive view of you abilities and demostrates you expertise in
            a particular field. Start with a brief introduction on that
            highlights your profession background skills and career goals.
            Include section for your education work experience and revevant
            certification. In addition incorporate a portfolio section where you
            can showcase example of your work. This can be done through image
            links to websites or online platform or by including physical
            samples if application. Since a portfolio resume includes visual
            elements it's important to creat an aesthetically pleasing layout.
            use consistent brandiding typography and color schemes that align
            with your personal or professional image. Pay attention to the
            overall design and ensure it enhances the presentation of your
            samples.
          </b>
        </div>
      </div>
    </div>
  );
};
export default Portfoliocontents;
