import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductList from "./component/pages/ProductList";
import ProductDetails from "./component/pages/ProductDetails";
import Cart from "./component/pages/Cart";
import Header from "./component/front/Header";

function App() {
  return (
    <>
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/productdetails/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart/>} />
          <Route />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
