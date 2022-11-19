import React from "react";
import { Link } from "react-router-dom";
import LOGO from "../logo.svg";
import imga from "../Media/orgin.png"
// import fun from "./fun"
const Contact = () => {
  function fun() {
    alert("It works");
  }
  return (
    <div>
      <button onClick={fun}>YOLO</button>
      <div className="first hero">
        <img
          className="hero-profile-img"
          src={imga}
          alt=""
        />
        <div className="hero-description-bk her0-card-3"></div>
        <div className="hero-logo">
          <img sr={LOGO} alt="" />
        </div>
        <div className="hero-description">
          <p>Contact</p>
        </div>
        <div className="hero-date">
          <p>React Component</p>
        </div>
      </div>
      <div className="bottomControls">
        <button className="btn btn-1 btn-spacing">
          <Link to="/">Home</Link>
        </button>
        <button className="btn btn-2 btn-spacing">
          <Link to="/about">About</Link>
        </button>
        <button className="btn btn-3 btn-spacing">
          <Link to="/contact">Contact</Link>
        </button>
        <button className="btn btn-3 btn-spacing">
          <Link to="/subscribe">Subscribe</Link>
        </button>
      </div>
    </div>
  );
};

export default Contact;
