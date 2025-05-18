import Banner from "../Banner";
import "./index.scss";

const Contact = () => {
  return (
    <>
      <div>
        <Banner title="Login" />
      </div>
      <div className="contact-section">
        <div className="container">
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.8713351604133!2d-74.17446222409202!3d40.70834033887866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c253cba10a90c5%3A0x41b9f276d2c83a4!2sNewark%20Liberty%20International%20Airport!5e0!3m2!1sen!2sus!4v1716031224727!5m2!1sen!2sus"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>

          <div className="contact-content">
            <div className="contact-info">
              <div className="info-block">
                <span className="icon">🏠</span>
                <div>
                  <h4>California, United States</h4>
                  <p>Santa Monica Boulevard</p>
                </div>
              </div>
              <div className="info-block">
                <span className="icon">📞</span>
                <div>
                  <h4>00 (440) 9865 562</h4>
                  <p>Mon to Fri 9am to 6 pm</p>
                </div>
              </div>
              <div className="info-block">
                <span className="icon">✉️</span>
                <div>
                  <h4>support@colorlib.com</h4>
                  <p>Send us your query anytime!</p>
                </div>
              </div>
            </div>

            <div className="contact-form">
              <div className="row flex-side-by-side">
                <div className="left-inputs">
                  <input type="text" placeholder="Enter your name" />
                  <input type="email" placeholder="Enter email address" />
                  <input type="text" placeholder="Enter Subject" />
                </div>
                <div className="right-textarea">
                  <textarea placeholder="Enter Message"></textarea>
                </div>
              </div>
              <div className="submit-button">
                <button>SEND MESSAGE</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
