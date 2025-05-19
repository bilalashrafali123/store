import Banner from '../Banner';
import './index.scss';

const Cart = () => {
  return (
    <>
    <div>
         <Banner title='Order' />
    </div>
    <div className="checkout-wrapper">
      <div className="container">
        <p className="success-message">Thank you. Your order has been received.</p>

        <div className="info-section">
          <div className="info-box">
            <h4>Order Info</h4> 
            <p><strong>Order number</strong>:  60235</p>
            <p><strong>Date</strong>: Los Angeles</p>
            <p><strong>Total</strong>: USD 2210</p>
            <p><strong>Payment method</strong>: Check payments</p>
          </div>

          <div className="info-box">
            <h4>Billing Address</h4>
            <p><strong>Street</strong>: 56/8</p>
            <p><strong>City</strong>: Los Angeles</p>
            <p><strong>Country</strong>: United States</p>
            <p><strong>Postcode</strong>: 36952</p>
          </div>

          <div className="info-box">
            <h4>Shipping Address</h4>
            <p><strong>Street</strong>: 56/8</p>
            <p><strong>City</strong>: Los Angeles</p>
            <p><strong>Country</strong>: United States</p>
            <p><strong>Postcode</strong>: 36952</p>
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
