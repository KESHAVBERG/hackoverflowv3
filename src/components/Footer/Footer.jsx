import React from 'react'
import './Footer.css'
import MediaLinks from './MediaLinks'
import Logo from '../../images/logo_sym.png'
import QuickLinks from './QuickLinks'
import College from './College'

function Footer(){
  return (
    <footer id='contact-us'>
      <div className='row' style={{margin:"1em",marginBottom:"1.75em",justifyContent:"center"}}>
        <div className="col-lg-3 col-md-6">
          <img src={Logo} alt='logo' height={'auto'} width={100} style={{ marginTop : "20px" }}/>
        </div>
        <div className="col-lg-3 col-md-6">
            <div className="row">
              <QuickLinks />
            </div>
        </div>
        <div className="col-lg-3 col-md-6">
            <div className="row">
              <College />
            </div>
        </div> 
        <div className="col-lg-3 col-md-6">
          <h3 style={{marginBottom:"0.5em"}}>Contact Us</h3>
            <ul style={{lineHeight:"2"}}>
              <li>hackoverflow@rajalakshmi.edu.in</li>
            <li><a href='tel:9123588688'>Keerthana - 9123588688 </a></li>
              <li><a href='tel:9962338185'>Mustafa - 9962338185 </a></li>
              <li><a href='tel:9940415364'>Subhash - 9940415364 </a></li>
              <li><a href='tel:9381004087'>Suriya Prakash - 9381004087 </a></li>
            </ul>
            
        </div>
      </div>
      <MediaLinks />
      <p className='cpr'>Copyright © 2023 All rights reserved by Rajalakshmi Engineering College</p>
    </footer>
  )
}

export default Footer
