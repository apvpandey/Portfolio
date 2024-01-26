import React from "react";
//import CTA from "./CTA";
//import HeaderSocials from "./HeaderSocials";
// import "./header.css";

const NavBar = () => {
  return (
    <>
      {/* <nav className="navbar navbar-expand-lg bg-dark border-bottom border-body fixed-top" data-bs-theme="dark">
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
      </nav> */}

      <header class="nav-container">
      <nav class="nav bd-grid">
        <div>
          <a href="#" class="nav-logo">Levi</a>
        </div>

        <div class="nav-menu" id="nav-menu">
          <ul class="nav-list">
            <li class="nav-item">
              <a href="#home" class="nav-link active">Home</a>
            </li>
            <li class="nav-item">
              <a href="#about" class="nav-link">About</a>
            </li>
            <li class="nav-item">
              <a href="#skills" class="nav-link">Skills</a>
            </li>
            <li class="nav-item"><a href="#work" class="nav-link">Work</a></li>
            <li class="nav-item">
              <a href="#contact" class="nav-link">Contact</a>
            </li>
          </ul>
        </div>

        <div className="nav-toggle" id="nav-toggle">
          <i className="fa-solid fa-bars" id="burgerBtn"></i>
        </div>
      </nav>
    </header>
    </>
  );
};

export default NavBar;
