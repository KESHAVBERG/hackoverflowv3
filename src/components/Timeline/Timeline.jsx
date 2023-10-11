import './Timeline.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
function Timeline(){
    useEffect(()=>{
        AOS.init()
    },[])
    
    return (
        <div className="timeline-wrapper" data-aos="zoom-in-down" data-aos-offset="-400" data-aos-duration="1700">
        <h2 className='section-title'>Timeline</h2>
        <div className="timeline-container">
            <div className="tcard">
                <div className="tcard-content" >
                    <h1>Registration Commences</h1>
                    <p className="date">October 10, 2023</p>
                    {/* <p className="tcard-info">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem dolores, soluta amet assumenda et illo minus possimus explicabo obcaecati fugiat facere alias dignissimos corrupti esse molestias voluptates, aliquid ratione optio error repellat fuga! Eius, commodi! error repellat fuga! Eius, commodi!
                    </p> */}
                </div>
            </div>
            <div className="tcard">
                <div className="tcard-content">
                    <h1>Registration Deadline</h1>
                    <p className="date">October 20, 2023</p>
                </div>
            </div>
            <div className="tcard">
                <div className="tcard-content">
                    <h1>Evaluation and Result announcement of Shortlisted teams</h1>
                    <p className="date">October 21 - 22, 2023</p>
                </div>
            </div>
            <div className="tcard">
                <div className="tcard-content">
                    <h1>Registration and Payment Period for Shortlisted teams</h1>
                    <p className="date">October 23 - 26, 2023</p>
                </div>
            </div>
            <div className="tcard">
                <div className="tcard-content">
                    <h1>24 hour Hackathon</h1>
                    <p className="date">November 4 - 5, 2023</p>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Timeline