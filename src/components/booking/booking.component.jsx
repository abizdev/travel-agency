import { useTranslation } from 'react-i18next'


import './booking.styles.scss'

const Booking = () => {
  const { t } = useTranslation()
  const items = [
    {
      id: 1,
      img: '/images/booking/item1.svg',
      title: t('booking.services.place.title'),
      descr: t('booking.services.place.descr'),
    },
    {
      id: 2,
      img: '/images/booking/item2.svg',
      title: t('booking.services.date.title'),
      descr: t('booking.services.date.descr'),
    },
    {
      id: 3,
      img: '/images/booking/item3.svg',
      title: t('booking.services.letsGo.title'),
      descr: t('booking.services.letsGo.descr'),
    },
  ]
  return (
    <section className="booking container">
      <div className="booking__info">
        <h4 className="sub--title">{t('booking.subTitle')}</h4>
        <h2 className="title">{t('booking.title')}</h2>
        <div className="booking__items">
          {
            items.map((item) => (
              <div className="booking__item" key={item.id}>
                <div className="booking__item--img">
                  <img src={item.img} alt="booking" />
                </div>
                <div className="booking__item--text">
                  <h3>{item.title}</h3>
                  <p>{item.descr}</p>
                </div>
              </div>
            ))
          }
        </div>
      </div>
      <img src="/images/booking.png" alt="booking" />
    </section>
  )
}

export default Booking