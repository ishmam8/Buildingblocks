import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import './css/Navbar.css';
import logo from "../images/bblogo.png"
import logo_small from "../images/minlogo.png"
import close from '../images/icons/close.svg';
import menu from '../images/icons/menu.svg';

function Navbar2() {
    const [click, setClick] = useState(false);
    

    const handleClick = () => setClick(true)
    const closeMobileMenu = () => setClick(false);

    
    return (
    <>
        <nav className="navbar">
            <div className="navbar-container">

                <Link to ="/" className="navbar-logo">
                    <img src={logo} alt="logo" width="20%" />
                </Link>

                <div className="menu-icon" onClick={handleClick}>
                    <img src={click ? close : menu} />
                </div> 

                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className="nav-item">
                        <Link to = '/' className='nav-links' onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to = '/aboutus' className='nav-links' onClick={closeMobileMenu}>
                            About Us
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to = '/photogallery' className='nav-links' onClick={closeMobileMenu}>
                            Photo Gallery
                        </Link>
                    </li>

                    {/* <li className="nav-item">
                    <Link to = '/Signup' className='nav-links' onClick={closeMobileMenu}>
                            Sign up
                        </Link>
                    </li> */}

                </ul>
                
            </div>

        </nav>
    </>    
    )
}

const handleClick = () => {
    return (<login />)
}

export default Navbar2
