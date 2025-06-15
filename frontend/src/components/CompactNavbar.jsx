import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/horizontalNavbar.css";

const CompactNavbar = ({ user, darkMode, toggleDarkMode, variant = "default" }) => {
  const location = useLocation();

  // Determine active link based on current path
  const isActive = (path) => {
    return location.pathname === path;
  };

  // Variant for the 5th example in the image (text links)
  if (variant === "text-links") {
    return (
      <div className={`horizontal-navbar compact ${darkMode ? "dark" : "light"}`}>
        <div className="navbar-brand">
          <div className="company-logo">
            <div className="logo-circle">D</div>
          </div>
          <span className="company-name">deFransz</span>
        </div>

        <div className="navbar-tabs">
          <Link to="/dashboard" className={`tab-link ${isActive('/dashboard') ? 'active' : ''}`}>
            Dashboard
          </Link>
          <Link to="/analytics" className={`tab-link ${isActive('/analytics') ? 'active' : ''}`}>
            Analytics
          </Link>
          <Link to="/products" className={`tab-link ${isActive('/products') ? 'active' : ''}`}>
            Products
          </Link>
          <Link to="/settings" className={`tab-link ${isActive('/settings') ? 'active' : ''}`}>
            Settings
          </Link>
        </div>

        <div className="navbar-actions">
          <button className="theme-toggle" onClick={toggleDarkMode} title={darkMode ? "Switch to light mode" : "Switch to dark mode"}>
            {darkMode ? (
              <svg className="light-mode-icon" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#FFD700" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5" /><line x1="12" y1="1" x2="12" y2="3" /><line x1="12" y1="21" x2="12" y2="23" /><line x1="4.22" y1="4.22" x2="5.64" y2="5.64" /><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" /><line x1="1" y1="12" x2="3" y2="12" /><line x1="21" y1="12" x2="23" y2="12" /><line x1="4.22" y1="19.78" x2="5.64" y2="18.36" /><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" /></svg>
            ) : (
              <svg className="dark-mode-icon" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#4A6CF7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 0 0 9.79 9.79z" /></svg>
            )}
          </button>
          <button className="notification-button">
            <i className="notification-icon"></i>
          </button>
          <div className="user-profile">
            <img
              src={user?.profilePic || "/src/assets/default-avatar.svg"}
              alt={user?.name || "User"}
              className="user-avatar"
            />
          </div>
        </div>
      </div>
    );
  }

  // Default variant for the 6th example in the image (icon-based links)
  return (
    <div className={`horizontal-navbar compact ${darkMode ? "dark" : "light"}`}>
      <Link to="/" className="navbar-brand">
        <div className="company-logo">
          <div className="logo-circle">D</div>
        </div>
      </Link>

      <div className="navbar-tabs icon-tabs">
        <Link to="/dashboard" className={`icon-tab ${isActive('/dashboard') ? 'active' : ''}`}>
          <i className="dashboard-icon"></i>
          <span>Dashboard</span>
        </Link>
        <Link to="/analytics" className={`icon-tab ${isActive('/analytics') ? 'active' : ''}`}>
          <i className="analytics-icon"></i>
          <span>Analytics</span>
          <i className="dropdown-arrow"></i>
        </Link>
        <Link to="/products" className={`icon-tab ${isActive('/products') ? 'active' : ''}`}>
          <i className="products-icon"></i>
          <span>Products</span>
          <i className="dropdown-arrow"></i>
        </Link>
        <Link to="/settings" className={`icon-tab ${isActive('/settings') ? 'active' : ''}`}>
          <i className="settings-icon"></i>
          <span>Settings</span>
        </Link>
      </div>

      <div className="navbar-actions">
        <button className="theme-toggle" onClick={toggleDarkMode} title={darkMode ? "Switch to light mode" : "Switch to dark mode"}>
          {darkMode ? (
            <svg className="light-mode-icon" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#FFD700" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5" /><line x1="12" y1="1" x2="12" y2="3" /><line x1="12" y1="21" x2="12" y2="23" /><line x1="4.22" y1="4.22" x2="5.64" y2="5.64" /><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" /><line x1="1" y1="12" x2="3" y2="12" /><line x1="21" y1="12" x2="23" y2="12" /><line x1="4.22" y1="19.78" x2="5.64" y2="18.36" /><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" /></svg>
          ) : (
            <svg className="dark-mode-icon" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#4A6CF7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 0 0 9.79 9.79z" /></svg>
          )}
        </button>
        <button className="notification-button">
          <i className="notification-icon"></i>
        </button>
        <div className="user-profile">
          <img
            src={user?.profilePic || "/src/assets/default-avatar.svg"}
            alt={user?.name || "User"}
            className="user-avatar"
          />
        </div>
      </div>
    </div>
  );
};

export default CompactNavbar;