


import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../nitw_logo.png';
import '../styling/navbar.css';
import { AuthContext } from '../authContext';
import { FiMenu, FiX } from 'react-icons/fi'; 

const Navbar = () => {
    const { isLoggedIn, logout } = useContext(AuthContext);
    const [menuOpen, setMenuOpen] = useState(false); 

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <img src={logo} alt="Logo" />
                <h1>National Institute of Technology Warangal</h1>
            </div>

          
            <div className="hamburger" onClick={toggleMenu}>
                {menuOpen ? <FiX size={28} color="white" /> : <FiMenu size={28} color="white" />}
            </div>

           
            <ul className={`navbar-links ${menuOpen ? "open" : ""}`}>
                <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
                <li><Link to="/upload" onClick={toggleMenu}>Uploads</Link></li>
                {isLoggedIn ? (
                    <>
                        <li><Link to="/dashboard" onClick={toggleMenu}>Dashboard</Link></li>
                        <li><Link to="/" onClick={() => { logout(); toggleMenu(); }}>Logout</Link></li>
                    </>
                ) : (
                    <li><Link to="/login" onClick={toggleMenu}>Login</Link></li>
                )}
            </ul>
        </nav>
    );
};

export default Navbar;
