import React from "react";
//import CTA from "./CTA";
//import HeaderSocials from "./HeaderSocials";
// import "./header.css";

const NavBar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-dark border-bottom border-body fixed-top" data-bs-theme="dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Navbar w/ text
          </a>

          
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav  mb-4 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Features
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Pricing
                </a>
              </li>
            </ul>
           
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
