import './footer.styles.scss'

const Footer = () => {
  return (
    <footer className="footer">
      <img src="/images/footer-bg.png" alt="footer-bg" className="footer--bg" />
      <div className="footer__content container">
        <div className="footer--info">
          <img src="/images/logo.png" alt="logo" />
          <a href="#!" className="footer--info__tel">+998 99 999 99 99</a>
          <div className="footer--info__socials">
            <a href="#!">
              <img src="/public/images/social-icons/facebook.svg" alt="facebook"/>
            </a>
            <a href="#!">
              <img src="/public/images/social-icons/instagram.svg" alt="instagram"/>
            </a>
            <a href="#!">
              <img src="/public/images/social-icons/telegram.svg" alt="telegram"/>
            </a>
          </div>
        </div>
        <img src="/images/maps.png" alt="google maps" className="footer--maps"/>
      </div>
    </footer>
  )
}

export default Footer