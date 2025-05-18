import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Footer from "./components/Footer";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Detail from "./components/Detail";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Order from "./components/Order";
import Shop from "./components/Shop";
import Login from "./components/Login";
import Pages from "./components/Pages";


function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/order" element={<Order />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/login" element={<Login />} />
        <Route path="/pages" element={<Pages />} />
     



      </Routes>
      <Footer />
    </>
  );
}

export default App;
