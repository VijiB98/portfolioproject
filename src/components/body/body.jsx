/** @format */

import React from "react";
import photo from "../../assets/images/picv.jpeg";
import phone from "../../assets/images/call.jpeg";
import text from "../../assets/images/text.png";
import location from "../../assets/images/loc.jpeg";
import social from "../../assets/images/backgroundone.jpg";
import portfolio from "../../assets/images/newacc.jpeg";
import "./body.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const About = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplayspeed: 2000,
  };
  return (
    <Slider {...settings}>
      <div>
        <div className="body">
          <p>
            Iam able to handle multiple task on daily basis I use a creative
            approach to problem solving Iam a dependable person who is great at
            time management Iam always energetic and learn new skills I have
            experience working as part of a team and individully
          </p>
          <div className="but">
            <button>Hire Me</button>{" "}
          </div>
        </div>
      </div>
      <div>
        <div className="about_hero">
          <a href="">ABOUT ME</a>
          <div className="about_me">
            <div className="contact">
              <img src={photo} alt="photo" />
              <h1>VIJI B</h1>
              <p>Front-end Developer</p>
              <div className="number">
                <img src={phone} alt="phone" />
                <p>9600909763</p>
              </div>
              <div className="message">
                <img src={text} alt="text" />
                <p>vijaybvijay1998@gmail.com</p>
              </div>
              <div className="place">
                <img src={location} alt="location" />
                <p>Chennai</p>
              </div>
            </div>
            <div className="studies">
              <h1>EDUCATION</h1>
              <span id="college">
                Siga College of Management and Computer Science
              </span>
              <p> Master of Science in Mathematics</p>
              <span id="college">Madras Christian College</span>
              <p>Bachelor of Science in Mathematics</p>
            </div>
            <div className="addtion_skills">
              <h1>SKILLS</h1>
              <p>HTML5</p>
              <p>CSS</p>
              <p>REACT JS</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="hero_page">
          <h1>PROJECTS</h1>
          <div className="socialnetwork_herocontent">
            <div className="socialnetwork_images">
              <img src={social} alt="social" />
              <p>Socialnetwork</p>
            </div>
            <div className="socialnetwork_contents">
              social networ are online platforms that facilitates connections
              and interactions between individuals.Users can create personal
              profiles that showcase their interests backgroung and personal
              information
            </div>
          </div>
          <div className="portfolio_herocontent">
            <div className="portfolio_images">
              <img src={portfolio} alt="portfolio" />
              <p>Portfolio</p>
            </div>
            <div className="portfolio_contents">
              The primary purpose of a portfolio resume is to present a
              comprehensive overview of an individuals professional capabilities
              and experience. It allows job seekers to demonstrate their,
              expertise and accomplishments in a more tangible and visual
              manner.
            </div>
          </div>
        </div>
      </div>
    </Slider>
  );
};
export default About;
