import React, { useState, useEffect } from 'react';
import './Navbar.css';

export default function Navbar() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    // Check for access token in localStorage on component mount
    useEffect(() => {
        const token = localStorage.getItem('access_token');
        if (token) {
            setIsAuthenticated(true);
        }
    }, []);

    // Logout handler
    const handleLogout = () => {
        // Remove the token from localStorage
        localStorage.removeItem('access_token');
        setIsAuthenticated(false); // Update the navbar to reflect logged out state
        window.location.href = '/home'; // Optionally redirect to the home page after logout
    };

    return (
        <div className='top-nav'>
            <nav className='navbar navbar-expand-lg navbar-dark'>
                <div className='container-fluid'>
                    <a className='navbar-brand' href='/home'>
                        Hotel Elite.
                    </a>
                    <button
                        className='navbar-toggler'
                        type='button'
                        data-bs-toggle='collapse'
                        data-bs-target='#navbarNav'
                        aria-controls='navbarNav'
                        aria-expanded='false'
                        aria-label='Toggle navigation'>
                        <span className='navbar-toggler-icon'></span>
                    </button>
                    <div className='collapse navbar-collapse' id='navbarNav'>
                        <ul className='navbar-nav'>
                            {!isAuthenticated ? (
                                <>
                                    <li className='nav-item'>
                                        <a className='nav-link' href='/cusreg'>
                                            Register
                                        </a>
                                    </li>
                                    <li className='nav-item'>
                                        <a className='nav-link' href='/cuslogin'>
                                            Login
                                        </a>
                                    </li>
                                </>
                            ) : (
                                <li className='nav-item'>
                                    <button className='nav-link btn btn-link' onClick={handleLogout}>
                                        Logout
                                    </button>
                                </li>
                            )}
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}
