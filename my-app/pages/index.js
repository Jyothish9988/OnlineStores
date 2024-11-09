import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';  // Import useRouter from next/router
import Header from './components/header'; // Adjusted path
import './styles/product_style.css'; // Adjusted path for styling

const Home = () => {
  const [products, setProducts] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();  // Initialize router

  // Fetch the products and login status
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

    const checkLoginStatus = () => {
      setIsLoggedIn(!!localStorage.getItem('access_token'));  // assuming you store access_token
    };

    checkLoginStatus();

    window.addEventListener('storage', checkLoginStatus);

    return () => {
      window.removeEventListener('storage', checkLoginStatus);
    };
  }, []);

  // Handle "Product Details" button click
  const handleProductDetailsClick = (productId) => {
    if (!isLoggedIn) {
      alert('Not logged in. Please log in to continue.');
      router.push('/login');  // Use router.push for Next.js navigation to the login page
    } else {
      router.push(`/product/${productId}`);  // Use Next.js dynamic routing to navigate to the product details page
    }
  };

  return (
    <div style={{ minHeight: '100vh' }}>
      <Header />
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <h1>Welcome to the Home Page</h1>

        <div className="products-container">
          {/* If products are available, display them */}
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
                      onClick={() => handleProductDetailsClick(product.id)} // Change button action to Product Details
                    >
                      Product Details
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>Loading products...</p> // Show loading text if products are still being fetched
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
