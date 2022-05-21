import React from 'react';
import { Link } from 'react-router-dom';
import './scss/Header.scss';

function Header() {
  return (
    <nav>
      <Link className="title_link" to="/">
        Bookstore CMS
      </Link>
      <Link className="link" to="/">
        BOOKS
      </Link>
      <Link className="link" to="/categories">
        CATEGORIES
      </Link>
    </nav>
  );
}

export default Header;
