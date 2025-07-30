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
      {/* Left spacer (empty) */}
      <div style={{ flex: 1 }}></div>

      {/* Centered nav links */}
      <div style={{ flex: 2, display: 'flex', justifyContent: 'center', gap: '0.75rem' }}>
        <Link to="/" style={linkStyle}>Home</Link>
        <Link to="/feed" style={linkStyle}>Feed</Link>
        <Link to="/profile" style={linkStyle}>Profile</Link>
        <Link to="/login" style={linkStyle}>Login</Link>
      </div>

      {/* Right-side toggle */}
      <div style={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
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
      </div>
    </nav>
  );
};

export default Navbar;
