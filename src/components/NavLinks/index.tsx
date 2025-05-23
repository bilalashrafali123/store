import { Link } from "react-router-dom";
import "./index.scss";

const NavLinks = () => {
  return (
    <>
      <div className="hamburger">
        <h1>
          <i className="fa-solid fa-bars"></i>
        </h1>
      </div>
      <span className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/detail">Detail</Link>
        <Link to="/login">Login</Link>
        <Link to="/checkout">Checkout</Link>
        <Link to="/cart">
          <i className="fa-solid fa-bag-shopping"></i>
        </Link>


        <a href="#">
          <i className="fa-solid fa-magnifying-glass"></i>
        </a>
      </span>
    </>
  );
};

export default NavLinks;
