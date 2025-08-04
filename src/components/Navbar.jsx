import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { ThemeContext } from '../App';

const Navbar = () => {
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  const baseStyle = {
    padding: '0.5rem 1rem',
    borderRadius: '5px',
    textDecoration: 'none',
    fontWeight: 'bold',
    fontSize: '0.95rem',
    transition: 'all 0.3s ease',
  };

  const getLinkStyle = ({ isActive }) => ({
    ...baseStyle,
    backgroundColor: isActive
      ? darkMode ? '#888' : '#ccc'
      : darkMode ? '#444' : '#ddd',
    color: isActive
      ? darkMode ? '#fff' : '#000'
      : darkMode ? '#eee' : '#333',
  });

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
      {/* Left spacer */}
      <div style={{ flex: 1 }}></div>

      {/* Center nav links */}
      <div style={{ flex: 2, display: 'flex', justifyContent: 'center', gap: '0.75rem' }}>
        <NavLink to="/" style={getLinkStyle}>Home</NavLink>
        <NavLink to="/feed" style={getLinkStyle}>Feed</NavLink>
        <NavLink to="/profile" style={getLinkStyle}>Profile</NavLink>
        <NavLink to="/login" style={getLinkStyle}>Login</NavLink>
      </div>

      {/* Right theme toggle */}
      <div style={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
        <button
          onClick={() => setDarkMode(!darkMode)}
          style={{
            ...baseStyle,
            backgroundColor: darkMode ? '#444' : '#ddd',
            color: darkMode ? 'white' : 'black',
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
