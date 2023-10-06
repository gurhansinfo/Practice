import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../Images/logo.svg'


const Header = () => {
    return (
        <>
            <div className='site_header'>
                <div className='container'>
                    <div className='header_wrapper'>
                        <div className='site_logo'>
                            <img src={logo} />
                        </div>
                        <div className='site_nav'>
                            <ul>
                                <li>
                                    <Link to="/" >Home</Link>
                                </li>
                                <li>
                                    <Link to="/contact" >Contact</Link>
                                </li>
                                <li>
                                    <Link to="/product" >Product</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header