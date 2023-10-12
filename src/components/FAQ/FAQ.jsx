import React from 'react'
import {Accordion} from 'react-bootstrap';
import './FAQ.css'
import { faqData } from '../../data/faq';
export const FAQ = () => {
  return (
    <div className='section-wrapper'>
        <h2 className='section-title'>FAQ</h2>
        <section id='FAQ'>
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