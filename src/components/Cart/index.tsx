import Banner from "../Banner";
import "./index.scss";

const Cart = () => {
  return (
    <>
      <div>
        <Banner title="Add to cart" />
      </div>
      <div className="cart-wrapper">
        <div className="container">
          <table className="cart-table">
            <thead>
              <tr>
                <th className="product-table-heading">Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <div className="product">
                    <img src="/src/checkout.png" alt="Product" />
                    <p>Minimalistic shop for multipurpose use</p>
                  </div>
                </td>
                <td>$360.00</td>
                <td>
                  <input type="number" />
                </td>
                <td>$720.00</td>
              </tr>
              <tr>
                <td>
                  <div className="product">
                    <img src="/src/checkout.png" alt="Product" />
                    <p>Minimalistic shop for multipurpose use</p>
                  </div>
                </td>
                <td>$360.00</td>
                <td>
                  <input type="number" />
                </td>
                <td>$720.00</td>
              </tr>
              <tr>
                <td>
                  <div className="product">
                    <img src="/src/checkout.png" alt="Product" />
                    <p>Minimalistic shop for multipurpose use</p>
                  </div>
                </td>
                <td>$360.00</td>
                <td>
                  <input type="number" />
                </td>
                <td>$720.00</td>
              </tr>
            </tbody>
          </table>

          <div className="cart-actions">
            <button className="update">Update Cart</button>
            <div className="coupon">
              <input type="text" placeholder="Coupon Code" />
              <button className="apply">Apply</button>
              <button className="close">Close Coupon</button>
            </div>
          </div>

          <div className="cart-summary">
            <div className="summary-details">
              <div className="summary-row">
                <span className="subtotal">Subtotal</span>
                <span>$2160.00</span>
              </div>
              <div className="summary-row shipping-row">
                <div className="end">
                  <div className="shipping-options">
                    <label>
                    Flat Rate: $5.00  <input type="radio" name="shipping" /> 
                    </label>
                    <label>
                    Free Shipping <input type="radio" name="shipping" /> 
                    </label>
                    <label>
                    Flat Rate: $10.00 <input type="radio" name="shipping" /> 
                    </label>
                    <label>
                    Local Delivery: $2.00 <input type="radio" name="shipping" /> 
                      
                    </label>
                  </div>
                </div>
              </div>
              <div className="summary-selects">
                <select>
                  <option>Bangladesh</option>
                </select>
                <select>
                  <option>Select a State</option>
                </select>
                <input type="text" placeholder="Postcode/Zipcode" />
                <button>Update Details</button>
              </div>
            </div>
          </div>

          <div className="checkout-buttons">
            <button className="continue">Continue Shopping</button>
            <button className="checkout">Proceed to Checkout</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
