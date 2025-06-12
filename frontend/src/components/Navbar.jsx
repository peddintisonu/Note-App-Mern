import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { FaSun, FaMoon, FaPlus } from 'react-icons/fa';

function Navbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">
        My Notes
      </Link>
      <div className="navbar-actions">
        <button
          onClick={toggleTheme}
          className="theme-toggle-button"
          aria-label="Toggle theme"
        >
          {theme === 'light' ? <FaMoon /> : <FaSun />}
        </button>
        <Link
          to="/create"
          className="navbar-button"
          aria-label="Create Note"
        >
          <FaPlus className="navbar-button-icon" />
          <span className="navbar-button-text">Create Note</span>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;