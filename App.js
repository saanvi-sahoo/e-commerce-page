// Import necessary modules

import React from "react";
import ReactDOM from "react-dom";
import App from "./App"; // Ensure the path to App.js is correct

ReactDOM.render(<App />, document.getElementById("root"));

// Header Component
const Header = () => (
  <header>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/products">Products</Link>
      <Link to="/cart">Cart</Link>
    </nav>
  </header>
);

// Landing Page Component
const LandingPage = () => (
  <div>
    <h1>Welcome to Our Store</h1>
    <p>Discover amazing products at unbeatable prices!</p>
    <Link to="/products">Shop Now</Link>
  </div>
);

// Product Listing Page Component
const ProductListingPage = ({ products, addToCart }) => (
  <div>
    <h1>Products</h1>
    <ul>
      {products.map((product) => (
        <li key={product.id}>
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <p>Price: ${product.price}</p>
          <button onClick={() => addToCart(product)}>Add to Cart</button>
        </li>
      ))}
    </ul>
  </div>
);

// Shopping Cart Page Component
const ShoppingCartPage = ({ cart, removeFromCart }) => (
  <div>
    <h1>Your Cart</h1>
    {cart.length === 0 ? (
      <p>Your cart is empty.</p>
    ) : (
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            <h2>{item.name}</h2>
            <p>Price: ${item.price}</p>
            <button onClick={() => removeFromCart(item)}>Remove</button>
          </li>
        ))}
      </ul>
    )}
  </div>
);

// Main App Component
const App = () => {
  const [products] = useState([
    { id: 1, name: "Product 1", description: "Description for product 1", price: 10 },
    { id: 2, name: "Product 2", description: "Description for product 2", price: 20 },
    { id: 3, name: "Product 3", description: "Description for product 3", price: 30 },
  ]);

  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (product) => {
    setCart(cart.filter((item) => item.id !== product.id));
  };

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route
          path="/products"
          element={<ProductListingPage products={products} addToCart={addToCart} />}
        />
        <Route
          path="/cart"
          element={<ShoppingCartPage cart={cart} removeFromCart={removeFromCart} />}
        />
      </Routes>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
