import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="header-title"> Math Magicians</h1>
      <ul className="navlinks">
        <li className="link"><Link to="/calculator" className="">Calculator</Link></li>
      </ul>
    </nav>
  );
}
