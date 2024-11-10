import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Header from './components/header';
import './styles/address.css'
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

  // Fetch the existing address if available
  useEffect(() => {
    const fetchAddress = async () => {
      const token = localStorage.getItem('access_token');
      if (!token) {
        setError('Token missing. Please log in.');
        router.push('/login');
        return;
      }

      try {
        const response = await fetch('http://localhost:8000/accounts/view-address/', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          const errorText = await response.text();
          setError(`Failed to fetch address: ${response.status} ${errorText}`);
        } else {
          const data = await response.json();
          setAddress(data);
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
    const token = localStorage.getItem('access_token');
    if (!token) {
      setError('Token missing. Please log in.');
      router.push('/login');
      return;
    }

    const url = address.id ? `http://localhost:8000/accounts/update-address/${address.id}/` : 'http://localhost:8000/accounts/add-address/';
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

      if (response.ok) {
        setMessage('Address saved successfully.');
      } else {
        const errorData = await response.json();
        setError(`Failed to save address: ${errorData.detail || response.statusText}`);
      }
    } catch (error) {
      setError('An error occurred while saving the address');
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
      <Header/>
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


