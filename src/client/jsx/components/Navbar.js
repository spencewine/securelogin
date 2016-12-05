import React from 'react';
import { Link } from 'react-router';

const Navbar = () => (
  <nav id="main-navbar" className="navbar navbar-default navbar-static-top">
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about">About</Link></li>
    </ul>
  </nav>
);

export default Navbar;
