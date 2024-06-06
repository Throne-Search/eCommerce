import "./App.css";
import Navbar from "./components/menubar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from "./pages/Shop";
import ShopCategory from './pages/ShopCategory';
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import LoginSignup from "./pages/LoginSignup";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/Men" element={<ShopCategory category="Men" />} />
          <Route path="/Women" element={<ShopCategory category="women" />} />
          <Route path="/Kids" element={<ShopCategory category="Kids" />} />
          <Route path="/product" element={<Product />} />
          <Route path=":productid" element={<product />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="Login" element={<LoginSignup />} />
        </Routes>
      </BrowserRouter>
          </div>
  );
}

export default App;
