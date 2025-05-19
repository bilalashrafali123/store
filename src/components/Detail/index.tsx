import { useState } from "react";
import Banner from "../Banner";
import "./index.scss";

const tabs = {
  description: "description",
  specification: "specification",
};

const Detail = () => {
  const [Tab, setTab] = useState(tabs.description);

  return (
    <div>
      <Banner title="Details" />
      <div className="container">
        <div className="product-layout">
          <div className="product-image">
            <img src="/src/shopbanner.jpg" alt="Product" />
          </div>
          <div className="product-details">
            <h2>Faded SkyBlu Denim Jeans</h2>
            <h3 className="price">$149.99</h3>
            <p>
              <strong>Category</strong>: Household
            </p>
            <p>
              <strong>Availability</strong>: In Stock
            </p>
            <p className="description">
              Mill Oil is an innovative oil filled radiator with the most modern
              technology. If you are looking for something that can make your
              interior look awesome, and at the same time give you the pleasant
              warm feeling during the winter.
            </p>

            <div className="product-action">
              <div className="quantity-group">
                <label>Quantity: </label>
                <input type="number" defaultValue={1} />
              </div>
              <button>Add to Cart</button>
            </div>
          </div>
        </div>

        <div className="product-tabs">
          <button
            className={Tab === tabs.description ? "active" : ""}
            onClick={() => setTab(tabs.description)}
          >
            Description
          </button>
          <button
            className={Tab === tabs.specification ? "active" : ""}
            onClick={() => setTab(tabs.specification)}
          >
            Specification
          </button>
        </div>

        {Tab === tabs.description && (
          <div className="product-info">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industry's standard
              dummy text ever since the 1500s, when an unknown printer took a
              galley of type and scrambled it to make a type specimen book. It
              has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum
            </p>
          </div>
        )}

        {Tab === tabs.specification && (
          <div className="product-specs">
            <table>
              <tbody>
                <tr>
                  <th>witdh</th>
                  <td>128mm</td>
                </tr>
                <tr>
                  <th>height</th>
                  <td>508</td>
                </tr>
                <tr>
                  <th>depth</th>
                  <td>85mm</td>
                </tr>
                <tr>
                  <th>weight</th>
                  <td>52gm</td>
                </tr>
                <tr>
                  <th>quality checking</th>
                  <td>yes</td>
                </tr>
                <tr>
                  <th>Freshness Duration</th>
                  <td>03 days</td>
                </tr>
                <tr>
                  <th>When packeting</th>
                  <td>without touching end</td>
                </tr>
                <tr>
                  <th>Each box Contains </th>
                  <td>60pcs</td>
                </tr>
                
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default Detail;
