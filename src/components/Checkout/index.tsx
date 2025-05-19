import Banner from "../Banner";
import "./index.scss";

const Cart = () => {
  return (
    <>
      <div>
        <Banner title="Checkout" />
      </div>
      <div className="checkout-wrapper">
        <div className="container">
          <p className="success-message">
            Thank you. Your order has been received.
          </p>

          <div className="info-section">
            <div className="info-table-wrapper">
              <h4>Order Info</h4>
              <table className="info-table">
                <tbody>
                  <tr>
                    <td><strong>Order number</strong>: 6002</td>
                  </tr>
                  <tr>
                    <td><strong>Date</strong>: Los Angeles</td>
                  </tr>
                  <tr>
                    <td><strong>Total</strong>: USD 2210</td>
                  </tr>
                  <tr>
                    <td><strong>Payment method</strong>: Check payments</td>
                  </tr>
                </tbody>
              </table>
            </div>

        
            <div className="info-table-wrapper">
              <h4>Billing Address</h4>
              <table className="info-table">
                <tbody>
                  <tr>
                    <td><strong>Street</strong>: 56/8</td>
                  </tr>
                  <tr>
                    <td><strong>City</strong>: Los Angeles</td>
                  </tr>
                  <tr>
                    <td><strong>Country</strong>: United States</td>
                  </tr>
                  <tr>
                    <td><strong>Postcode</strong>: 36952</td>
                  </tr>
                </tbody>
              </table>
            </div>

           
            <div className="info-table-wrapper">
              <h4>Shipping Address</h4>
              <table className="info-table">
                <tbody>
                  <tr>
                    <td><strong>Street</strong>: 56/8</td>
                  </tr>
                  <tr>
                    <td><strong>City</strong>: Los Angeles</td>
                  </tr>
                  <tr>
                    <td><strong>Country</strong>: United States</td>
                  </tr>
                  <tr>
                    <td><strong>Postcode</strong>: 36952</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

        
          <div className="order-details">
            <h4>Order Details</h4>
            <table>
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Quantity</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Pixelstore fresh Blackberry</td>
                  <td>x 02</td>
                  <td>$720.00</td>
                </tr>
                <tr>
                  <td>Pixelstore fresh Blackberry</td>
                  <td>x 02</td>
                  <td>$720.00</td>
                </tr>
                <tr>
                  <td>Pixelstore fresh Blackberry</td>
                  <td>x 02</td>
                  <td>$720.00</td>
                </tr>
                <tr>
                  <td><strong>SUBTOTAL</strong></td>
                  <td></td>
                  <td>$2160.00</td>
                </tr>
                <tr>
                  <td><strong>SHIPPING</strong></td>
                  <td></td>
                  <td>Flat rate: $50.00</td>
                </tr>
                <tr>
                  <td><strong>TOTAL</strong></td>
                  <td></td>
                  <td><strong>$2210.00</strong></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
