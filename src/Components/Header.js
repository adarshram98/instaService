import React from 'react'
import logo from './logo.png'
import './Header.css'
import SearchIcon from "@material-ui/icons/Search";
import LanguageIcon from "@material-ui/icons/Language";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Avatar } from "@material-ui/core";
// import { Link } from "react-router-dom";
const Header = () => {
    return (
        <div className="header">
            {/* Logo Navigating to home */}
                <img className="header__logo" src={logo} alt=""/>
            {/* Search in the middle */}
            <div className='header__center'>
                <input type="text" />
                <SearchIcon />
            </div>
            {/* Customer */}
            <div className='header__right'>
                <p>Become a host</p>
                <LanguageIcon />
                <ExpandMoreIcon />
                <Avatar />
            </div>
            {/* Business */}
            {/* Sign In */}
        </div>
    )
}

export default Header
