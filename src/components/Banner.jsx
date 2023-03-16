import React from 'react'
import '../styles/Banner.css'


const Banner = ({children}) => {
    return (
        <div className="banner">
                    {children}
        </div>
    )
}

export default Banner