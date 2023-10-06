import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
    <div className='footer_section'>
        <div className='container'>
            <div className='footer_menu'>
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

export default Footer