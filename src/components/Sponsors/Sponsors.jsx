import React from 'react'
import './Sponsors.css'
import WaterEffect from '../WaterEffect/WaterEffect'
const Sponsors = () => {
  const num = [1,2,7,3,4,5]
  return (
    <div id='sponsors' className='sponsor-container'>
      {/* <h2 className='section-title'>Sponsors</h2> */}
      {/* <section>
                <div class="content">
                    <h2 className='gallery'>Sponsors</h2>
                    <h2 className='gallery'>Sponsors</h2>
                </div>
            </section> */}
            <WaterEffect heading="Sponsors"/>
      <div class="slider">
        <div class="slide-track">
          {
            num.map((n)=>{
              return <div class="slide" id={n}>
              <img src={require(`../../images/sponsors/logo${n}.webp`)} height="100" width="250" alt="" />
            </div>
            })
          }
          {
            num.map((n)=>{
              return <div class="slide" id={n}>
              <img src={require(`../../images/sponsors/logo${n}.webp`)} height="100" width="250" alt="" />
            </div>
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Sponsors
