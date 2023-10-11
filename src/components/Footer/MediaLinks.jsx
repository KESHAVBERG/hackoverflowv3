import {FaDiscord, FaInstagram, FaRegEnvelope} from 'react-icons/fa'
import React from 'react'

const MediaLinks = () => {
  return (
    <>
    <a href="https://forms.gle/cpyMe5ybWwwoXgmW7"><p className='register'>Register for event here</p></a>
    <div className='media'>
      <a href='mailto:hackoverflow@rajalakshmi.edu.in'><FaRegEnvelope/></a>
      <a href='https://instagram.com/hackoverflow_rec?igshid=MzRlODBiNWFlZA=='><FaInstagram /></a>
    </div>
    </>
  )
}

export default MediaLinks
