import React from 'react';

const products = [
    { id: 1, name: "Collar Iniciales",price: 19000 },
    { id: 2, name: "Pulsera 3 circulos", price: 66000},
    { id: 3, name: "Aretes circulos multifunción", price: 50000},
    { id: 4, name: "Earcuf Circulos", price: 36000 },
    { id: 5, name: "Aretes Murralla",  price: 50000},
    { id: 6, name: "Topos Flor con Murralla", price: 31000},
    { id: 7, name: "Topos Monstera con Murralla", price: 31000},
    { id: 8, name: "Topos Circulos textura con Murralla", price: 31000 },
    { id: 9, name: "Aretes Monstera Fiigrana",price: 100000 },
    { id: 10, name: "Aretes Filigrana loros con murralla", price: 70000 }
];

const ProductList = ({ addToCart }) => {
    return (
        <div>
            <h2>Productos</h2>
            <ul>
                {products.map(product => (
                    <li key={product.id}>
                        {product.name} - ${product.price}
                        <button onClick={() => addToCart(product)}>Agregar al carrito</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProductList;
