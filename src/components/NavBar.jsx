import React from 'react';
import { NavLink } from "react-router-dom";

export default function NavBar() {
    const textDecor = {
        textDecoration: "none", 
        color: "black"
    }
    return (
        <div className='astral-nav-div'>

            <div className='astral-brand-div'>
                <h1 className='astral-brand'>ASTRALFORUMS</h1>
            </div>
            
            <nav>
                <ul className='astral-nav'>
                    <li><NavLink className='astral-nav-item' style={textDecor} to="/Forum">Forums</NavLink></li>
                    <li><NavLink className='astral-nav-item' style={textDecor} to="/">About</NavLink></li>
                    <li><NavLink className='astral-nav-item' style={textDecor} to="/">Privacy</NavLink></li>
                    <li><NavLink className='astral-nav-item' style={textDecor} to="/">Contact Us</NavLink></li>
                    <li><NavLink className='astral-nav-item' style={textDecor} to="/">Login</NavLink></li>
                </ul>
            </nav>
            
        </div>
    )
}