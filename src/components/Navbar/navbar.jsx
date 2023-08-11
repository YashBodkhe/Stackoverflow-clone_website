import React from "react";
import {Link} from "react-router-dom";
import logo from "../../assets/logo1.png"
import search from "../../assets/search.svg";
import Avatar from "../Avatar/Avatar";
import Button from "../Button/Button";
import './navbar.css'

function Navbar()
{
    var User = JSON.parse(localStorage.getItem('Profile'));
    return (
        <main-nav>
        <div className="navbar">
            <Link to = '/' className="nav-item nav-btn">
                <img src={logo} alt="logo" width={120} />
            </Link>
            <Link to = '/' className="nav-item nav-btn">About</Link>
            <Link to = '/' className="nav-item nav-btn">Product</Link>
            <Link to = '/' className="nav-item nav-btn">For Teams</Link>

            <form>
                <input type="text" placeholder="Search..."/>
                <img className="search-btn" src={search} alt="search" width = "15" />
            </form> 
            {User === null  ? 
                <Link to = "/Auth" className="nav-item nav-link">Log In</Link>:
                <>
                    <Avatar backgroundColor="#009dff" px="5px" py="9px" color="white" borderRadius="50%" textDecoration="none"><Link to="/" style={{color:'white',textDecoration:'none'}}>Y</Link></Avatar>
                     <button className="nav-item nav-link">Log Out</button>
                </>
            }
        </div>
    </main-nav>
    );
}

export default Navbar;