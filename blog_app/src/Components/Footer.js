
import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";

const Footer = () => {
    return (
        <nav className="navbar1">
            <div className="navbar_logo1">
                <h2>Write your thoughts</h2>
            </div>

            {/**     <ul className="navbar_links">
                <li>
                    <Link to="/" className="cart_link">
                        <i className="fas fa-shopping-cart"></i>
                        <span>
                            Cart <span className="cartlogo_badge">0</span>
                        </span>
                    </Link>
                </li>
                <li>
                    <Link to="/">Shop</Link>
                </li>


            </ul>

            <div className="hamburger_menu" >
                <div></div>
                <div></div>
                <div></div>
    </div>*/}


        </nav>
    )
}

export default Footer;