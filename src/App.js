import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Product from "./components/products/Product";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/home/Home";
import About from "./components/about/About";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home/>} />
          <Route path="/products" element={<Product/>} />
          <Route path="/about" element={<About/>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
