import React from "react";
import {NavLink} from 'react-router-dom';
import Globe from '../../assets/globe.svg';
import './Leftsidebar.css';

function Leftsidebar()
{
    return (
        <div className="left-sidebar">
            <left-nav className="side-nav">
                <NavLink className="side-nav-links" activeclassname = "active">
                    <p>Home</p>
                </NavLink>
                <div className="side-nav-div">
                <div><p>Public</p></div>
                <NavLink to='/Questions' className='side-nav-links' activeclassname = "active">
                    <img src={Globe} alt="Globe" width={18} />
                    <p style={{paddingLeft:"10px"}}>Questions</p>
                </NavLink>
                <NavLink to='/Tags' className='side-nav-links' activeclassname = "active">
                    <p>Tags</p>
                </NavLink>
                <NavLink to='/Users' className='side-nav-links' activeclassname = "active"> 
                    <p>Users</p>
                </NavLink>
                </div>
            </left-nav>
        </div>
    );
}

export default Leftsidebar;