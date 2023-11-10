import './booking.styles.scss'

const Booking = () => {
  return (
    <section className="booking container">
      <div className="booking__info">
        <h4 className="sub--title">Fast & Easy</h4>
        <h2 className="title">Get Your Favourite Resort Bookings</h2>
        <div className="booking__items">
          <div className="booking__item">
            <div className="booking__item--img">
              <img src="/public/images/booking/item1.svg" alt="booking" />
            </div>
            <div className="booking__item--text">
              <h3>Choose Destination</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.</p>
            </div>
          </div>
          <div className="booking__item">
            <div className="booking__item--img">
              <img src="/public/images/booking/item2.svg" alt="booking" />
            </div>
            <div className="booking__item--text">
              <h3>Check Availability</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.</p>
            </div>
          </div>
          <div className="booking__item">
            <div className="booking__item--img">
              <img src="/public/images/booking/item3.svg" alt="booking" />
            </div>
            <div className="booking__item--text">
              <h3>Let’s Go</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.</p>
            </div>
          </div>
        </div>
      </div>
      <img src="/public/images/booking.png" alt="booking" />
    </section>
  )
}

export default Booking