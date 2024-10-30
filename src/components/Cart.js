// src/components/Cart.js
import React from 'react';

const Cart = ({ cartItems, removeFromCart }) => {
    return (
        <div className="cart">
            <h2>Your Cart</h2>
            {cartItems.length === 0 ? (
                <p>Your cart is empty</p>
            ) : (
                cartItems.map((item, index) => (
                    <div key={index}>
                        <h3>{item.name}</h3>
                        <p>Price: ${item.price}</p>
                        <button onClick={() => removeFromCart(item)}>Remove</button>
                    </div>
                ))
            )}
        </div>
    );
};

export default Cart;
