import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import styles from './styles/login.css';  // Reusing the same styles as in the Login page

const Register = () => {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const [error, setError] = useState(null);
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Call the Next.js API route for registration
      const response = await axios.post('/api/register', formData);

      if (response.status === 201) {
        router.push('/login');
      }
    } catch (err) {
      setError(err.response?.data || 'Registration failed.');
    }
  };

  return (
    <div className={styles.container}>
      <div className="row">
        {/* Left Blank Side */}
        <div className="col-lg-6"><img
            src="https://colorlib.com/wp/wp-content/uploads/sites/2/free-bootstrap-ecommerce-templates.png"
            alt="Girl in a jacket" width="465" height="100%"/></div>

        {/* Right Side Form */}
        <div className="col-lg-6 d-flex align-items-center justify-content-center">
          <div className="form-2-wrapper">
            <div className="logo text-center">
              <h2>Logo</h2>
            </div>
            <h2 className="text-center mb-4">Create Your Account</h2>

            <form onSubmit={handleSubmit}>
              {/* Name Input */}
              <div className="mb-3 form-box">
                <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    placeholder="Enter Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
              </div>
              {/* Email Input */}
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
              {/* Password Input */}
              <div className="mb-3 form-box">
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
              {/* Submit Button */}
              <button type="submit" className="btn btn-outline-secondary login-btn w-100 mb-3">
                Register
              </button>
              {error && <p>{error}</p>}
            </form>
            <p className="text-center register-test mt-3">
              Already have an account? <a href="/login" className="text-decoration-none">Login here</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
