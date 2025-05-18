import Banner from "../Banner";
import "./index.scss";

const Contact = () => {
  return (
    <>
      <div>
        <Banner title="Contact" />
      </div>
      <div className="contact-section container">
        <div className="map-container">
          <div className="map-overlay">
            <div className="map-error">
              <p>Google</p>
              <span>This page can't load Google Maps correctly.</span>
              <button>OK</button>
            </div>
          </div>
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3617.559709497574!2d67.05119137488268!3d24.947064841787554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb341b4c4180f59%3A0xcb8b11a9be6708cb!2sMARHABA%20GALAXY!5e0!3m2!1sen!2s!4v1747545957556!5m2!1sen!2s" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
            style={{ border: 0 }} ></iframe>
        </div>  
        <div className="contact-content">
          <div className="contact-info">
            <div className="info-block">
              <span className="icon">🏠</span>
              <div>
                <h4>California, United States</h4>
                <p>Santa monica boulevard</p>
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
              <span className="icon">📧</span>
              <div>
                <h4>support@colorlib.com</h4>
                <p>Send us your query anytime!</p>
              </div>
            </div>
          </div>
          <form className="contact-form">
            <input type="text" placeholder="Enter your name" />
            <input type="email" placeholder="Enter email address" />
            <input type="text" placeholder="Enter Subject" />
            <textarea placeholder="Enter Message"></textarea>
            <button type="submit">SEND MESSAGE</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
