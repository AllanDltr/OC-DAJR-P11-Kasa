import React from 'react'
import { NavLink } from 'react-router-dom'
import '../styles/Header.css'
import logos from '../assets/Logo.svg'

const Header = () => {
    const logo = <img src={logos} alt="Kasa Logo" />

return (
    <nav className="header">
        <NavLink className="header__logo" to="/">
            {logo}
        </NavLink>

        <NavLink className="header__link-home" to="/Home">
            <h6> Accueil </h6>
        </NavLink>

        <NavLink className="header__link-about" to="/About">
            <h6> A propos </h6>
        </NavLink>
        </nav>
)

}
export default Header
