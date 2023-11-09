import './banner.styles.scss'

const Banner = () => {
  return (
    <div className="banner">
      <img src="/images/banner.png" alt="banner" />
      <div className="banner--content container">
        <h2 className="banner--title">Let’s make your next holiday <span>amazing</span></h2>
      </div>
    </div>
  )
}

export default Banner