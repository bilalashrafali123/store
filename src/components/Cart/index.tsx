import Banner from "../Banner";
import "./index.scss";

const Cart = () => {
  return (
    <>
      <div>
        <Banner title="Order" />
      </div>
      <div className="checkout-wrapper">
        <div className="container">
          <p className="success-message">
            Thank you. Your order has been received.
          </p>

          <div className="info-section">
            <table className="info-table">
              <thead>
                <tr>
                  <th>Order Info</th>
                  <th>Billing Address</th>
                  <th>Shipping Address</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <strong>Order number</strong>:6002
                  </td>
                  <td>
                    <strong>Street</strong>: 56/8
                  </td>
                  <td>
                    <strong>Street</strong>: 56/8
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Date</strong>: Los Angeles
                  </td>
                  <td>
                    <strong>City</strong>: Los Angeles
                  </td>
                  <td>
                    <strong>City</strong>: Los Angeles
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Total</strong>: USD 2210
                  </td>
                  <td>
                    <strong>Country</strong>: United States
                  </td>
                  <td>
                    <strong>Country</strong>: United States
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Payment method</strong>: Check payments
                  </td>
                  <td>
                    <strong>Postcode</strong>: 36952
                  </td>
                  <td>
                    <strong>Postcode</strong>: 36952
                  </td>
                </tr>
              </tbody>
            </table>
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
                  <td>
                    <strong>SUBTOTAL</strong>
                  </td>
                  <td></td>
                  <td>$2160.00</td>
                </tr>
                <tr>
                  <td>
                    <strong>SHIPPING</strong>
                  </td>
                  <td></td>
                  <td>Flat rate: $50.00</td>
                </tr>
                <tr>
                  <td>
                    <strong>TOTAL</strong>
                  </td>
                  <td></td>
                  <td>
                    <strong>$2210.00</strong>
                  </td>
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
