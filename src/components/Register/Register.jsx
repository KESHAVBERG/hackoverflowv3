import React from 'react'
import './Register.css'
export const Register = () => {
  return (
    <>
    <div className='register-page flick'>
      <h3>About Hackoverflow:</h3>
      <p className='about-event'>"Dive into innovation at Hackoverflow 3.0! Since 2020, it's been the platform for creativity, and now it's back for the third time, bigger and better. This 24-hour event challenges you with real-world problems, so bring your A-game, build a dream team, and hack, hustle, and innovate your way to victory!".</p>
      <h3>Guidelines Of HackOverflow : </h3>
     
      <ol>
        <li>Participants must be currently enrolled in any Undergraduate or Postgraduate course and must have a valid college ID card.</li>
        <li>Teams should consist of a minimum of three members and may have up to four members.Members can hail from same or different colleges.</li>
        <li>Teams are required to submit a GitHub repository or a hosted website of their pre-existing project as the initial step. Following this submission, 35 - 50 teams will be selected to advance to the final offline round.
</li>
        <li>The problem statement will be provided on the day of the event, and participating teams are expected to devise a solution within a 24-hour timeframe.
</li>
        <li>Teams interested in participating in the AR/VR domain are kindly requested to bring their own equipment kits.</li>
      </ol>
      <button className='btn btn-primary'>Register here</button>
    </div>
    </>
  )
}

export default Register
