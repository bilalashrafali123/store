import NavLinks from "../NavLinks";
import NavLogo from "../NavLogo";
import "./index.scss";

const NavBar = () => {
  return (
    <div className="nav-container">
      <div className="container">
        <nav className="nav">
          <NavLogo />
          <NavLinks />
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
