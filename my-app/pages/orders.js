import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import './styles/order.css';
import Header from './components/header';

const OrdersPage = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const router = useRouter();

  useEffect(() => {
    const fetchOrders = async () => {
      const token = localStorage.getItem('access_token');

      // If no token, logout user
      if (!token) {
        setError('No token found. Please log in.');
        setLoading(false);
        localStorage.removeItem('access_token');  // Remove the token if it's not found
        router.push('/login');  // Redirect to login page
        return;
      }

      try {
        const response = await fetch('http://localhost:8000/accounts/orders/', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        });

        const data = await response.json();

        if (response.ok) {
          setOrders(data);
        } else {
          setError(data.error || 'Failed to fetch orders');
        }
      } catch (err) {
        setError('An error occurred while fetching orders');
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, [router]);

  const handleCancelOrder = (orderId) => {
    // Call the API to cancel the order
    alert(`Canceling order ${orderId}`);
    // Implement the cancel order functionality here
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <Header />
      <div className="orders-container">
        <center><h2>Your Orders</h2></center>
        {orders.length === 0 ? (
          <p>You have no orders yet.</p>
        ) : (
          <table className="orders-table">
            <thead>
              <tr>
                <th>Product Image</th>
                <th>Product Name</th>
                <th>Description</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Order Date</th>
                <th>Status</th>
                <th>Address</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.orderid}>
                  <td>
                    <img src={order.image_url} alt={order.product_name} className="product-image" />
                  </td>
                  <td>{order.product_name}</td>
                  <td>{order.product_description}</td>
                  <td>{order.quantity}</td>
                  <td>${order.price}</td>
                  <td>{new Date(order.added_at).toLocaleString()}</td>
                  <td>{order.status}</td>
                  <td>{order.user_address}</td>
                  <td>
                    <button
                      className="cancel-order-btn"
                      onClick={() => handleCancelOrder(order.orderid)}
                    >
                      Cancel Order
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default OrdersPage;
