import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Header from './components/header'; // Adjusted path
import './styles/product_style.css'; // Adjusted path

const Home = () => {
  const [products, setProducts] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Fetch the products and login status
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('http://localhost:8000/accounts/products/');
      const data = await response.json();
      setProducts(data);
    };

    fetchProducts();

    const checkLoginStatus = () => {
      // Check if the token exists in localStorage
      setIsLoggedIn(!!localStorage.getItem('access_token'));  // assuming you store access_token
    };

    checkLoginStatus();

    // Listen for storage events (in case of multiple tabs or window updates)
    window.addEventListener('storage', checkLoginStatus);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('storage', checkLoginStatus);
    };
  }, []);

  const handleBuyNowClick = (productId) => {
    if (!isLoggedIn) {
      alert('Not logged in. Please log in to continue.');
      window.location.href = '/login'; // Redirect to login page
    } else {
      window.location.href = `/product/${productId}`;
    }
  };

  return (
    <div style={{ minHeight: '100vh' }}>
      <Header />
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <h1>Welcome to the Home Page</h1>

        <div className="products-container">
          {products.length > 0 ? (
            products.map((product) => (
              <div key={product.id} className="product-card">
                <div className="product-card__image">
                  <img src={product.image_url} alt={product.name} />
                </div>
                <div className="product-card__info">
                  <h2 className="product-card__title">{product.name}</h2>
                  <p className="product-card__description">{product.description}</p>
                  <div className="product-card__price-row">
                    <span className="product-card__price">${product.price}</span>
                    <button
                      className="product-card__btn"
                      onClick={() => handleBuyNowClick(product.id)}
                    >
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>Loading products...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
