/** @format */

import React from "react";
import networkimage from "../../assets/images/phoneimg.webp";
import "./socialcontent.css";
const Socialnetwork = () => {
  return (
    <div className="social_network">
      <h1>SOCIALNETWORK</h1>
      <div className="hero_pages">
        <div className="network_image">
          <img src={networkimage} alt="networkimage" />
          <h3>Socialnetwork</h3>
        </div>
        <div className="networks_content">
          <p>
            A social network is an online platform that allows individuals to
            connect, interact and share information with others who have similar
            interests or backgrounds. It provides a virtual space for people to
            creat profiles share such as photos vedios and updates and engage in
            converstations and discussions with friends family colleagues aand
            even strangers. Social networks typically offer various features
            that facilitate communication and interaction among users, such as
            messaging comments likes and sharing options. Users can build their
            network of connections by sending friend request or following others
            user's profile allowing them to stay updates on each other's
            activities and posts.These platforms have transformed the way people
            communication enabling them to connect and stay in touch with others
            from different parts of the world. Social network have also become
            an important tool for sharing news opinions and personal
            experiences, often shaping public discourse on various topics.
          </p>
        </div>
      </div>
    </div>
  );
};
export default Socialnetwork;
