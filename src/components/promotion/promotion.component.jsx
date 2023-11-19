import { useTranslation } from 'react-i18next'

import './promotion.styles.scss'

const Promotion = () => {
  const { t } = useTranslation()
  return (
    <section className="promotion container">
      <div className="specials__info">
        <h4 className="sub--title">{t('promotion.subTitle')}</h4>
        <h2 className="title">{t('promotion.title')}</h2>
        <p>{t('promotion.descr')}</p>
        <a href="tel:+998998224780" className="link-btn">{t('contactsBtn')}</a>
      </div>
      <div className="promotion__items">
        <img src="/images/promotion/item1.png" alt="special" />
        <img src="/images/promotion/item2.png" alt="special" />
        <img src="/images/promotion/item3.png" alt="special" />
        <img src="/images/promotion/item4.png" alt="special" />
      </div>
    </section>
  )
}

export default Promotion