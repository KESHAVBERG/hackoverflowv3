import React, { useEffect } from 'react'
import './TeamsPage.css'
import TeamsCard from './TeamsCard/TeamsCard'
import { members } from '../../data/Teams'
export const TeamsPage = () => {

  useEffect(()=>{
    const scrollToTop = () =>{
      window.scrollTo({
        top: 0, 
        behavior: 'smooth'
      });
    };
    scrollToTop();
  })

  return (
    <>
    {/* <ParticleBackground /> */}
    <div>
      <div className="background"></div>
    <div className="background-texture"></div>

    <section className="carousel">
      <h2 className="title"  id='members'>Members</h2>
      <div className="carousel__container">
      {
        members.map((member)=> {
          return <TeamsCard index={member.index} name={member.name} year={member.year}/>
        })
      }
      </div>
    </section>
    </div>
    </>
  )
}

export default TeamsPage
