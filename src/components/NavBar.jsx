import React from 'react';
import './Navbar.css';
import Cart from './Cart'; 
import cartIcon from '../assets/cart-icon.png'; 

const Navbar = ({ cartItems }) => {
    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <a href="/">
                    <img src="./src/assets/logo.png" alt="Mi Logo" className="navbar-logo" />
                </a>
            </div>
            <ul className="navbar-links">
                <li><a href="/">Inicio</a></li>
                <li><a href="/earrings">Aretes</a></li>
                <li><a href="/necklaces">Collares</a></li>
                <li><a href="/rings">Anillos</a></li>
                <li><a href="/bracelets">Pulseras</a></li>
                <li>
                    <Cart cartItems={cartItems} icon={cartIcon} />
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
