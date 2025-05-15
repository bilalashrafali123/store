import "./App.scss";

function App() {
  return (
    <>
      <div className="nav-container">
        <nav className="nav">
          <div className="nav-logo">
            <h2>KARMA</h2>
          </div>

          
          <div className="hamburger"><h1><i className="fa-solid fa-bars"></i></h1></div>

          {/* Nav links */}
          <span className="nav-links">
            <a href="#">Home</a>
            <a href="#">Shop</a>
            <a href="#">Blog</a>
            <a href="#">Pages</a>
            <a href="#">Contact</a>
            <a href="#"><i className="fa-solid fa-bag-shopping"></i></a>
            <a href="#"><i className="fa-solid fa-magnifying-glass"></i></a>
          </span>
        </nav>
      </div>

    
      <div className="store-background">
        <h1>Home</h1>
      </div>
    </>
  );
}

export default App;
