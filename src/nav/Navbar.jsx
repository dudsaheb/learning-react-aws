import React from 'react';
import { useAuth } from '../auth/AuthContext';
import { Link, useLocation } from "react-router-dom";
import '../App.css';

function Navbar() {
  const { isLoggedIn, logout } = useAuth();
  const location = useLocation();

  // Pages where navbar should not be visible
  const hideOn = ["/", "/login", "/register"];

  if (hideOn.includes(location.pathname)) {
    return null;
  }

  return (
    <nav className="navbar">
      <div className="navbar-brand">Petowners</div>

      {isLoggedIn && (
        <div className="navbar-links">
          <Link to="/posts" className="navbar-item">Home</Link>
          <Link to="/account" className="navbar-item">Dogs Account</Link>
          <Link to="/login" onClick={logout} className="navbar-item">Logout</Link>
        </div>
      )}

      {!isLoggedIn && (
        <div className="navbar-links">
          <Link to="/login" className="navbar-item">Sign in</Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
