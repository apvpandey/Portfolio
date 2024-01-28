import React from "react";
import proImg from "../../assets/profile.png";

const Project = () => {
  return (
    <>
      <section class="work section" id="project">
        <h2 class="section-title">Projects</h2>

        <div class="work-container bd-grid">
          <a href="" class="work-img">
            <img src={proImg} alt="Chinese Tea" />
            <p>Project 1</p>
          </a>
          <a href="" class="work-img">
            <img src={proImg} alt="Milk Tea" />
            <p>Project 2</p>
          </a>
          <a href="" class="work-img">
            <img src={proImg} alt="Lavender Tea" />
            <p>Project 3</p>
          </a>
          <a href="" class="work-img">
            <img src={proImg} alt="Lemon Tea" />
            <p>Project 4</p>
          </a>
          <a href="" class="work-img">
            <img src={proImg} alt="English Tea" />
            <p>Project 5</p>
          </a>
          <a href="" class="work-img">
            <img src={proImg} alt="Raspberry Tea" />
            <p>Project 6</p>
          </a>
          <a href="" class="work-img">
            <img src={proImg} alt="Peppermint Tea" />
            <p>Project 7</p>
          </a>
          <a href="" class="work-img">
            <img src={proImg} alt="Chamomile Tea" />
            <p>Project 8</p>
          </a>
          <a href="" class="work-img">
            <img src={proImg} alt="Rose Tea" />
            <p>Project 9</p>
          </a>
        </div>
      </section>
    </>
  );
};
export default Project;
