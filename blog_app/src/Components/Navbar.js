
import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";

const Navbar = ({ click }) => {
    return (
        <nav className="navbar">
            <div className="navbar_logo">
                <h2>Write your thoughts</h2>
            </div>
            <div className="links">
                <a href="/">View Blogs</a>
                <a href="/createpost">Create Post</a>

            </div>
            <div className="hamburger_menu" onClick={click}>
                <div></div>
                <div></div>
                <div></div>
            </div>




        </nav >
    )
}

export default Navbar;