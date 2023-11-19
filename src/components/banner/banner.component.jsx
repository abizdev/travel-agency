import { useTranslation } from 'react-i18next'
import './banner.styles.scss'

const Banner = () => {
  const { t } = useTranslation()

  return (
    <div className="banner">
      <img src="/images/banner.png" alt="banner" />
      <div className="banner--content container">
        <h2 className="banner--title">{t('banner.text')} <span>{t('banner.word')}</span></h2>
      </div>
    </div>
  )
}

export default Banner