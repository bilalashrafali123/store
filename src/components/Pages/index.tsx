import Banner from "../Banner";
import Card from "../Card";
import "./index.scss";

const Pages = () => {
  return (
    <>
      <div>
        <Banner title="Detail" />
      </div>

      <div className="shop-category">
        <div className="container">
          <div className="shop-wrapper">
            <div className="sidebar">
              <h3 className="sidebar-title">Browse Categories</h3>
              <ul className="category-list">
                <li>
                  Fruits and Vegetables <span>(53)</span>
                </li>
                <li>
                  Meat and Fish <span>(53)</span>
                </li>
                <li>
                  Cooking <span>(53)</span>
                </li>
                <li>
                  Beverages <span>(24)</span>
                </li>
                <li>
                  Home and Cleaning <span>(53)</span>
                </li>
                <li>
                  Pest Control <span>(24)</span>
                </li>
                <li>
                  Office Products <span>(77)</span>
                </li>
                <li>
                  Beauty Products <span>(65)</span>
                </li>
                <li>
                  Health Products <span>(29)</span>
                </li>
                <li>
                  Pet Care <span>(29)</span>
                </li>
                <li>
                  Home Appliances <span>(15)</span>
                </li>
              </ul>
            </div>

            <div className="shop-content">
              <div className="top-bar">
                <select className="select-box">
                  <option>Default sorting</option>
                </select>
                <select className="select-box">
                  <option>Show 12</option>
                </select>
                <div className="pagination-bar">
                  <button className="page-btn">
                    <i className="fa-solid fa-arrow-left"></i>
                  </button>
                  <button className="page-btn active">1</button>
                  <button className="page-btn">2</button>
                  <button className="page-btn">3</button>
                  <span style={{ color: "black" }}>...</span>
                  <button className="page-btn">6</button>
                  <button className="page-btn">
                    <i className="fa-solid fa-arrow-right"></i>
                  </button>
                </div>
              </div>

              <div className="product-grid card-styling">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pages;
