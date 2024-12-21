import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom'; // Import useLocation hook
import { FaHome, FaUser, FaBriefcase, FaEnvelope, FaBars } from 'react-icons/fa';
import logo from '../assets/logo1.png';
import '../styles/navbar.css';


interface NavBarProps {
  onToggle: () => void; // Prop to communicate toggle action
  isExpanded: boolean;
}

const NavBar: React.FC<NavBarProps> = ({ onToggle, isExpanded }) => {
  const location = useLocation(); // Get current route

  // Function to check if the current route matches the link
  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className={`navbar ${isExpanded ? 'expanded' : 'collapsed'}`}>
      <div className="top">
        <img src={logo} alt="Logo" className="navbar-logo" />
        <button className="menu-button" onClick={onToggle}>
          <FaBars />
        </button>
      </div>

      <ul className="nav-links">
        <li>
          <Link to="/homepage" className={`nav-item ${isActive('/homepage') ? 'active' : ''}`}>
            <FaHome className="icon" />
            <span className="nav-text">Home</span>
            <span className="tooltip">Home</span>
          </Link>
        </li>
        <li>
          <Link to="/about" className={`nav-item ${isActive('/about') ? 'active' : ''}`}>
            <FaUser className="icon" />
            <span className="nav-text">About Me</span>
            <span className="tooltip">About Me</span>
          </Link>
        </li>
        <li>
          <Link to="/projects" className={`nav-item ${isActive('/projects') ? 'active' : ''}`}>
            <FaBriefcase className="icon" />
            <span className="nav-text">Projects</span>
            <span className="tooltip">Projects</span>
          </Link>
        </li>
        <li>
          <Link to="/contact" className={`nav-item ${isActive('/contact') ? 'active' : ''}`}>
            <FaEnvelope className="icon" />
            <span className="nav-text">Contact</span>
            <span className="tooltip">Contact</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
