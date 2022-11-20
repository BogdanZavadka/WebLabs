import './App.css'
import Header from './components/Header/header.jsx'
import Home from './components/Home/home.jsx'
import Footer from './components/Footer/footer.jsx'
import Catalog from './components/Catalog/catalog.jsx'
import Item from './components/Item/item.jsx'
import React from "react"
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Cart from "./components/Cart/cart";
import Checkout from "./components/Checkout/checkout";
import Success from "./components/Checkout/success";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/catalog' element={<Catalog />} />
          <Route path='/item' element={<Item />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='/success' element={<Success />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
