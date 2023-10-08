import React from 'react'
import './Register.css'
export const Register = () => {
  return (
    <>
    {/* <ParticleBackground/> */}
    {/* <div id='text'><h1>Register</h1></div> */}
    <div className='register-page flick'>
      <h3>About Hackoverflow:</h3>
      <p className='about-event'>Get ready to dive into the world of innovation and creativity at Hackoverflow 3.0. Since its inception in 2020, this event has been the platform for creativity, and now it's back for the third time, bigger and better than ever. This is a 24-hour intense development and innovation contest where participants are challenged with real-world problem statements on the spot. The event encourages participants to form teams and collaboratively brainstorm, design, develop, and present a solution from start to finish within the 24-hour timeframe, all for a chance to win exciting prizes. So bring your A-game, build a dream team, and prepare to hack, hustle, and innovate your way.</p>
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
