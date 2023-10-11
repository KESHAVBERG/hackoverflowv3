import React from 'react'
import {FaMapMarkerAlt} from 'react-icons/fa'

const College = () => {
  return (
    <div id='about-clg'>
      <h3>Reach Us</h3>
      <p>Rajalakshmi Engineering College, <br />
Rajalakshmi Nagar,
Thandalam, <br />
Chennai - 602105.</p>

<a href='https://maps.app.goo.gl/yxmEykoyhG8ZWB4q9'><FaMapMarkerAlt/> <p style={{ display : "inline-block" ,
 textShadow: "0 0 10px #b700ff,0 0 20px #b700ff,0 0 40px #b700ff,0 0 80px #b700ff,0 0 120px #b700ff" }}>Way to College</p></a>
    </div>
  )
}

export default College
