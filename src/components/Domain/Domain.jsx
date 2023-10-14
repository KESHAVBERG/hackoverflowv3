import React, { useEffect } from 'react'
import game from '../../images/domains/game.webp'
import block from '../../images/domains/block-chain.webp'
import ai from '../../images/domains/ai.webp'
import ar from '../../images/domains/ar-vr.webp'
import web from '../../images/domains/web-secure.webp'
import surprise from '../../images/domains/secret-2.webp'
import rpa from '../../images/domains/uipath-rpa.webp'
import AOS from 'aos'
import 'aos/dist/aos.css'
import './Domain.css'

const Domain = () => {

    useEffect(()=>{
        AOS.init()
    },[])

  return (
    <div className='domain-wrapper' id='domains' data-aos="fade-down" data-aos-offset="-400" data-aos-duration="17
    00">
      {/* <h2 className='section-title'>Domains</h2> */}
      <section>
                <div class="content">
                    <h2 className='domain'>Domains</h2>
                    <h2 className='domain'>Domains</h2>
                </div>
            </section>
        <div class="wrapper">
        <div class="card-container">
            <img src={ai} alt=''/>
            <h2>AI</h2>
            <button type="button">Know more</button>
            <div class="descriptions">
                <p>
                Unlock boundless potential with AI! Harness AI's power to decipher complex puzzles, predict outcomes and revolutionize industries. AI's ability to process vast amounts of data, recognize patterns and make predictions empowers industries to optimize operations, enhance decision-making and create innovative solutions.
                </p>
                
            </div>
        </div>
        <div class="card-container">
            <img src={ar} alt=''/>
            <h2>AR/VR</h2>
            <button type="button">Know more</button>
            <div class="descriptions">
                
                <p>
                Step into a new dimension with AR and VR! This cutting-edge technology is used to blend the physical and digital worlds. AR enhances your reality while VR immerses you in entirely new worlds. They revolutionize education, healthcare, and entertainment, transforming problems into immersive, engaging experiences.                
                </p>
                <p style={{color:"#fff600"}}>*Requested to bring your own equipments</p>
                
            </div>
        </div>
        <div class="card-container">
            <img src={block} alt=''/>
            <h2>Blockchain</h2>
            <button type="button">Know more</button>
            <div class="descriptions">
                <p>
                Utilize blockchain's secure, transparent, and decentralized features to convert problems into solutions. Eliminate the need for intermediaries, instill trust, and redefine across various domains. Beyond cryptocurrencies, blockchain is used in supply chains, identity verification, smart contracts, and more.       
                 </p>
                
            </div>
        </div>
        
        <div class="card-container">
            <img src={game} alt=''/>
            <h2>Game Development</h2>
            <button type="button">Know more</button>
            <div class="descriptions">
                <p>
                Game On! Join the ultimate game development showdown. Unleash your creativity, build breathtaking worlds, and fortify against digital threats. In this epic competition, your imagination is your greatest asset, and security is your winning strategy. Let the games begin!                
                </p>
            </div>
        </div>
        <div class="card-container">
            <img src={web} alt=''/>
            <h2>Secure application Development</h2>
            <button type="button">Know more</button>
            <div class="descriptions">
                <p>
                  Apps That Stand Strong: Where Safety Meets Seamless Functionality! Building stunning apps demands more than just code - an ironclad shield against cyber threats. Secure coding, encryption, and updates are our tools to protect your data and keep the application safe.             
                </p>
                
            </div>
        </div>
    
        <div class="card-container">
            <img src={rpa} alt=''/>
            <h2>Robotic Process Automation</h2>
            <button type="button">Know more</button>
            <div class="descriptions">
                <p>
                Experience the power of UiPath, where automation meets innovation! Join us for a journey into the world of Robotic Process Automation (RPA), where tasks are streamlined, processes are optimized, and efficiency soars to new heights.
                </p>
                
            </div>
        </div>
        <div class="card-container">
            <img src={surprise} alt=''/>
            <h2>Surprise Domain</h2>
            <button type="button">Know more</button>
            <div class="descriptions">
                <p>
                Welcome to the most exhilarating event of the year, where your adaptability, creativity, and problem-solving skills will be put to the test like never before. Get ready for the "Surprise Domain" challenge! Prepare to embrace the unexpected and unlock your innovation potential.
                </p>
                
            </div>
        </div>
        
    </div>


    </div>
  )
}

export default Domain
