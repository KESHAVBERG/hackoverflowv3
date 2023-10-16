import React from 'react'
import './Sponsors.css'
import WaterEffect from '../WaterEffect/WaterEffect'
const Sponsors = () => {
  const num = [1,2,7,3,4,5,8]
  return (
    <div id='sponsors' className='sponsor-container'>
            <div style={{height:"0.5rem"}}></div>
            <WaterEffect heading="Sponsors"/>
      <div class="slider">
        <div class="slide-track">
          {
            num.map((n)=>{
              return <div class="slide" id={n} key={Math.random()}>
              <img src={require(`../../images/sponsors/logo${n}.webp`)} height="100" width="250" alt="" />
            </div>
            })
          }
          {
            num.map((n)=>{
              return <div class="slide" id={n} key={Math.random()}>
              <img src={require(`../../images/sponsors/logo${n}.webp`)} height="100" width="250" alt="" />
            </div>
            })
          }
        </div>
      </div>
      <div style={{height:"0.75rem"}}></div>
    </div>
  )
}

export default Sponsors
