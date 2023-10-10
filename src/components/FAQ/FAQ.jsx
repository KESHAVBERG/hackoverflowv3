import React from 'react'
import {Accordion} from 'react-bootstrap';
import './FAQ.css'
export const FAQ = () => {
  return (
    <div className='section-wrapper'>
        <h2 className='section-title'>FAQ</h2>
        <section id='FAQ'>
        <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>1. What are the prizes?</Accordion.Header>
        <Accordion.Body>
        Awards are presented across two distinct categories: inter-college and intra-college.
        First Prize - Rs. 20K, Second Prize - Rs. 10K, Third Prize - Rs. 7.5K
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>2. What is the registration fee?</Accordion.Header>
        <Accordion.Body>
        The registration fee is Rs. 300 for each member of the team.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>3. Is there any refund if I am not attending the event due to any unavoidable situation?</Accordion.Header>
        <Accordion.Body>
        Refunds will not be provided.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>4. If my payment fails, what am I supposed to do?</Accordion.Header>
        <Accordion.Body>
        If the payment fails, retry after a  few minutes after clearing the browser cache. If the issue still persists then email us at hackoverflow@rajalakshmi.edu.in. 
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header>5. Are there any accommodation fees ?</Accordion.Header>
        <Accordion.Body>
        No, there are no accommodation fees. There is only a one time registration fee to be paid.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="5">
        <Accordion.Header>6. What do I do if a member of my team is absent ?</Accordion.Header>
        <Accordion.Body>
        All members of the team must be present on the day of the event. Else the team would be disqualified. 
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="6">
        <Accordion.Header>7. Will there be any transport facility provided for other college students?</Accordion.Header>
        <Accordion.Body>
        Participants will be able to board the buses that usually ply to the college. For transport details please visit https://rectransport.com/
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="7">
        <Accordion.Header>8. Will we be provided with refreshments ?</Accordion.Header>
        <Accordion.Body>
        Participants attending the hackathon will be provided with food and refreshments.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="8">
        <Accordion.Header>9. Do we need to bring our laptops?</Accordion.Header>
        <Accordion.Body>
        Yes, you will be required to bring your own laptops. You will also be required to bring your equipment in case you are participating in the AR/VR domain. 
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="9">
        <Accordion.Header>10. Is this a team event?</Accordion.Header>
        <Accordion.Body>
        Yes, This is a team event where a  minimum of 3 and a maximum of 4 members can participate in one team.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="10">
        <Accordion.Header>11. Will I be provided with food and accommodation during the event?</Accordion.Header>
        <Accordion.Body>
        All participants of the hackathon will be served food. Hackers will also be provided with a dedicated space to rest and refresh.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="11">
        <Accordion.Header>12. Are premade products allowed?</Accordion.Header>
        <Accordion.Body>
        No pre-made products are not allowed. The problem statement will be given on the day of the event and they will be given 24 hours to develop a solution from scratch.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="12">
        <Accordion.Header>13. What are the tracks available?</Accordion.Header>
        <Accordion.Body>
        There are 6 domains and one surprise domain. The problem statement for each domain will be revealed on the day of the competition.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="13">
        <Accordion.Header>14. Will there be certificates for the participants?
      </Accordion.Header>
        <Accordion.Body>
        The teams selected for the finals will be given physical certificates and goodies. For other teams E-Certificates would be provided.
        </Accordion.Body>
      </Accordion.Item>
      
    </Accordion>
        </section>
    </div>
  )
}

export default FAQ