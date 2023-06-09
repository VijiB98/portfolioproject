/** @format */

import React, { useState } from "react";
import close from "../addpost/images/cross.jpeg";
import "./addPost.css";
const Projects = (props) => {
  const [imgDisplay, uploadImage] = useState([]);
  const imageFolder = (e) => {
    if (e.target.files.length !== 0) {
      uploadImage((imgDisplay) => [
        ...imgDisplay,
        URL.createObjectURL(e.target.files[0]),
      ]);
    }
  };
  return props.trigger ? (
    <div className="close_project">
      {" "}
      <div className="hero_project">
        <form>
          <div className="add_project">
            <h2>Add Projects</h2>
            <input type="text" placeholder="project title" required />
            <textarea
              placeholder="Project Description"
              id=""
              cols="10"
              rows="10"></textarea>
          </div>
          <div className="preview">
            <h2>Preview</h2>
            {imgDisplay.map((elem) => {
              return (
                <span key={elem}>
                  <img src={elem} alt="image" />
                </span>
              );
            })}
            <input type="file" onChange={imageFolder} required />
          </div>
        </form>
      </div>
      <button onClick={() => props.setTrigger(false)}>
        <img src={close} alt="" />
      </button>
    </div>
  ) : (
    ""
  );
};
export default Projects;
