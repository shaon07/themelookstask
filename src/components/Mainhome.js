import React from 'react'
import Card from './Card'
import Clientsay from './Clientsay'
import Domainfeature from './Domainfeature'
import Finddomain from './Finddomain'
import Footer from './Footer'
import Happyclient from './Happyclient'
import Herosec from './Herosec'
import Mainnav from './Mainnav'
import Package from './Package'
import Priceplan from './Priceplan'
import Topnav from './Topnav'
import Whychoose from './Whychoose'

const Mainhome = () => {
  return (
    <section>
      <Topnav />
      <Mainnav />
      <Herosec />
      <Card />
      <Finddomain />
      <Domainfeature />
      <Priceplan />
      <Happyclient />
      <Package />
      <Whychoose />
      <Clientsay />
      <Footer />
    </section>
  )
}

export default Mainhome
