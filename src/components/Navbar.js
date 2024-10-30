// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <Link to="/">Products</Link>
            <Link to="/cart">Cart</Link>
        </nav>
    );
};

export default Navbar;
