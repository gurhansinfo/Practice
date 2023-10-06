import React from 'react'
import BannerImage from '../../Images/banner.jpg'

const Banner = (props) => {
  
  return (
    <>
    <div className='title_banner'style={{ backgroundImage: `url(${BannerImage})` }} >
      <div className='container'>
      <h1>{props.title}</h1>
      </div>
    </div>
    
    </>
  )
}

export default Banner