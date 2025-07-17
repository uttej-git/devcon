import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={{
      display: 'flex',
      justifyContent: 'flex-end',
      gap: '1.5rem',
      padding: '1rem',
      backgroundColor: '#1f1f1f',
      color: 'white'
    }}>
      <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Home</Link>
      <Link to="/feed" style={{ color: 'white', textDecoration: 'none' }}>Feed</Link>
      <Link to="/profile" style={{ color: 'white', textDecoration: 'none' }}>Profile</Link>
      <Link to="/login" style={{ color: 'white', textDecoration: 'none' }}>Login</Link>
    </nav>
  );
};

export default Navbar;
