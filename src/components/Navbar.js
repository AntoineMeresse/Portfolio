import React from 'react';
import './Navbar.css';

import {Link} from "react-router-dom";

function Navbar() {
    return (
        <nav className="navbar">
                <ul>
                    <li className="navbar_item">
                        <Link to="/">About me</Link>
                    </li>
                    <li className="navbar_item">
                        <Link to="/projects">My Projects</Link>
                    </li>
                    <li className="navbar_item">
                        <Link to="/contact">Contact me</Link>
                    </li>
                </ul>
        </nav>
    )
}

export default Navbar;