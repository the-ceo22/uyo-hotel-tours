import React from 'react';
import './Navbar.scss';
import logo from '../../logo.png';

export default function Navbar() {
    return (
        <div>
            <nav className='navbar'>
                <img className='logo' src={logo} alt='city tours logo' />
                <ul className='nav-links'>
                    <li>
                        <a href='/' className='nav-link'>Home</a>
                    </li>
                    <li>
                        <a href='/' className='nav-link'>About</a>
                    </li>
                    <li>
                        <a href='https://essien-city-tours.netlify.app' className='nav-link'>Cities tour</a>
                    </li>
                    <li>
                        <a href='/' className='nav-link active'>Hotels tours</a>
                    </li>
                </ul>
            </nav>
            <h3 className='caption'>We bring you the list of best hotels in Akwa Ibom State</h3>
        </div>
    )
}