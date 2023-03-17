import React from 'react'
import '../styles/Banner.css'
import '../styles/BannerAbout.css'


const Banner = ({children, isAbout,}) => {
    return (
        <div className={`banner ${isAbout && "banner__about"}`}>
                    {children}
        </div>
    )
}

export default Banner