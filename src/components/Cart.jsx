import React from 'react';
import './Cart.css';

const Cart = ({ cartItems, icon }) => {
    const itemCount = cartItems.length;

    return (
        <div className="cart-container">
            <a href="/cart" className="cart-icon">
                <img src={icon} alt="Carrito" className="cart-img" />
                {itemCount > 0 && <span className="item-count">{itemCount}</span>}
            </a>
            <div className="cart-dropdown">
                <h4>Carrito de Compras</h4>
                <ul>
                    {cartItems.length > 0 ? (
                        cartItems.map((item, index) => (
                            <li key={index}>
                                {item.name} - ${item.price}
                            </li>
                        ))
                    ) : (
                        <li>El carrito está vacío</li>
                    )}
                </ul>
            </div>
        </div>
    );
};

export default Cart;
