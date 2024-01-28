import React from "react";
import proImg from "../../assets/profile.png";


const Home = () => {

  return (
    <>
        <section class="home bd-grid" id="home">
          <div class="home-data">
            <h1 class="home-title">
              Hi, I'm <span class="home-title-color">Apoorv</span>
              <br />
              Software Engineer
            </h1>
            <a href="#contact" class="button">
              Contact
            </a>
          </div>

          <div class="home-img">
            <img src={proImg} alt="Levi Profile Picture" id="levi-profile" />
          </div>
        </section>
    </>
  );
};
export default Home;
