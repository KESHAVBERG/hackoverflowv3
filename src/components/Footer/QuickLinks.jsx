import React from 'react'
import { Link } from 'react-router-dom'
const QuickLinks = () => {
  return (
      <div id='quick-links' className='col'>
        <h3>Quick Links</h3>
            <div className='row'>
            <ul className='col-lg-6'>
                <li><a href='/#home'>Home</a></li>
                <li><a href="/#about-us">About Us</a></li>
                <li><a href="/#domains">Domains</a></li>
                <li><a href="/#sponsors">Sponsors</a></li>
            </ul>
            <ul className='col-lg-6'>
            <li><a href="/#organisers">Organisers</a></li>
                <li><Link to={'/teams'}>Teams</Link></li>
                <li><Link to='/gallery'>Gallery</Link></li>
            </ul>
            </div>
            
        </div>
  )
}

export default QuickLinks
