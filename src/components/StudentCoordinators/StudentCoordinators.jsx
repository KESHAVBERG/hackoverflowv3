import './StudentCoordinators.css'
import mustafa from '../../images/organizers/mustafa.webp'
import suriya from '../../images/organizers/suriya.webp'
import subash from '../../images/organizers/subash.webp'
import joshua from '../../images/organizers/joshua.webp'
import keerthana from '../../images/organizers/keerthana.webp'

import VanillaTilt from 'vanilla-tilt'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import {FaAngleLeft, FaAngleRight , FaChevronRight} from 'react-icons/fa'

function StudentCoorinators(){

    useEffect(()=>{
        
        const coordinators = document.querySelector('.coordinators-wrap')
        const coordArrowIcons = document.querySelectorAll('.coord-icon')
        const coordwidth = document.querySelector('.coordinator').clientWidth + 32
        coordArrowIcons.forEach(icon => {
            icon.addEventListener("click",()=>{
                coordinators.scrollLeft += icon.id === 'left' ? -coordwidth : coordwidth 
            })
        })

        VanillaTilt.init(document.querySelectorAll(".coordinator"), {
            max: 15,
            speed: 300,
            glare:1,
            "max-glare":.25,
            gyroscope:false
        })
   },[])

   const admin = { boxShadow: "0 0 10px 	#FFDF00 ,0 0 20px 	#FFDF00" };

    return (
        <div className="coordinators-container" id="coordinators">
            <h2 className='section-title'>Organizers</h2>
            <div className="coordinators-main-wrapper">
                <div className="coord-icon" id='left'><FaAngleLeft /></div>
                <div className="coordinators-wrap">
                <div className="coordinator">
                        <img src={keerthana} alt="" />
                        <div className="coordinator-info">
                            <h2>Keerthana</h2>
                            <p className="position">
                                President
                            </p>
                        </div>
                    </div>
                    <div className="coordinator">
                        <img src={suriya} alt="" />
                        <div className="coordinator-info">
                            <h2>Suriya Prakash</h2>
                            <p className="position">
                                Vice President
                            </p>
                        </div>
                    </div>
                    <div className="coordinator">
                        <img src={mustafa} alt="" />
                        <div className="coordinator-info">
                            <h2>Mustafa</h2>
                            <p className="position">
                                Secretary
                            </p>
                        </div>
                    </div>
                    
                    <div className="coordinator">
                        <img src={subash} alt="" />
                        <div className="coordinator-info">
                            <h2>Subhash B</h2>
                            <p className="position">
                                Treasurer
                            </p>
                        </div>
                    </div>
                    
                    <div className="coordinator">
                        <img src={joshua} alt="" />
                        <div className="coordinator-info">
                            <h2>Joshua David</h2>
                            <p className="position">
                                Student Coordinator
                            </p>
                        </div>
                    </div>
                    <div className="coordinator">
                        <img src={keerthana} alt="" />
                        <div className="coordinator-info">
                            <h2>Keerthana</h2>
                            <p className="position">
                                President
                            </p>
                        </div>
                    </div>
                    <div className="coordinator">
                        <img src={suriya} alt="" />
                        <div className="coordinator-info">
                            <h2>Suriya Prakash</h2>
                            <p className="position">
                                Vice President
                            </p>
                        </div>
                    </div>
                    <div className="coordinator">
                        <img src={mustafa} alt="" />
                        <div className="coordinator-info">
                            <h2>Mustafa</h2>
                            <p className="position">
                                Secretary
                            </p>
                        </div>
                    </div>
                    
                    <div className="coordinator">
                        <img src={subash} alt="" />
                        <div className="coordinator-info">
                            <h2>Subash B</h2>
                            <p className="position">
                                Treasurer
                            </p>
                        </div>
                    </div>
                    
                </div>
                <div className="coord-icon" icon='right'><FaAngleRight /></div>
            </div>  
            <Link to='/teams#members'><button className='btn btn-outline-light organizer-button'>Team Members <FaChevronRight/></button></Link>
        </div>
    )
}

export default StudentCoorinators
