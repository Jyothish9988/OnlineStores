import React from 'react';
import Link from 'next/link';
import Header from "@/pages/components/header";

const Home = () => {
  return (
    <div>
      <Header />
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <h1>Welcome to the Home Page</h1>
        <p>This is the main page of your app.</p>

        <div style={{ marginTop: '20px' }}>
          <Link href="/login">Go to Login</Link> {/* Correct: No <a> tag needed */}
          <br />
          <Link href="/register">Go to Register</Link> {/* Correct: No <a> tag needed */}
        </div>
      </div>
    </div>
  );
};

export default Home;