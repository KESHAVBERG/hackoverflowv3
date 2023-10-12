import './StaffCoordinators.css'
import anand from '../../images/teachers/anand.jpg'
import narayanan from '../../images/teachers/narayanan.jpg'
import duraimurugan from '../../images/teachers/duraimurugan.jpg'
import jagadeesh from '../../images/teachers/jagadeesh.jpg'
import hod from '../../images/teachers/hod.jpg'
import VanillaTilt from 'vanilla-tilt'
import { useEffect } from 'react'
import {FaAngleLeft, FaAngleRight } from 'react-icons/fa'

function StaffCoorinators(){

    useEffect(()=>{
        
        const organizers = document.querySelector('.organizers-wrap')
        const arrowIcons = document.querySelectorAll('.org-icon')
        const orgwidth = document.querySelector('.organizer').clientWidth + 32
        arrowIcons.forEach(icon => {
            icon.addEventListener("click",()=>{
                organizers.scrollLeft += icon.id === 'left' ? -orgwidth : orgwidth 
            })
        })

        VanillaTilt.init(document.querySelectorAll(".organizer"), {
            max: 15,
            speed: 300,
            glare:1,
            "max-glare":.25,
            gyroscope:false
        })
   },[])

   const admin = { boxShadow: "0 0 10px 	#FFDF00 ,0 0 20px 	#FFDF00" };

    return (
        <div className="organizers-container" id="organisers">
            <h2 className='section-title'>Coordinators</h2>
            <div className="organizers-main-wrapper">
                <div className="org-icon" id='left'><FaAngleLeft /></div>
                <div className="organizers-wrap">
                <div className="organizer">
                        <img src={hod} alt="" />
                        <div className="organizer-info">
                            <h2>Dr.P.Kumar</h2>
                            <p className="position">Convener</p>
                            
                        </div>
                    </div>
                    <div className="organizer">
                        <img src={duraimurugan} alt="" />
                        <div className="organizer-info">
                            <h2>Dr.N.Duraimurugan</h2>
                            <p className="position">Faculty Coordinator</p>
                            
                        </div>
                    </div>
                    <div className="organizer">
                        <img src={narayanan} alt="" />
                        <div className="organizer-info">
                            <h2>Mr.K.E.Narayana</h2>
                            <p className="position">Faculty Coordinator</p>
                        </div>
                    </div>
                    <div className="organizer">
                        <img src={jagadeesh} alt="" />
                        <div className="organizer-info">
                            <h2>Dr.M.Jagadeesh</h2>
                            <p className="position">Faculty Coordinator</p>
                        </div>
                    </div>
                    <div className="organizer">
                        <img src={anand} alt="" />
                        <div className="organizer-info">
                            <h2>Dr.K.Anand</h2>
                            <p className="position">Faculty Coordinator</p>
                        </div>
                    </div>
                    <div className="organizer">
                        <img src={hod} alt="" />
                        <div className="organizer-info">
                            <h2>Dr.P.Kumar</h2>
                            <p className="position">Faculty Coordinator</p>
                            
                        </div>
                    </div>
                    <div className="organizer">
                        <img src={duraimurugan} alt="" />
                        <div className="organizer-info">
                            <h2>Dr.N.Duraimurugan</h2>
                            <p className="position">Faculty Coordinator</p>
                        </div>
                    </div>
                    <div className="organizer">
                        <img src={narayanan} alt="" />
                        <div className="organizer-info">
                            <h2>Mr.K.E.Narayana</h2>
                            <p className="position">Faculty Coordinator</p>
                        </div>
                    </div>
                    <div className="organizer">
                        <img src={jagadeesh} alt="" />
                        <div className="organizer-info">
                            <h2>Dr.M.Jagadeesh</h2>
                            <p className="position">Faculty Coordinator</p>
                        </div>
                    </div>
                    <div className="organizer">
                        <img src={anand} alt="" />
                        <div className="organizer-info">
                            <h2>Dr.K.Anand</h2>
                            <p className="position">Faculty Coordinator</p>
                        </div>
                    </div>
                </div>
                <div className="org-icon" icon='right'><FaAngleRight /></div>
            </div>  
        </div>
    )
}

export default StaffCoorinators