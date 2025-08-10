import React from 'react';
import logo from '../../assets/Logo-rando-ouest.png';
import { Link } from 'react-router-dom';
import '../../style/style.css';

const Logo = () => { 
    return ( 
        <div className="logo"> 
        <Link to="/">
            <img src={logo} alt="logo" /> 
        </Link>
        </div> 
    ); 
}; 

export default Logo;
