import React from "react";

import HeaderImage from "../images/header.png";

function Header() {

    function topNav(event) {
        event.preventDefault();
        var x = document.querySelector('#myTopnav');
        if (x.className === "topnav") {
            x.className += " responsive";
        } else {
            x.className = "topnav";
        }
    }

    return (
    <header className="container">
        <img src={HeaderImage} alt="Header Lorem" width="90%" height="auto" />
        <nav>
            <ul className="topnav" id="myTopnav">
                <li><a href="">Home Page</a></li>
                <li><a href="#about">About Us</a></li>
                <li><a href="#contact">Contact Us</a></li>
                <li><a href="#services">Services</a></li>
                <li>
                    <a className="icon" onClick={topNav}>
                        <i className="fa fa-bars"></i>
                    </a>
                </li>
            </ul>
        </nav>
    </header> 
    );
}

export default Header;