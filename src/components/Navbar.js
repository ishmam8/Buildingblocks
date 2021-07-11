import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import './css/Navbar.css';
import logo from "../images/bblogo.png"
import logo_small from "../images/minlogo.png"
import close from '../images/icons/close.svg';
import menu from '../images/icons/menu.svg';

function Navbar() {
    const [click, setClick] = useState(false);
    
    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false);

    return (
    <>
        <nav className="navbar">
            <div className="navbar-container">

                
                <div className="navbar-extras">
                    <div className="navbar-logo-container">
                    <Link to="/">
                    <picture style={{maxWidth: "100%"}}>                   
                        <source media="(min-width: 1100px)" srcset={logo}/>
                        <img src={logo_small} alt="Logo"/>
                    </picture>
                    </Link>
                    </div>
                    
                    

                    <div className="mobile-menu-button" onClick={handleClick}>
                        <img src={click ? close : menu} height="40%" />
                    </div>
                </div>
                <ul className={click ? "navbar-content active" : "navbar-content"} >

                    <li className="nav-item">
                        <Link to = '/aboutus' className='nav-links'>
                            About Us
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to = '/team' className='nav-links'>
                            Our Team
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to = '/' className='nav-links'>
                            Updates
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to = '/contactUs' className='nav-links'>
                            Contact
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link to = '/login' className='nav-links-blue'>
                            Login
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to = '/signup' className='nav-links-blue'>
                            Sign Up
                        </Link>
                    </li>
                
                </ul>
            </div>

        </nav>
    </>    
    )
}


export default Navbar
