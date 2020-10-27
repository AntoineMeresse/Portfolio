import React from 'react';
import './Navbar.css';

function Navbar() {
    return (
        <nav className="navbar">
            <ul>
                <li className="navbar_item">About me</li>
                <li className="navbar_item">My Projects</li>
                <li className="navbar_item">Contact me</li>
            </ul>
        </nav>
    )
}

export default Navbar;