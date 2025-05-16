import "./index.scss"

const Footer = () => {
  return (
            
    <footer className="footer-section">
    <div className="container">
      <div className="footer-container">
        <div className="footer-box">
          <h3>About Us</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore dolore magna aliqua.
          </p>
        </div>
        <div className="footer-box newsletter">
          <h3>Newsletter</h3>
          <p>Stay updated with our latest</p>
          <div className="newsletter-input">
            <input type="email" placeholder="Enter Email" />
            <button>→</button>
          </div>
        </div>
        <div className="footer-box instagram">
          <h3>Instagram Feed</h3>
          <div className="insta-images">
            <img src={"/src/i1.jpg"} alt="Insta 1" />
            <img src={"/src/i2.jpg"} alt="Insta 2" />
            <img src={"/src/i3.jpg"} alt="Insta 3" />
            <img src={"/src/i4.jpg"} alt="Insta 4" />
            <img src={"/src/i5.jpg"} alt="Insta 5" />
            <img src={"/src/i6.jpg"} alt="Insta 6" />
            <img src={"/src/i7.jpg"} alt="Insta 7" />
            <img src={"/src/i8.jpg"} alt="Insta 8" />
          </div>
        </div>
        <div className="footer-box follow">
          <h3>Follow Us</h3>
          <p>Let us be social</p>
          <div className="footer-icons">
            <a href="#">
              <i className="fa-brands fa-facebook"></i>
            </a>
            <a href="#">
              <i className="fa-brands fa-twitter"></i>
            </a>
            <a href="#">
              <i className="fa-brands fa-github"></i>
            </a>
            <a href="#">
              <i className="fa-solid fa-bell"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="footer-copyright-section">
        <p>
          Copyright ©2025 All rights reserved | This template is made with{" "}
          <span>♡</span> by <a href="#">Colorlib</a>
        </p>
      </div>
    </div>
  </footer>
  )
}

export default Footer