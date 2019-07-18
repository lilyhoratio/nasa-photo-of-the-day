import React from "react";
import "./../Header.css";

function Header() {
    return (
        <nav className="nav-container">
            <img width="180px" src="https://www.nasa.gov/sites/default/files/thumbnails/image/nasa-logo-web-rgb.png"></img>
            {/* How to get this to work? */}
            <a href="#">Generate a random photo</a>
            <a href="#">Submit a photo</a>
        </nav>
    )
}

export default Header;