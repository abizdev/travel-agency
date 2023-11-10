import './promotion.styles.scss'

const Promotion = () => {
  return (
    <section className="promotion container">
      <div className="specials__info">
        <h4 className="sub--title">Honeymoon Specials</h4>
        <h2 className="title">Our Romantic Tropical Destinations</h2>
        <p>Et labore harum non nobis ipsum eum molestias mollitia et corporis praesentium a laudantium internos. Non quis eius quo eligendi corrupti et fugiat nulla qui soluta recusandae in maxime quasi aut ducimus illum aut optio quibusdam!</p>
        <a href="#!" className="link-btn">Contacts</a>
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