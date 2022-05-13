import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <header className="navigation">
      <h2>Book store</h2>
      <nav className="nav-links">
        <Link to="/">Book</Link>
        <Link to="/category">Category</Link>
      </nav>
    </header>
  );
}
export default NavBar;
