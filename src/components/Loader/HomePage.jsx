import React, { useState } from 'react'
import Home from '../Home/Home'
import About from '../About/About' 
import Sponsors from '../Sponsors/Sponsors'
import Timeline from '../Timeline/Timeline'
import ProgressBar from '../Progress/ProgressBar'
import GoToTop from '../GoToTop/GoToTop'
import FAQ from '../FAQ/FAQ'
import Domain from '../Domain/Domain'
import Navigationbar from '../Navbar/NavigationBar'
import Gallery from '../GalleryPage/Gallery'
import TitleSponsor from '../TitleSponsor/TitleSponsor'
import StudentOrganizers from '../StudentOrganizers/StudentOrganizers'
import StaffOrganizers from '../StaffOrganizers/StaffOrganizers'

const HomePage = () => {
    const [scroll , setScroll ] = useState(0)
  
  window.onscroll = () => {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight
    var scrolled = (winScroll / height) * 100
    setScroll(scrolled)
  } 

  return (
    <div>
            <Navigationbar />
            <ProgressBar scroll={scroll} />
            <GoToTop />
            <Home />
            {/* <About /> */}
            <Domain />
            <Timeline />
            <TitleSponsor />
            <Sponsors />
            <StaffOrganizers />
            <StudentOrganizers />
            <Gallery />
            <FAQ />
    </div>
  )
}

export default HomePage
