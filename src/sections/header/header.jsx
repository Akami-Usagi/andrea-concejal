import "./header.css"
import React from "react"

function Header() {

    

    return <header className="header">
        <div className="header__main">
            <a href="https://partido-democratacolombiano.com/"><img src="/img/logo_democrata.svg" alt="logo" className="header__logo"/></a>
            <div className="header__text">
                <h2 className="header__title">Partido Democrata Colombiano</h2>
                <h4 className="header__subtitle">Vamos Juntos</h4>
            </div>
        </div>
        <nav className="header__nav">
            <ul className="header__nav__list">
                <li className="header__nav__item"><a href="#banner">Inicio</a></li>
                <li className="header__nav__item"><a href="#about">Sobre Mi</a></li>
                <li className="header__nav__item"><a href="#objetive">Objetivos</a></li>
                <li className="header__nav__item"><a href="#footer">Contacto</a></li>

            </ul>
        </nav>
    </header>
}

export default Header