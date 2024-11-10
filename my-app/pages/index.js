import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';  
import Header from './components/header';
import './styles/product_style.css';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  // Fetch the products
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:8000/accounts/products/');
        const data = await response.json();
        setProducts(data); // Store fetched products
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();

    // Check login status
    const checkLoginStatus = () => {
      setIsLoggedIn(!!localStorage.getItem('access_token'));
    };

    checkLoginStatus();

    window.addEventListener('storage', checkLoginStatus);

    return () => {
      window.removeEventListener('storage', checkLoginStatus);
    };
  }, []);


  const handleProductAction = (productId) => {
    if (!isLoggedIn) {
      alert('Not logged in. Please log in to continue.');
      router.push('/login');
    } else {
      router.push(`/product/${productId}`);
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <div style={{ flexGrow: 1, textAlign: 'center', marginTop: '50px' }}>
        <h1>Products</h1>

        <div className="products-container">
          {}
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
                      onClick={() => handleProductAction(product.id)}
                    >
                      {isLoggedIn ? 'Product Details' : 'Login to View'}
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
