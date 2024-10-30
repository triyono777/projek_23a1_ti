// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Product from './components/Product';
import Cart from './components/Cart';
import './styles.css';

const App = () => {
  const [cart, setCart] = useState([]);

  const products = [
    { name: 'Product 1', price: 10 },
    { name: 'Product 2', price: 20 },
    { name: 'Product 3', price: 30 },
  ];

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (productToRemove) => {
    setCart(cart.filter((item) => item !== productToRemove));
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <div className="products">
              {products.map((product, index) => (
                <Product
                  key={index}
                  product={product}
                  addToCart={addToCart}
                />
              ))}
            </div>
          }
        />
        <Route
          path="/cart"
          element={
            <Cart cartItems={cart} removeFromCart={removeFromCart} />
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
