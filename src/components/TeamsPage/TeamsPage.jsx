import React, { useEffect } from 'react'
import './TeamsPage.css'
import TeamsCard from './TeamsCard/TeamsCard'
import { content, design, promo, web } from '../../data/Teams'
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
      <h2 className="title big-title"  id='members'>Members</h2>
      <div className="carousel__container">
      <h2 className="title"  id='members'>Web Development Team</h2>
      {
        web.map((web)=>{
          return <TeamsCard index = {web.index} name={web.name} insta={web?.insta} year = {web.year} class={'web'}/>
        })
      }
      <h2 className="title"  id='members'>Design Team</h2>
      {
        design.map((d)=>{
          return <TeamsCard index={d.index} name={d.name} year={d.year} insta={d?.insta} class={'design'}/>
        })
      }
      <h2 className="title"  id='members'>Content Team</h2>
      {
        content.map((c)=>{
          return <TeamsCard index={c.index} name={c.name} year={c.year} insta={c?.insta} class={'content'}/>
        })
      }
      <h2 className="title"  id='members'>Promotion Team</h2>
      {
        promo.map((member)=> {
          return <TeamsCard index={member.index} name={member.name} year={member.year} insta={member?.insta} class={'promo'}/>
        })
      }
      </div>
    </section>
    </div>
    </>
  )
}

export default TeamsPage
