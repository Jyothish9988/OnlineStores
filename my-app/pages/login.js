import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import styles from './styles/login.css';



const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState(null);
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/accounts/login/', formData, {
        withCredentials: true, // Ensure cookies are sent with the request
      });

      if (response.status === 200) {
        // Use router.push to redirect to the home page
        router.push('/home');  // This will trigger a full page load and resolve style issues
      }
    } catch (err) {
      setError(err.response?.data?.detail || 'Login failed. Please try again.');
    }
  };

  return (
      <div className={styles.container}>
        <div className="row">
          {/* Left Blank Side */}
          <div className="col-lg-6"></div>

          {/* Right Side Form */}
          <div className="col-lg-6 d-flex align-items-center justify-content-center">
            <div className="form-2-wrapper">
              <div className="logo text-center">
                <h2>Logo</h2>
              </div>
              <h2 className="text-center mb-4">Sign Into Your Account</h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-3 form-box">
                  <input
                      type="email"
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
                    <input
                        type="checkbox"
                        className="form-check-input"
                        id="rememberMe"
                    />
                    <label className="form-check-label" htmlFor="rememberMe">
                      Remember me
                    </label>
                    <a href="forget-3.html" className="text-decoration-none float-end">
                      Forget Password
                    </a>
                  </div>
                </div>
                <button type="submit" className="btn btn-outline-secondary login-btn w-100 mb-3">
                  Login
                </button>
                {error && <p>{error}</p>}
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
