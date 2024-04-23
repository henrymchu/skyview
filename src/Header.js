import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <h1>Skyview Personal Finance</h1>
      <div className="header-buttons">
        <button className="login-btn">Login</button>
        <button className="signup-btn">Sign Up</button>
      </div>
    </header>
  );
}

export default Header;