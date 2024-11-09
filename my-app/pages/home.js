// pages/index.js (or Home.js)
import React from 'react';
import Header from './components/header';  // Adjust the path based on your folder structure

const Home = () => {
  return (
    <div>
      <Header />
      <div className="container mt-5">
        <h1>Welcome to the Home Page</h1>
        <p>This is the main page of your app.</p>
      </div>
    </div>
  );
};

export default Home;
