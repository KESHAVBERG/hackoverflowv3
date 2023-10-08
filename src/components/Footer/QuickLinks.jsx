import React from 'react'
import { Link } from 'react-router-dom'
const QuickLinks = () => {
  return (
      <div id='quick-links' className='col'>
        <h3>Quick Links</h3>
            <ul>
                <li><a href='/#home'>Home</a></li>
                <li><a href="/#about-us">About Us</a></li>
                <li><a href="/#domains">Domains</a></li>
                <li><a href="/#sponsors">Sponsors</a></li>
                <li><a href="/#organisers">Organisers</a></li>
            </ul>
            
        </div>
  )
}

export default QuickLinks
