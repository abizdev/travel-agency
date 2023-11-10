// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

// Import Swiper styles
import './clients.styles.scss'
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';



const Clients = () => {
  return (
    <section className="clients">
      <div className="clients__content">
        <h4 className="sub--title">Promotion</h4>
        <h2 className="title">See What Our Clients Say About Us</h2>
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          cssMode={true}
          navigation={true}
          className="clients--slides"
          pagination={{ clickable: true }}
          modules={[Navigation, Pagination]}
        >
          <SwiperSlide className="clients--slide">
            <img src="/public/images/client.png" alt="client" />
            <p>Vel officiis dolor ea illo aut eligendi ullam non laudantium magnam et recusandae molestiae sit iure unde aut voluptate quaerat. Id sunt provident quo possimus impedit vel doloremque obcaecati qui ullam consectetur et ipsum omnis.</p>
            <span>Christine Beckam - Designer</span>
          </SwiperSlide>
          <SwiperSlide className="clients--slide">
            <img src="/public/images/client.png" alt="client" />
            <p>Vel officiis dolor ea illo aut eligendi ullam non laudantium magnam et recusandae molestiae sit iure unde aut voluptate quaerat. Id sunt provident quo possimus impedit vel doloremque obcaecati qui ullam consectetur et ipsum omnis.</p>
            <span>Christine Beckam - Designer</span>
          </SwiperSlide>
          <SwiperSlide className="clients--slide">
            <img src="/public/images/client.png" alt="client" />
            <p>Vel officiis dolor ea illo aut eligendi ullam non laudantium magnam et recusandae molestiae sit iure unde aut voluptate quaerat. Id sunt provident quo possimus impedit vel doloremque obcaecati qui ullam consectetur et ipsum omnis.</p>
            <span>Christine Beckam - Designer</span>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  )
}

export default Clients