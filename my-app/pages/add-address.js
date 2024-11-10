import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Header from './components/header'; // Assuming Header is a separate component
import './styles/address.css'; // Make sure you have proper styling for the form

const AddAddressPage = () => {
  const [address, setAddress] = useState({
    line_1: '',
    line_2: '',
    city: '',
    state: '',
    postalCode: '',
    country: '',
    name: '',
    phoneNo: ''
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const router = useRouter();

  // Function to check if the token is expired
  const isTokenExpired = (token) => {
    const expiry = JSON.parse(atob(token.split('.')[1])).exp;
    return (expiry * 1000) < Date.now(); // Check if the token has expired
  };

  // Function to handle token validation
  const validateToken = () => {
    const token = localStorage.getItem('access_token');
    if (!token) {
      setError('Token missing. Please log in.');
      router.push('/login');
      return false;
    }

    // Check if the token is expired
    if (isTokenExpired(token)) {
      setError('Token expired. Please log in again.');
      localStorage.removeItem('access_token'); // Clear expired token
      router.push('/login'); // Redirect to login
      return false;
    }

    return true;
  };

  // Fetch the existing address if available
  useEffect(() => {
    const fetchAddress = async () => {
      if (!validateToken()) return; // Exit if token is invalid or expired

      const token = localStorage.getItem('access_token');
      try {
        const response = await fetch('http://localhost:8000/accounts/view-address/', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          const errorText = await response.text();
          if (response.status === 404) {
            // If no address is found (404), allow the user to add a new address
            setAddress({
              line_1: '',
              line_2: '',
              city: '',
              state: '',
              postalCode: '',
              country: '',
              name: '',
              phoneNo: ''
            });
          } else {
            setError(`Failed to fetch address: ${response.status} ${errorText}`);
          }
        } else {
          const data = await response.json();
          setAddress(data); // Prepopulate address if found
        }
      } catch (error) {
        setError(`An error occurred while fetching address: ${error.message}`);
      } finally {
        setLoading(false);
      }
    };

    fetchAddress();
  }, [router]);

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setAddress((prevAddress) => ({
      ...prevAddress,
      [name]: value,
    }));
  };

  // Handle form submission to add or update address
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateToken()) return; // Exit if token is invalid or expired

    const token = localStorage.getItem('access_token');
    const url = address.id
      ? `http://localhost:8000/accounts/update-address/${address.id}/`
      : 'http://localhost:8000/accounts/add-address/';
    const method = address.id ? 'PUT' : 'POST';

    try {
      const response = await fetch(url, {
        method,
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(address),
      });

      const result = await response.json(); // Ensure the response is parsed

      if (response.ok) {
        setMessage('Address saved successfully.');
        if (!address.id) {
          // Redirect user to another page after adding the address (optional)
          router.push('/profile'); // Adjust this to your desired page
        }
      } else {
        setError(`Failed to save address: ${result.detail || result.error || response.statusText}`);
      }
    } catch (error) {
      setError(`An error occurred while saving the address: ${error.message}`);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div className="error-message">{error}</div>;
  }

  return (
    <div>
      <Header />
      <div className="add-address-container">
        <div className="card">
          <h1>{address.id ? 'Update Address' : 'Add New Address'}</h1>
          {message && <div className="success-message">{message}</div>}
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                name="name"
                value={address.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Phone Number</label>
              <input
                type="text"
                name="phoneNo"
                value={address.phone}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Line 1</label>
              <input
                type="text"
                name="line_1"
                value={address.line_1}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Line 2</label>
              <input
                type="text"
                name="line_2"
                value={address.line_2}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>City</label>
              <input
                type="text"
                name="city"
                value={address.city}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>State</label>
              <input
                type="text"
                name="state"
                value={address.state}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Postal Code</label>
              <input
                type="text"
                name="postalCode"
                value={address.postal_code}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Country</label>
              <input
                type="text"
                name="country"
                value={address.country}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit">
              {address.id ? 'Update Address' : 'Add Address'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddAddressPage;
