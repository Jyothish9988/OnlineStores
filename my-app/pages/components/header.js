'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const checkLoginStatus = () => {
      const token = localStorage.getItem('access_token');
      console.log("Token found:", token);
      setIsLoggedIn(!!token);
    };

    checkLoginStatus();

    const bootstrapCSS = document.createElement('link');
    bootstrapCSS.rel = 'stylesheet';
    bootstrapCSS.href = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css';
    bootstrapCSS.integrity = 'sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH';
    bootstrapCSS.crossOrigin = 'anonymous';
    document.head.appendChild(bootstrapCSS);

    const bootstrapJS = document.createElement('script');
    bootstrapJS.src = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js';
    bootstrapJS.integrity = 'sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz';
    bootstrapJS.crossOrigin = 'anonymous';
    document.body.appendChild(bootstrapJS);

    return () => {
      document.head.removeChild(bootstrapCSS);
      document.body.removeChild(bootstrapJS);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    setIsLoggedIn(false);
    window.location.href = '/';
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light w-100">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">MyApp</a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {/* Navigation links for logged-in and non-logged-in users */}
            {!isLoggedIn ? (
              <>
                <li className="nav-item">
                  <Link className="nav-link" href="/login" style={{color: 'black'}}>Login</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="/register" style={{color: 'black'}}>Register</Link>
                </li>
              </>
            ) : (
                <>
                  <li className="nav-item">
                    <Link className="nav-link" href="/profile" style={{color: 'black'}}>Profile</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" href="/add-address" style={{color: 'black'}}>Address</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" href="/cart" style={{color: 'black'}}>Cart</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" href="/orders" style={{color: 'black'}}>Orders</Link>
                  </li>
                  <li className="nav-item">
                    <button className="nav-link btn btn-link" onClick={handleLogout} style={{color: 'black'}}>Logout
                    </button>
                  </li>


                </>
            )}
          </ul>

          {/* Search form */}
          <form className="d-flex">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Header;
