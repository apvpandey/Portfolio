import React from "react";
import proImg from "../../assets/profile.png"
import img1 from "../../assets/pro-1.jpeg"
import img2 from "../../assets/pro-2.jpeg"

const About = () => {
  return (
    <>
      <section class="about" id="about">
        <h2 class="section-title">About</h2>

        <div class="about-container bd-grid">
          <div class="about-img">
            <img
              src={img2}
              alt="About Picture"
              id="levi-about-profile"
            />
          </div>

          <div>
            <h2 class="about-subtitle">I'm Apoorv pandey</h2>
            <p class="about-text">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged unchanged.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
export default About;
