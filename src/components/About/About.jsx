import './About.css'
import recLogo from '../../images/rec-circle.png'
import hackLogo from '../../images/hack-circle.png'
import AOS from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from 'react';
function About(){
    useEffect(()=>{
        AOS.init()
    },[])
    return (
        <div id='about-us' className='section-wrapper' data-aos="fade-right" data-aos-duration="1700" data-aos-offset="-400" data-aos-once="true">
            <h2 className='section-title'>About Us</h2>
            <section id='about-section'>
                <div className="center-box">
                    <div className={`animated-border-box-glow `}></div>
                    <div className={`animated-border-box about-container`}>
                        <div className='abt-header'>
                            <img src={recLogo} alt='clg-logo' height={75} width={75} />
                            <h1 className='abt-title'>About College</h1>
                        </div>
                        
                        <p>Rajalakshmi Engineering College, an autonomous institution affiliated with Anna University, Chennai, was established in 1997 and has been producing out high-quality professionals ever since. REC has aided thousands of students in landing their dream careers and becoming professionals in their fields.</p>
                        
                        <hr className='abt-hr' />
                        <div className='abt-header hack-header'>
                            <img src={hackLogo} alt='clg-logo' height={75} width={75} />
                            <h1 className='abt-title'>About Hackoverflow</h1>
                        </div>
                        
                    
                        <p>Get ready to dive into the world of innovation and creativity at Hackoverflow 3.0. Since its inception in 2020, this event has been the platform for creativity, and now it's back for the third time, bigger and better than ever. This is a 24-hour intense development and innovation contest where participants are challenged with real-world problem statements on the spot. The event encourages participants to form teams and collaboratively brainstorm, design, develop, and present a solution from start to finish within the 24-hour timeframe, all for a chance to win exciting prizes. So bring your A-game, build a dream team, and prepare to hack, hustle, and innovate your way.</p>
                    </div>    
                </div>
            </section>
        </div>
    );
}

export default About