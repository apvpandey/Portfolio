import React from "react";
import proImg from "../../assets/profile.png"

const Skills = () => {
  return (
    <>
      <section class="skills section" id="skills">
        <h2 class="section-title">Skills</h2>

        <div class="skills-container bd-grid">
          <div>
            <h2 class="skills-subtitle">Profesional Skills</h2>
            <p class="skills-text">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
            </p>
            <div class="skills-data">
              <div class="skills-names">
                <i class="fa-solid fa-broom"></i>
                <span class="skills-name">React JS</span>
              </div>
              <div class="skills-bar skills-clean"></div>
              <div>
                <span class="skills-percentage">95%</span>
              </div>
            </div>
            <div class="skills-data">
              <div class="skills-names">
                <i class="fa-solid fa-mug-hot"></i>
                <span class="skills-name">Node Js</span>
              </div>
              <div class="skills-bar skills-tea"></div>
              <div>
                <span class="skills-percentage">90%</span>
              </div>
            </div>
            <div class="skills-data">
              <div class="skills-names">
                <i class="fa-solid fa-list-check"></i>
                <span class="skills-name">Html Css Javascript</span>
              </div>
              <div class="skills-bar skills-management"></div>
              <div>
                <span class="skills-percentage">85%</span>
              </div>
            </div>
            <div class="skills-data">
              <div class="skills-names">
                <i class="fa-solid fa-comment-dots"></i>
                <span class="skills-name">Communication</span>
              </div>
              <div class="skills-bar skills-communication"></div>
              <div>
                <span class="skills-percentage">80%</span>
              </div>
            </div>
          </div>

          <div>
            <img src={proImg} alt="" class="skills-img" />
          </div>
        </div>
      </section>
    </>
  );
};
export default Skills;
