import { useTranslation } from 'react-i18next'
import './footer.styles.scss'

const Footer = () => {
  const { t } = useTranslation()

  return (
    <footer className="footer">
      <img src="/images/footer-bg.png" alt="footer-bg" className="footer--bg" />
      <div className="footer__content container">
        <div className="footer--info">
          <img src="/images/logo.png" alt="logo" />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error inventore magni provident repellat officiis qui amet. Cum debitis perspiciatis deserunt cumque voluptates accusantium quas voluptatibus iste, pariatur harum nihil ad!</p>
          <a href="tel:+998998224780" className="footer--info__tel">+998 99 822 47 80</a>
          <div className="footer--info__socials">
            <a href="#!">
              <img src="/images/social-icons/facebook.svg" alt="facebook"/>
            </a>
            <a href="#!">
              <img src="/images/social-icons/instagram.svg" alt="instagram"/>
            </a>
            <a href="#!">
              <img src="/images/social-icons/telegram.svg" alt="telegram"/>
            </a>
          </div>
        </div>
        <ul className="footer--list">
          <li><a href="#!">{t('navbarList.main')}</a></li>
          <li><a href="#!">{t('navbarList.services')}</a></li>
          <li><a href="#!">{t('navbarList.about')}</a></li>
          <li><a href="#!">{t('navbarList.contacts')}</a></li>
        </ul>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2520.3269195318467!2d69.2054077888364!3d41.304714763396724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8bca5f7771d5%3A0x257645c8ba026d65!2z0JrQvtC80L_QsNC90LjRjyBQZXJmZWN0IEltcGV4!5e0!3m2!1sru!2s!4v1700405386015!5m2!1sru!2s" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </footer>
  )
}

export default Footer