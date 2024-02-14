import React from "react";
import Navbar from "../Navbar";
import { Link } from "react-router-dom";
import "./index.css";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="banner-img">
        <div className="title">
          <h3>
            <span>Welcome </span> <span>To</span> <span>BriteKompany! </span>
            <br />            
          </h3>
          <div className="small-tagline">
            <p>"At BriteKompany, we enable businesses through technology. Our goal is to lead innovation and satisfy clients by offering superior computer programming services."</p>
          </div>
        </div>
        <div className="button" data-testid="btn">
          <Link to="/Jobs">Browse Jobs</Link>
        </div>
        <div className="small-tagline">
          <p></p>
          <p>
            About Us: <br></br>BriteKompany is a state-of-the-art software development firm that specializes in creative computer programming solutions. 
            <br></br>BriteKompany is dedicated to providing tailored software solutions that enable businesses to prosper in the digital era.
          </p>
          <p></p><p></p><p></p>
          <p> Benefits/Reasons: 
            <br></br> Cutting-Edge Technology
            <br></br> Dynamic and Innovative Work Environment
            <br></br> Career Growth and Development
          </p>
        </div>       
      </div>
    </>
  );
};

export default Home;
