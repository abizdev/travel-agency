import Header from "./components/header/header.component"
import Partners from "./components/partners/partners.component"
import Category from "./components/category/category.component"
import Banner from "./components/banner/banner.component"
import Specials from "./components/specials/specials.component"
import Booking from "./components/booking/booking.component"
import Promotion from "./components/promotion/promotion.component"
import Clients from "./components/clients/clients.component"
import Footer from "./components/footer/footer.component"

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Partners />
        <Category />
        <Specials />
        <Booking />
        <Banner />
        <Promotion />
        <Clients />
      </main>
      <Footer />
    </>
  )
}

export default App