import { useState } from 'react'
import { useTranslation } from "react-i18next";
import './navbar.styles.scss'

const Navbar = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false)
  const [currentLanguage, setCurrentLanguage] = useState("en")
  const { t, i18n: {changeLanguage} } = useTranslation();

  const toggleMenu = () => {
    setIsOpenMenu(!isOpenMenu)
  }
  const handleChangeLanguage = (lang = "en") => {
    console.log(lang);
    const newLanguage = lang === "en" ? "en" : lang === "ru" ? "ru" : "uz";
    // console.log(newLanguage);
    setCurrentLanguage(newLanguage);
    changeLanguage(newLanguage)
  }


  return (
    <nav className="navbar">
      <div className="navbar__content container">
        <a className="navbar--logo">
          <img src="/images/logo.png" alt="logo" />
        </a>

        <ul className="navbar--list">
          <li><a href="#!">{t('navbarList.main')}</a></li>
          <li><a href="#!">{t('navbarList.services')}</a></li>
          <li><a href="#!">{t('navbarList.about')}</a></li>
          <li><a href="#!">{t('navbarList.contacts')}</a></li>
        </ul>

        <div className="navbar--contacts">
          <select onChange={(event) => handleChangeLanguage(event.target.value)} className="navbar--contacts__lang">
            <option value="en" defaultChecked>en</option>
            <option value="ru">ru</option>
            <option value="uz">uz</option>
          </select>
          <a href="tel:+998998224780" className="link-btn">{t('contactsBtn')}</a>
        </div>

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
            <li><a href="#!">{t('navbarList.main')}</a></li>
            <li><a href="#!">{t('navbarList.services')}</a></li>
            <li><a href="#!">{t('navbarList.about')}</a></li>
            <li><a href="#!">{t('navbarList.contacts')}</a></li>
            <a href="tel:+998998224780" className="link-btn">{t('contactsBtn')}</a>
            
            <select onChange={(event) => handleChangeLanguage(event.target.value)} className="navbar--contacts__lang lang--menu">
              <option value="en" defaultChecked>en</option>
              <option value="ru">ru</option>
              <option value="uz">uz</option>
            </select>
          </ul>
        </aside>
      </div>
    </nav>
  )
}

export default Navbar