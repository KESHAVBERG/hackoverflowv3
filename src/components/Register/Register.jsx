import React from 'react'
import './Register.css'
import Navigationbar from '../Navbar/NavigationBar'
export const Register = () => {
  return (
    <>
    <Navigationbar />
    <div className='register-page flick'>
      <h3>About Hackoverflow:</h3>
      <p className='about-event'>"Dive into innovation at Hackoverflow 3.0! Since 2020, it's been the platform for creativity, and now it's back for the third time, bigger and better. This 24-hour event challenges you with real-world problems, so bring your A-game, build a dream team, and hack, hustle, and innovate your way to victory!".</p>
      <h3>Guidelines Of HackOverflow : </h3>
     
      <ol>
        <li> Participants must be currently enrolled in either an undergraduate or postgraduate program and possess a valid college ID card.
</li>
        <li>Teams must comprise a minimum of three members and can have a maximum of four members.
</li>
        <li>Team members may represent the same or different colleges.

</li>
        <li>Teams are required to submit a GitHub repository or a hosted website of their existing project as the initial step.

</li>
        <li>If available, teams are encouraged to submit a demo video or YouTube link showcasing their project for the initial assessment process.

</li>
<li>On the day of the event, 2-3 problem statements for each domain will be provided.
</li>
<li>Participating teams must develop a solution within a 24-hour timeframe.
</li>
<li>Teams interested in participating in the AR/VR domain should bring their own equipment kits.
</li>
<li>All participating teams will receive food and accommodation arrangements for the entire duration of the hackathon.</li>
      </ol>
      <a href="https://forms.gle/cpyMe5ybWwwoXgmW7"><button className='btn btn-primary'>Register here</button></a>
    </div>
    </>
  )
}

export default Register
