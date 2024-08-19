
import './App.css'
import React from 'react';
import Navbar from './components/NavBar';
import ProductList from './components/ProductList';

function App() {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (product) => {
        setCartItems([...cartItems, product]);
    };
    return (
        <div className="App">
            <Navbar />
            <header className="App-header">
                <ProductList addToCart={addToCart} /> 
            </header>
        </div>
    );
}

export default App;

