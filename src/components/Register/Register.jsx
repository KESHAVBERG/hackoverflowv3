import React from 'react'
import './Register.css'
import Navigationbar from '../Navbar/NavigationBar'
import { listItems } from '../../data/list'
export const Register = () => {
  return (
    <>
    <Navigationbar />
    <div className='register-page flick'>
      <h3>About Hackoverflow:</h3>
      <p className='about-event'>"Dive into innovation at Hackoverflow 3.0! Since 2020, it's been the platform for creativity, and now it's back for the third time, bigger and better. This 24-hour event challenges you with real-world problems, so bring your A-game, build a dream team, and hack, hustle, and innovate your way to victory!".</p>
      <h3>Guidelines Of HackOverflow : </h3>
     
      <ol>
        {
                listItems.map((list,index)=>{
                        return <li key={index}>{list}</li>
                })
        }
      </ol>
      <a href="https://forms.gle/cpyMe5ybWwwoXgmW7"><button className='btn btn-primary'>Register here</button></a>
    </div>
    </>
  )
}

export default Register
