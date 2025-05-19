import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Footer from "./components/Footer";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Detail from "./components/Detail";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Shop from "./components/Shop";
import Login from "./components/Login";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/login" element={<Login />} />
        <Route path="/checkout" element={<Checkout />} />

     </Routes>
      <Footer />
    </>
  );
}

export default App
