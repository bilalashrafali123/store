import Banner from "../Banner";
import "./index.scss";

const Blog = () => {
  return (
    <>
      <div>
        <Banner title="Blog" />
      </div>
      <div className="container">
        <div className="blog-list">
          <div className="blog-item">
            <div className="blog-meta">
              <p>
                Food, <span className="highlight">Technology</span>, Politics,
                Lifestyle
              </p>
              <p>
                Mark wiens <i className="fa-solid fa-person"></i>
              </p>
              <p>
                12 Dec, 2018 <i className="fa-solid fa-calendar-days"></i>
              </p>
              <p>
                1.2M Views <i className="fa-solid fa-eye"></i>
              </p>
              <p>
                06 Comments <i className="fa-solid fa-comment"></i>
              </p>
            </div>
            <div className="blog-content">
              <img src="/src/blog1.jpg" alt="Blog 1" />
              <h2>Astronomy Binoculars A Great Alternative</h2>
              <p>
                MCSE boot camps have its supporters and its detractors. Some
                people do not understand why you should have to spend money on
                boot camp when you can get the MCSE study materials yourself at
                a fraction.
              </p>
              <button>View More</button>
            </div>
          </div>

          <div className="blog-item">
            <div className="blog-meta">
              <p>
                Food, <span className="highlight">Technology</span>, Politics,
                Lifestyle
              </p>
              <p>
                Mark wiens <i className="fa-solid fa-person"></i>
              </p>
              <p>
                12 Dec, 2018 <i className="fa-solid fa-calendar-days"></i>
              </p>
              <p>
                1.2M Views <i className="fa-solid fa-eye"></i>
              </p>
              <p>
                06 Comments <i className="fa-solid fa-comment"></i>
              </p>
            </div>
            <div className="blog-content">
              <img src="/src/blog1.jpg" alt="Blog 2" />
              <h2>Astronomy Binoculars A Great Alternative</h2>
              <p>
                MCSE boot camps have its supporters and its detractors. Some
                people do not understand why you should have to spend money on
                boot camp when you can get the MCSE study materials yourself at
                a fraction.
              </p>
              <button>View More</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
