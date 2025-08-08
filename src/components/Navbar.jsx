import React, { useState, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { ThemeContext } from '../App';

const Navbar = ({ searchTerm, setSearchTerm }) => {
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  const navStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0.7rem 1.5rem',
    backgroundColor: darkMode ? '#121212' : '#ffffff',
    borderBottom: darkMode ? '1px solid #333' : '1px solid #ccc',
    boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
    position: 'sticky',
    top: 0,
    zIndex: 1000,
  };

  const logoStyle = {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: darkMode ? '#00ffff' : '#333',
    fontFamily: 'Orbitron, monospace',
    textDecoration: 'none',
  };

  const linksContainer = {
    display: 'flex',
    gap: '1.2rem',
    alignItems: 'center',
  };

  const linkStyle = {
    fontWeight: 600,
    fontSize: '1rem',
    textDecoration: 'none',
    color: darkMode ? '#aaa' : '#555',
    padding: '0.4rem 0.8rem',
    borderRadius: '6px',
    transition: '0.2s ease',
  };

  const activeLinkStyle = {
    color: darkMode ? '#fff' : '#000',
    backgroundColor: darkMode ? '#333' : '#e0e0e0',
  };

  return (
    <nav style={navStyle}>
      {/* Logo */}
      <NavLink to="/" style={logoStyle}>
        💡 DevConnect
      </NavLink>

      {/* Search bar */}
      <input
        type="text"
        placeholder="🔍 Search posts"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{
          padding: '0.4rem 0.75rem',
          borderRadius: '4px',
          border: '1px solid',
          borderColor: darkMode ? '#444' : '#ccc',
          backgroundColor: darkMode ? '#2d2d2d' : '#fff',
          color: darkMode ? '#fff' : '#000',
          width: '240px',
        }}
      />

      {/* Navigation Links */}
      <div style={linksContainer}>
        <NavLink to="/" style={({ isActive }) => ({
          ...linkStyle,
          ...(isActive ? activeLinkStyle : {})
        })}>
          Home
        </NavLink>
        <NavLink to="/feed" style={({ isActive }) => ({
          ...linkStyle,
          ...(isActive ? activeLinkStyle : {})
        })}>
          Feed
        </NavLink>
        <NavLink to="/profile" style={({ isActive }) => ({
          ...linkStyle,
          ...(isActive ? activeLinkStyle : {})
        })}>
          Profile
        </NavLink>
        <NavLink to="/login" style={({ isActive }) => ({
          ...linkStyle,
          ...(isActive ? activeLinkStyle : {})
        })}>
          Login
        </NavLink>
      </div>

      {/* Theme Toggle Button */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        style={{
          backgroundColor: 'transparent',
          border: 'none',
          color: darkMode ? '#ccc' : '#444',
          cursor: 'pointer',
          fontSize: '1.2rem',
        }}
        title="Toggle theme"
      >
        {darkMode ? '☀️' : '🌙'}
      </button>
    </nav>
  );
};

export default Navbar;
