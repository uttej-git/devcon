import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../App';

const Navbar = () => {
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  const linkStyle = {
    padding: '0.5rem 1rem',
    borderRadius: '5px',
    backgroundColor: darkMode ? '#444' : '#ddd',
    color: darkMode ? 'white' : 'black',
    textDecoration: 'none',
    fontWeight: 'bold',
    fontSize: '0.95rem',
  };

  return (
    <nav
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1rem',
        backgroundColor: darkMode ? '#1f1f1f' : '#f0f0f0',
        color: darkMode ? 'white' : 'black',
      }}
    >
      <div style={{ display: 'flex', gap: '0.75rem' }}>
        <Link to="/" style={linkStyle}>Home</Link>
        <Link to="/feed" style={linkStyle}>Feed</Link>
        <Link to="/profile" style={linkStyle}>Profile</Link>
        <Link to="/login" style={linkStyle}>Login</Link>
      </div>

      <button
        onClick={() => setDarkMode(!darkMode)}
        style={{
          ...linkStyle,
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          gap: '0.3rem',
        }}
      >
        {darkMode ? '☀️ Light' : '🌙 Dark'}
      </button>
    </nav>
  );
};

export default Navbar;
