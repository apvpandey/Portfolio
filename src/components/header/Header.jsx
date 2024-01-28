import React from "react";
import { useEffect } from "react";
import Typed from "react-typed";
import { Link } from "react-router-dom";
import proImg from "../../assets/profile.png";
import gitHubImg from "../../assets/Github.png"
import LinkDinImg from "../../assets/linkedIn.png"
import TwitterImg from "../../assets/Twitter.png"

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
      <div className="containerHeader">
        <div className="row justify-content-md-center">
          <div className="col-md-auto">
            <section className="homeHeader" id="home">
              <div id="particles-js"></div>

              <div className="content">
                <h2>
                  Hellow,
                  <br /> I'm <span>Apoorv pandey</span>
                </h2>
                <p>
                  i am a{" "}
                  <Typed
                    strings={[
                      "MERN Stack Developer",
                      "Forntend Developer",
                      "Backend Developer",
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
                  <i className="fas fa-arrow-circle-down"></i>
                </a>
                <div class="socials">
                  <ul class="social-icons">
                    <li>
                      <a
                        class="linkedin"
                        aria-label="LinkedIn"
                        href="https://www.linkedin.com/in/atharv-pandey/"
                        target="_blank"
                      >
                        <img src={LinkDinImg} alt=""/>
                        {/* <i class="fab fa-linkedin"></i> */}
                      </a>
                    </li>
                    <li>
                      <a
                        class="github"
                        aria-label="GitHub"
                        href="https://github.com/AtharvPandey"
                        target="_blank"
                      >
                        <img src={gitHubImg} alt=""/>
                      </a>
                    </li>
                    <li>
                      <a
                        class="twitter"
                        aria-label="Twitter"
                        href="https://twitter.com/18atharv_"
                        target="_blank"
                      >
                        <img src={TwitterImg} alt=""/>
                      </a>
                    </li>
                    {/* <li>
                      <a
                        class="instagram"
                        aria-label="Instagram"
                        href="https://www.instagram.com/18atharv"
                      >
                        <img src={TwitterImg} alt=""/>
                      </a>
                    </li> */}
                  </ul>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
