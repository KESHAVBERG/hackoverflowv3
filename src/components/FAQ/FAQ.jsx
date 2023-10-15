import React from 'react'
import {Accordion} from 'react-bootstrap';
import './FAQ.css'
import { faqData } from '../../data/faq';
import WaterEffect from '../WaterEffect/WaterEffect';
export const FAQ = () => {
  return (
    <div className='section-wrapper'>
        {/* <h2 className='section-title'>FAQ</h2> */}
       <WaterEffect heading="FAQ" className="faq"/>
        <section id='FAQ'>
        <div style={{height:"1rem"}}></div>
        <Accordion>
          {
            faqData.map((faq,index)=>{
              return <Accordion.Item key={index} eventKey={index}>
              <Accordion.Header>{faq.question}</Accordion.Header>
              <Accordion.Body>
              {faq.answer}
              </Accordion.Body>
            </Accordion.Item>
            })
          }
    </Accordion>
        </section>
    </div>
  )
}

export default FAQ