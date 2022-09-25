import React from 'react'

import Nav from '../../components/Nav/nav-component'
import Search from '../../components/SearchBox/search-box-component'
import About from '../../components/About/about-component'
import ContactUs from '../../components/ContactUs/contact-us-component'
import Footer from '../../components/Footer/footer-component'

const Home = () => {
  return (
    <div>
      <Nav />
      <Search />
      <About />
      <ContactUs />
      <Footer />
    </div>
  )
}

export default Home