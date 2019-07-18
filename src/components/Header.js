import React from "react";
import styled from 'styled-components';
// import "./../Header.css";

const HeaderNav = styled.nav`
    margin: 0 auto;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    background-color:black;
    color: white;
`;

const HeaderNavAnchor = styled.a`
    text-decoration: none;
    color: #FB3D22;
`

function Header() {
    return (
        <HeaderNav>
            <img float="left" alt="nasa logo" width="180px" src="https://www.nasa.gov/sites/default/files/thumbnails/image/nasa-logo-web-rgb.png"></img>
            {/* How to get this to work? */}
            <HeaderNavAnchor href="#">Generate a random photo</HeaderNavAnchor>
            <HeaderNavAnchor href="#">Submit a photo</HeaderNavAnchor>
        </HeaderNav>
    )
}

export default Header;