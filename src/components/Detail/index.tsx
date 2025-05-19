import Banner from "../Banner";
import "./index.scss";

const Detail = () => {
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
                <label>Quantity: {""}</label>
                <input type="number"  value={1}/>
              </div>
              <button>Add to Cart</button>
            </div>
          </div>
        </div>
        <div className="product-tabs">
          <button className="active">Description</button>
          <button>Specification</button>
        </div>
        <div className="product-info">
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply
            dummy text of the printing and typesetting industry. Lorem Ipsum has
            been the industry's standard dummy text ever since the 1500s, when
            an unknown printer took a galley of type and scrambled it to make a
            type specimen book. It has survived not only five centuries, but
            also the leap into electronic typesetting, remaining essentially
            unchanged. It was popularised in the 1960s with the release of
            Letraset sheets containing Lorem Ipsum passages, and more recently
            with desktop publishing software like Aldus PageMaker including
            versions of Lorem Ipsum.
          </p>
        </div>
      </div>
    </div>
  );
};
export default Detail;
