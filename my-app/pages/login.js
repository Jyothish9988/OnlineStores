import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import styles from './styles/login.css';  // Importing styles

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('access_token');
    if (token) {
      router.push('/');
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8000/accounts/login/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
        credentials: 'include',
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Login failed. Please try again.');
      }

      const data = await response.json();
      console.log(data);  // Check the response structure

      if (response.status === 200) {
        // Ensure 'username' is present in the response
        localStorage.setItem('access_token', data.access_token);
        localStorage.setItem('refresh_token', data.refresh_token);
        localStorage.setItem('username', data.username);  // Store username here
        router.push('/');  // Redirect after login
      }
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className={styles.container}>
      <div className="row">
        <div className="col-lg-6"></div>
        <div className="col-lg-6 d-flex align-items-center justify-content-center">
          <div className="form-2-wrapper">
            <div className="logo text-center">
              <h2>Logo</h2>
            </div>
            <h2 className="text-center mb-4">Sign Into Your Account</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-3 form-box">
                <input
                  className="form-control"
                  id="email"
                  name="email"
                  placeholder="Enter Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                  placeholder="Enter Your Password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <div className="form-check">
                  <input type="checkbox" className="form-check-input" id="rememberMe" />
                  <label className="form-check-label" htmlFor="rememberMe">Remember me</label>
                </div>
              </div>
              <button type="submit" className="btn btn-outline-secondary login-btn w-100 mb-3">
                Login
              </button>
              {error && <p className="text-danger">{error}</p>}
            </form>
            <p className="text-center register-test mt-3">
              Don't have an account? <a href="/register" className="text-decoration-none">Register here</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
