import "./header.css"
import React from "react"
import { Link } from "react-router-dom"
import { styled } from "styled-components"

const StyledLink = styled(Link)`
    text-decoration: none;
`

function Header() {
  

    return <header className="header">
        <div className="header__main">
            <a href="https://www.andreablandon.art/"><img src="/img/andrea_header_logo.svg" alt="logo" className="header__logo"/></a>
            <div className="header__text">
                <h2 className="header__title">Andrea Blandon</h2>
                <h4 className="header__subtitle">El ABC del Cambio!</h4>
            </div>
        </div>
        <nav className="header__nav">
            <ul className="header__nav__list">
                <StyledLink to={"/"}><li className="header__nav__item"><a href="/">Inicio</a></li></StyledLink>
                <li className="header__nav__item"><a href="#about">Sobre Mi</a></li>
                <li className="header__nav__item"><a href="#objetive">Objetivos</a></li>
                <li className="header__nav__item"><a href="#footer">Contacto</a></li>

            </ul>
        </nav>
    </header>
}

export default Header