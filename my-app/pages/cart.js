import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Header from './components/header';
import './styles/cart.css';

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const router = useRouter();

  // Fetch the cart items and check login status
  useEffect(() => {
    const fetchCartItems = async () => {
      const token = localStorage.getItem('access_token');
      if (!token) {
        setError('Token missing. Please log in.');
        router.push('/login');
        return;
      }

      try {
        const response = await fetch('http://localhost:8000/accounts/view-cart/', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          const errorData = await response.json();
          setError(`Failed to fetch cart items: ${errorData.detail || response.statusText}`);
        } else {
          const data = await response.json();
          setCartItems(data);
        }
      } catch (error) {
        setError('An error occurred while fetching the cart');
      } finally {
        setLoading(false);
      }
    };

    fetchCartItems();
  }, [router]);

  const handleRemove = async (itemId) => {
    const token = localStorage.getItem('access_token');
    if (!token) {
      setError('Token missing. Please log in.');
      router.push('/login');
      return;
    }

    try {
      // Send request to the backend to remove the item
      const response = await fetch(`http://localhost:8000/accounts/remove-from-cart/${itemId}/`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      if (response.ok) {
        // If successful, remove the item from the state
        setCartItems((prevItems) => prevItems.filter(item => item.id !== itemId));
      } else {
        const errorData = await response.json();
        setError(`Failed to remove item: ${errorData.detail || response.statusText}`);
      }
    } catch (error) {
      setError('An error occurred while removing the item');
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div style={{ minHeight: '100vh' }}>
      <Header />
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <h1>Your Cart</h1>
        {cartItems.length === 0 ? (
          <p>No items in your cart.</p>
        ) : (
          <div className="shopping-cart">
            <div className="column-labels">
              <label className="product-image">Image</label>
              <label className="product-details">Product</label>
              <label className="product-price">Price</label>
              <label className="product-quantity">Quantity</label>
              <label className="product-removal">Remove</label>
              <label className="product-line-price">Total</label>
            </div>

            {cartItems.map((item) => (
              <div key={item.id} className="product">
                <div className="product-image">
                  <img src={item.product.image_url} alt={item.product.name} />
                </div>
                <div className="product-details">
                  <div className="product-title">{item.product.name}</div>
                  <p className="product-description">{item.product.description}</p>
                </div>
                <div className="product-price">${item.product.price}</div>
                <div className="product-quantity">
                  <input type="number" value={item.quantity} min="1" />
                </div>
                <div className="product-removal">
                  <button className="remove-product" onClick={() => handleRemove(item.id)}>
                    Remove
                  </button>
                </div>
                <div className="product-line-price">${(item.product.price * item.quantity).toFixed(2)}</div>
              </div>
            ))}

            <div className="totals">
              <div className="totals-item">
                <label>Subtotal</label>
                <div className="totals-value" id="cart-subtotal">
                  ${(cartItems.reduce((total, item) => total + item.product.price * item.quantity, 0)).toFixed(2)}
                </div>
              </div>
              <div className="totals-item">
                <label>Tax (5%)</label>
                <div className="totals-value" id="cart-tax">
                  {(cartItems.reduce((total, item) => total + item.product.price * item.quantity, 0) * 0.05).toFixed(2)}
                </div>
              </div>
              <div className="totals-item">
                <label>Shipping</label>
                <div className="totals-value" id="cart-shipping">15.00</div>
              </div>
              <div className="totals-item totals-item-total">
                <label>Grand Total</label>
                <div className="totals-value" id="cart-total">
                  {(cartItems.reduce((total, item) => total + item.product.price * item.quantity, 0) + 15).toFixed(2)}
                </div>
              </div>
            </div>

            <button className="checkout">Checkout</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;
