import React from "react";

const allComponent = ()=> {

    return<>
      {/* <!--===== HEADER =====--> */}
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

        <div class="nav-toggle" id="nav-toggle">
          <i class="fa-solid fa-bars" id="burgerBtn"></i>
        </div>
      </nav>
    </header>

    {/* <!--===== Home Section=====--> */}
    <section class="home bd-grid" id="home">
      <div class="home-data">
        <h1 class="home-title">
          Hi, I'm <span class="home-title-color">Levi</span><br />
          Tea Barista
        </h1>
        <a href="#contact" class="button">Contact</a>
      </div>

      <div class="home-img">
        <img
          src="img/profile.png"
          alt="Levi Profile Picture"
          id="levi-profile"
        />
      </div>
    </section>
{/* 
    <!--===== ABOUT =====--> */}
    <section class="about" id="about">
      <h2 class="section-title">About</h2>

      <div class="about-container bd-grid">
        <div class="about-img">
          <img
            src="img/about-profile.jpg"
            alt="About Picture"
            id="levi-about-profile"
          />
        </div>

        <div>
          <h2 class="about-subtitle">I'm Levi</h2>
          <p class="about-text">
            I'm known as humanity's strongest tea barista, holding the records
            of selling 2500 cups of hand crafted tea per day. Besides making
            tea, my greatest strength is maintaining the cleanliness of the
            cafe. I've been told that I look great in my cleaner attire.
          </p>
        </div>
      </div>
    </section>

    {/* <!--===== SKILLS =====--> */}
    <section class="skills section" id="skills">
      <h2 class="section-title">Skills</h2>

      <div class="skills-container bd-grid">
        <div>
          <h2 class="skills-subtitle">Profesional Skills</h2>
          <p class="skills-text">
            I am highly skilled in cleaning task and in the meantime enhancing
            my tea making techniques. I have experience in managing a cafe
            before, with monthly sales of 50,000 cups of tea. My communication
            skill is not bad, but I'm improving myself to talk more politely
            when pissed off.
          </p>
          <div class="skills-data">
            <div class="skills-names">
              <i class="fa-solid fa-broom"></i>
              <span class="skills-name">Cleaning</span>
            </div>
            <div class="skills-bar skills-clean"></div>
            <div>
              <span class="skills-percentage">100%</span>
            </div>
          </div>
          <div class="skills-data">
            <div class="skills-names">
              <i class="fa-solid fa-mug-hot"></i>
              <span class="skills-name">Tea Making</span>
            </div>
            <div class="skills-bar skills-tea"></div>
            <div>
              <span class="skills-percentage">90%</span>
            </div>
          </div>
          <div class="skills-data">
            <div class="skills-names">
              <i class="fa-solid fa-list-check"></i>
              <span class="skills-name">Management</span>
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
          <img src="img/work.gif" alt="" class="skills-img" />
        </div>
      </div>
    </section>

    {/* <!--===== WORK =====--> */}
    <section class="work section" id="work">
      <h2 class="section-title">Work</h2>

      <div class="work-container bd-grid">
        <a href="" class="work-img">
          <img src="img/1.png" alt="Chinese Tea" />
          <p>Chinese Tea</p>
        </a>
        <a href="" class="work-img">
          <img src="img/2.png" alt="Milk Tea" />
          <p>Milk Tea</p>
        </a>
        <a href="" class="work-img">
          <img src="img/3.png" alt="Lavender Tea" />
          <p>Lavender Tea</p>
        </a>
        <a href="" class="work-img">
          <img src="img/4.png" alt="Lemon Tea" />
          <p>Lemon Tea</p>
        </a>
        <a href="" class="work-img">
          <img src="img/5.png" alt="English Tea" />
          <p>English Tea</p>
        </a>
        <a href="" class="work-img">
          <img src="img/6.png" alt="Raspberry Tea" />
          <p>Raspberry Tea</p>
        </a>
        <a href="" class="work-img">
          <img src="img/7.png" alt="Peppermint Tea" />
          <p>Peppermint Tea</p>
        </a>
        <a href="" class="work-img">
          <img src="img/8.png" alt="Chamomile Tea" />
          <p>Chamomile Tea</p>
        </a>
        <a href="" class="work-img">
          <img src="img/9.png" alt="Rose Tea" />
          <p>Rose Tea</p>
        </a>
      </div>
    </section>

    {/* <!--===== CONTACT =====--> */}
    <section class="contact section" id="contact">
      <h2 class="section-title">Contact</h2>

      <div class="contact-row">
        <iframe
          class="gmap_canvas_iframe"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28931.417876876378!2d100.29888984385552!3d5.3680470700193865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x304ac1a836ae7e53%3A0x835ac54fe8f4d95a!2sUniversity%20of%20Science%2C%20Malaysia!5e0!3m2!1sen!2smy!4v1651219909173!5m2!1sen!2smy"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>

        <div class="contact-container">
          <form action="" class="contact-form">
            <input type="text" placeholder="Name" class="contact-input" />
            <input type="email" placeholder="Email" class="contact-input" />
            <textarea
              placeholder="Message..."
              name="message-area"
              id="message-area"
              cols="0"
              rows="10"
              class="contact-input"
            ></textarea>
            <input type="submit" value="Submit" class="contact-button button" />
          </form>
        </div>
      </div>
    </section>

    {/* <!--===== FOOTER =====--> */}
    <footer class="footer">
      <p class="footer-title">
        Microsoft Learn Student Ambassadors of Universiti Sains Malaysia
      </p>
      <div class="footer-social">
        <a
          href="https://www.facebook.com/MicrosoftLearnStudentAmbassadors.USM"
          class="footer-icon"
        >
          <i class="fa-brands fa-facebook-square"></i>
        </a>
        <a
          href="https://www.youtube.com/channel/UCU4qzNiTNdjGa60CpwtaJZg"
          class="footer-icon"
        >
          <i class="fa-brands fa-youtube"></i>
        </a>
      </div>
      <p class="footer-copy">&#169; MLSA USM</p>
      <p class="footer-copy">
        This website is coded for learning purpose only.
      </p>
      <p class="footer-copy">
        Credits: Website codes and design are referred from
        <a href="https://www.youtube.com/c/Bedimcode">Bedimcode</a>
      </p>
    </footer>
    
    </>

}
export default allComponent;