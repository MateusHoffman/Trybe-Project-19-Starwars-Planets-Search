import React from 'react';
import logo from '../image/star-wars-logo.png';
import '../style/Header.css';

function Header() {
  return (
    <header className="header-container">
      <div className="header-title-container">
        <img src={ logo } alt="star wars logo" className="star-wars-logo" />
        <h3>Planet Search</h3>
      </div>
    </header>
  );
}

export default Header;
