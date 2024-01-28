import React from "react";
//import CTA from "./CTA";
//import HeaderSocials from "./HeaderSocials";
// import "./header.css";

const NavBar = () => {
  return (
    <>
      {/* <header class="nav-container">
      <nav class="nav bd-grid">
        <div>
          <a href="#" class="nav-logo"><img src="" alt=""/></a>
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
    </header> */}

<nav class="navbar navbar-expand-lg bg-body-tertiary fixed-top">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav text-center">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#home">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#about">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#skills">Skills</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#project">Project</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </>
  );
};

export default NavBar;
