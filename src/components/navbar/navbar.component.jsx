import { useState } from 'react'
import './navbar.styles.scss'

const Navbar = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false)

  const toggleMenu = () => {
    setIsOpenMenu(!isOpenMenu)
  }


  return (
    <nav className="navbar">
      <div className="navbar__content container">
        <a className="navbar--logo">
          <img src="/images/logo.png" alt="logo" />
        </a>

        <ul className="navbar--list">
          <li><a href="#!">Home</a></li>
          <li><a href="#!">About</a></li>
          <li><a href="#!">Services</a></li>
          <li><a href="#!">Upcomming Packages</a></li>
        </ul>

        <a href="#!" className="link-btn">Contacts</a>

        <div className="burger" onClick={() => toggleMenu()}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        
        <aside className={`navbar__menu ${isOpenMenu ? 'active' : ''}`}>
          <button className='navbar__menu--close' onClick={() => toggleMenu()}>
            <img src="/images/close.svg" alt="close"/>
          </button>
          <ul className="navbar__menu--list">
            <li><a href="#!">Home</a></li>
            <li><a href="#!">About</a></li>
            <li><a href="#!">Services</a></li>
            <li><a href="#!">Upcomming Packages</a></li>
            <a href="#!" className="link-btn">Contacts</a>
          </ul>
        </aside>
      </div>
    </nav>
  )
}

export default Navbar