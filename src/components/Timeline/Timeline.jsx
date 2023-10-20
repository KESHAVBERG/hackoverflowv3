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
        {/* <h2 className='section-title'>Timeline</h2> */}
        <div style={{height:"1.5rem"}}></div>
        <section>
                <div class="content">
                    <h2 className='gallery'>TimeLine</h2>
                    <h2 className='gallery'>TimeLine</h2>
                </div>
            </section><div style={{height:"0.75rem"}}></div>
        <div className="timeline-container">
            <div className="tcard">
                <div className="tcard-content" >
                    <h1>Registration Commences</h1>
                    <p className="date">October 10, 2023</p>
                </div>
            </div>
            <div className="tcard">
                <div className="tcard-content">
                    <h1>Registration Deadline</h1>
                    <p className="date">October 24, 2023</p>
                </div>
            </div>
            <div className="tcard">
                <div className="tcard-content">
                    <h1>Evaluation and Result announcement of Shortlisted teams</h1>
                    <p className="date">October 25, 2023</p>
                </div>
            </div>
            <div className="tcard">
                <div className="tcard-content">
                    <h1>Registration and Payment Period for Shortlisted teams</h1>
                    <p className="date">October 26 - 27, 2023</p>
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