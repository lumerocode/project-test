import React from 'react'
import './header.css'
import Logo from '../../assets/Logo.png'

const Header = () => {
  return (
    <header className='header'>
        <section className='header__section'>
            <nav className='nav'>
                <div className='nav__logo'>
                    <img src={Logo}></img>
                </div>
                <div className='nav__links--center'>
                    <a className='nav__link-center' href=''>Home</a>
                    <a className='nav__link-center' href=''>About us</a>
                    <a className='nav__link-center' href=''>Products</a>
                    <a className='nav__link-center' href=''>Testimonial</a>
                </div>
                <div className='nav__links--right'>
                    <a className='nav__link-right' href=''>Contact</a>
                    <button className='nav__button'>Buy Online</button>
                </div>
            </nav>
        </section>
    </header>
  )
}

export default Header