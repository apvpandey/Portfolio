import React from "react";
import { useEffect } from "react";
import Typed from "react-typed";
import { Link } from "react-router-dom";

const Header = () => {
  useEffect(() => {
    // Define the options for Typed.js
    const options = {
      strings: [
        "MERN Stack Development",
        "React JS",
        "Node JS",
        "JavaScript",
        "HTML || CSS || Bootstrap",
      ],
      loop: true,
      typeSpeed: 50,
      backSpeed: 25,
      backDelay: 500,
    };

    // Create a new instance of Typed.js

    // Cleanup function to destroy Typed instance when the component unmounts
  }, []);

  return (
    <>
      <div className="container">
        <div className="row justify-content-md-center">
     
          <div className="col-md-auto">
            <section className="home" id="home">
              <div id="particles-js"></div>

              <div className="content">
                <h2>
                  Hellow,
                  <br /> I'm  <span>Apoorv pandey</span>
                </h2>
                <p>
                  i am a{" "}
                  <Typed
                    strings={[
                      "frontend development",
                      "backend development",
                      "web designing",
                      "android development",
                      "web development",
                    ]}
                    typeSpeed={50}
                    backSpeed={25}
                    backDelay={500}
                    loop
                    className="typing-text" // Add a custom class to the rendered HTML
                  />
                </p>
                <a href="#about" class="btn">
                  <span>About Me...</span>
                  <i class="fas fa-arrow-circle-down"></i>
                </a>
               
              </div>
              <div class="image">
                <img
                  draggable="false"
                  class="tilt"
                  src="./assets/images/hero.jpg"
                  alt=""
                />
              </div>
            </section>
          </div>
          {/* <div class="col col-lg-2">3 of 3</div> */}
        </div>
        <div class="row">
          <div class="col">1 of 3</div>
          <div class="col-md-auto">Variable width content</div>
          <div class="col col-lg-2">3 of 3</div>
        </div>
      </div>
    </>
  );
};

export default Header;
