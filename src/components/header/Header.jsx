import React from "react";

const Header = () => {
  return (
    <header className="navbar">
      <div className="navbar__brand">
        <h2 className="navbar__logo_title">Logo</h2>
      </div>
      <ul className="navbar__items">
        <li className="navbar__list">About</li>
        <li className="navbar__list">Contact</li>
      </ul>
    </header>
  );
};

export default Header;
