import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Header from '../components/header';
import '../styles/product_details.css';

const ProductDetails = () => {
  const router = useRouter();
  const { id } = router.query; // Getting product ID from the URL
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (id) {
      const fetchProductDetails = async () => {
        try {
          const response = await fetch(`http://localhost:8000/accounts/products/${id}/`);

          // Check if the response is not OK (e.g., 404 or 500 error)
          if (!response.ok) {
            const text = await response.text(); // Get the response as text (might be HTML error page)
            console.error('Error Response:', text); // Log the error response for debugging
            throw new Error('Network response was not ok');
          }

          // Try to parse the JSON response
          const data = await response.json();
          setProduct(data); // Set product data to state
          setLoading(false); // Set loading state to false
        } catch (error) {
          setError('Failed to fetch product details.'); // Set error message in state
          setLoading(false); // Set loading state to false
          console.error('Fetch Error:', error); // Log the error for debugging
        }
      };

      fetchProductDetails(); // Fetch product details on component mount
    }
  }, [id]); // Re-run the effect whenever the ID changes

  // If product ID is missing in the URL
  if (!id) {
    return <p>Product ID is missing. Please check the URL.</p>;
  }

  // If data is still loading
  if (loading) {
    return <p>Loading product details...</p>;
  }

  // If an error occurred during the fetch
  if (error) {
    return <p>{error}</p>;
  }

  // If no product is found
  if (!product) {
    return <p>Product not found.</p>;
  }

  // Function to handle quantity input change
  const handleQuantityChange = (event) => {
    const value = Math.max(1, Number(event.target.value));
    setQuantity(value); // Set quantity state
  };

  // Functions to increase and decrease quantity
  const increaseQuantity = () => setQuantity((prev) => prev + 1);
  const decreaseQuantity = () => setQuantity((prev) => Math.max(1, prev - 1));

  // Function to handle adding product to cart
  const addToCart = async () => {
    const username = localStorage.getItem('username'); // Retrieve username from localStorage
    const token = localStorage.getItem('access_token'); // Retrieve token from localStorage

    console.log('Username:', username);
    console.log('Token:', token); // Log the token to ensure it's there

    // Check if username and token exist
    if (!username || !token) {
      alert('User is not logged in. Please log in to add items to the cart.');
      router.push('/login'); // Redirect to login if not logged in
      return;
    }

    try {
      const response = await fetch('http://localhost:8000/accounts/add-to-cart/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`, // Ensure the token is passed correctly
        },
        body: JSON.stringify({
          username: username,
          product_id: id,
          quantity: quantity,
        }),
      });

      // Handle the response
      if (!response.ok) {
        const errorText = await response.text();
        console.error('Error Response:', errorText);
        alert(`Error: ${errorText}`);
        throw new Error('Failed to add product to cart');
      }

      const data = await response.json();
      if (data.error) {
        throw new Error(data.error);
      }

      alert('Product added to cart successfully!');
    } catch (error) {
      console.error('Add to Cart Error:', error);
      alert(`Error adding product to cart: ${error.message}`);
    }
  };


  const buyNow = async () => {
  const username = localStorage.getItem('username'); // Corrected to match 'username'
  const token = localStorage.getItem('access_token'); // Retrieve token from localStorage

  console.log('Username:', username);
  console.log('Token:', token);

  if (!username || !token) {
    alert('User is not logged in. Please log in to proceed.');
    router.push('/login');
    return;
  }

  try {
    const response = await fetch('http://localhost:8000/accounts/order-now/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify({
        username: username, // Ensure consistency here
        product_id: id,
        quantity: quantity,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Error Response:', errorText);
      alert(`Error: ${errorText}`);
      throw new Error('Failed to order');
    }

    const data = await response.json();
    if (data.error) {
      throw new Error(data.error);
    }

    alert('Product ordered successfully!');
  } catch (error) {
    console.error('Order Error:', error);
    alert(`Error ordering product: ${error.message}`);
  }
};

  return (
    <div style={{ minHeight: '100vh' }}>
      <Header />
      <section id="product-info">
        <div className="card">
          <div className="card-body">
            <div className="item-image-parent">
              <div className="item-list-vertical">
                {product.image_thumbnails && product.image_thumbnails.map((thumb, index) => (
                  <div className="thumb-box" key={index}>
                    <img src={thumb} alt={`thumbnail ${index + 1}`} />
                  </div>
                ))}
              </div>
              <div className="item-image-main">
                <img
                  src={product.image_url || '/images/placeholder.png'}
                  alt={product.name}
                  onError={(e) => e.target.src = '/images/placeholder.png'}
                />
              </div>
            </div>

            <div className="item-info-parent">
              <div className="main-info">
                <h3>{product.name}</h3>
                <div className="star-rating">
                  <span>★★★★</span>★
                </div>
                <p>Price: <span id="price">₹ {product.price}</span></p>
                <h5>Description</h5>
                <p>{product.description}</p>
              </div>

              <div className="select-items">
                <div className="change-color">
                  <div className="thumb-box">
                    <img src={product.image_url || '/images/placeholder.png'} alt="Color" />
                  </div>
                </div>

                <div className="description">
                  <ul>
                    <li>
                      <div className="quantity-container">
                        <button onClick={decreaseQuantity}>-</button>
                        <input
                          type="number"
                          value={quantity}
                          onChange={handleQuantityChange}
                          min="1"
                        />
                        <button onClick={increaseQuantity}>+</button>
                      </div>

                      <div className="button-container">
                        <button className="buy-now-btn" onClick={buyNow}>
                          <i className="fas fa-shopping-cart cart-icon" ></i> Buy Now
                        </button>
                        <button className="add-to-cart-btn" onClick={addToCart}>
                          <i className="fas fa-cart-plus cart-icon"></i> Add to Cart
                        </button>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetails;
