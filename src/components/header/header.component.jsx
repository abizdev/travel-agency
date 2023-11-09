import Navbar from "../navbar/navbar.component"

import './header.styles.scss'

const Header = () => {
  return (
    <header className="header">
      <img src="/images/bg.jpg" alt="header" className="header--bg"/>
      <div className="header__content container">
        <Navbar />
        <div className="header__info">
          <h1>No matter where you’re going to, we’ll take you there</h1>
          <div className="header__users">
            <img src="/images/users.png" alt="users" />
            <p>2,500 people booked Tommorowland Event in last 24 hours</p>
          </div>
        </div>
      </div>
      <div className="header__scroll">
        <div className="header__scroll--block">
          Scroll
        </div>
      </div>
    </header>
  )
}

export default Header