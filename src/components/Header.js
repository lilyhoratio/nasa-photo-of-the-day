import React from "react";
import "./../Header.css";

function Header() {
    return (
        <nav className="nav-container">
            <img width="180px" src="https://www.nasa.gov/sites/default/files/thumbnails/image/nasa-logo-web-rgb.png"></img>
            <a>Generate a random photo</a>
            <a>Submit a photo</a>
        </nav>
    )
}

export default Header;