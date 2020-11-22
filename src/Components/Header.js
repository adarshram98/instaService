import React from 'react'
import logo from './logo.png'
import './Header.css'
import SearchIcon from "@material-ui/icons/Search";
import { Link } from "react-router-dom";
import EmojiTransportationIcon from '@material-ui/icons/EmojiTransportation';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
// import { Link } from "react-router-dom";
const Header = () => {
return (
        <div className="header">
            {/* Logo Navigating to home */}
            <Link to="/">
            <img className="header__logo header__link" src={logo} alt=""/>

            </Link>
            {/* Search in the middle */}

            <div className='header__center '>
                <input type="text" />
                <SearchIcon />
            </div>
            {/* Customer */}
            
            <div className='header__right '>
            <Link className="header__link" to="/customer">
            <EmojiTransportationIcon></EmojiTransportationIcon>
                <p>Avail Service</p>
            </Link>
                <Link className="header__link" to="/business">
                <BusinessCenterIcon></BusinessCenterIcon>
                <p>Do Business</p>
                </Link>
                

                {/* <ExpandMoreIcon />
                <Avatar /> */}
            </div>
            {/* Business */}
            {/* Sign In */}
        </div>
    )
}

export default Header
