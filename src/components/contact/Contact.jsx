import React from "react";

const Contact = () => {
  return (
    <>
      <section class="contact section" id="contact">
        <h2 class="section-title">Contact</h2>

        {/* <div class="contact-row">
          <div>
            <iframe
              className="gmap_canvas_iframe"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117763.67471091678!2d75.86384989999999!3d22.723972749999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fcad1b410ddb%3A0x96ec4da356240f4!2sIndore%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1706272535732!5m2!1sen!2sin"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
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
              <input
                type="submit"
                value="Submit"
                class="contact-button button"
              />
            </form>
          </div>
        </div> */}
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-md-12">
              <div className="row">
                <div className="col-md-6">
                  <div className="text-center">
                    <iframe
                      // class="gmap_canvas_iframe"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117763.67471091678!2d75.86384989999999!3d22.723972749999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fcad1b410ddb%3A0x96ec4da356240f4!2sIndore%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1706272535732!5m2!1sen!2sin"
                      allowfullscreen=""
                      loading="lazy"
                      referrerpolicy="no-referrer-when-downgrade"
                      width="90%"
                      height="100%"
                    ></iframe>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="text-center">
                    <div class="contact-container">
                      <form action="" class="contact-form">
                        <input
                          type="text"
                          placeholder="Name"
                          class="contact-input"
                        />
                        <input
                          type="email"
                          placeholder="Email"
                          class="contact-input"
                        />
                        <textarea
                          placeholder="Message..."
                          name="message-area"
                          id="message-area"
                          cols="0"
                          rows="10"
                          class="contact-input"
                        ></textarea>
                        <input
                          type="submit"
                          value="Submit"
                          class="contact-button button"
                        />
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Contact;
