import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Header from '../components/header';
import '../styles/product_details.css';

const ProductDetails = () => {
  const router = useRouter();
  const { id } = router.query;
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (id) {
      const fetchProductDetails = async () => {
        try {
          const response = await fetch(`http://localhost:8000/accounts/products/${id}/`);
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }

          const data = await response.json();
          setProduct(data);
          setLoading(false);
        } catch (error) {
          setError('Failed to fetch product details.');
          setLoading(false);
        }
      };
      fetchProductDetails();
    }
  }, [id]);

  if (!id) {
    return <p>Product ID is missing. Please check the URL.</p>;
  }

  if (loading) {
    return <p>Loading product details...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (!product) {
    return <p>Product not found.</p>;
  }

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
                <h4>{product.name}</h4>
                <div className="star-rating">
                  <span>★★★★</span>★
                </div>
                <p>Price: <span id="price">₹ {product.price}</span></p>
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
                      <div className="button-container">
                        <button className="buy-now-btn">
                          <i className="fas fa-shopping-cart cart-icon"></i> Buy Now
                        </button>
                        <button className="add-to-cart-btn">
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
