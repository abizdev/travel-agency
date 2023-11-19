import { useTranslation } from 'react-i18next'

import './specials.styles.scss'

const Specials = () => {
  const { t } = useTranslation()

  return (
    <section className="specials container">
      <img src="/images/special.png" alt="special" />
      <div className="specials__info">
        <h4 className="sub--title">{t('specials.subTitle')}</h4>
        <h2 className="title">{t('specials.title')}</h2>
        <p>{t('specials.descr')}</p>
        <a href="tel:+998998224780" className="link-btn">{t('contactsBtn')}</a>
      </div>
    </section>
  )
}

export default Specials