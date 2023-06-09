/** @format */
import React from "react";
import facebook from "../../assets/images/facebook.png";
import instagram from "../../assets/images/instagram.png";
import linkedin from "../../assets/images/linkedin.png";
import mail from "../../assets/images/mail.jpeg";
import skype from "../../assets/images/skype.png";
import whatsapp from "../../assets/images/whatsapp.png";
import "./footer.css";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="portfolio_footer">
      <div className="footer_image">
        <img src={facebook} alt="" />
        <img src={instagram} alt="" />
        <img src={linkedin} alt="" />
        <img src={mail} alt="" />
        <img src={skype} alt="" />
        <img src={whatsapp} alt="" />
      </div>
      <div className="hero_links">
        <div className="footer_link">
          <Link to="/">Overview</Link>
          <Link to="/aboutlink"> About me</Link>
        </div>
        <div className="footer_linkmain">
          <Link to="/certification">Certification</Link>
          <Link to="/portfolio">Portfolio</Link>
        </div>
      </div>
      <p>Email:vijaybvijay1998@gmail.com</p>
    </div>
  );
};
export default Footer;
