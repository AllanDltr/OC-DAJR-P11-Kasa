import React from 'react'
import logos from '../assets/Logo.svg'
import '../styles/Footer.css'

export const Footer = () => {
  const logo = <img className="footer__img" src={logos} alt="Kasa Logo" />
  return (
    <div className="footer">
      {logo}
      <p className="footer__text">© 2020 Kasa. All rights reserved</p>
    </div>
  )
}