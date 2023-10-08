import React from 'react'
import game from '../../images/domains/GAME.png'
import block from '../../images/domains/block chain.png'
import ai from '../../images/domains/AI.png'
import ar from '../../images/domains/AR VR.png'
import web from '../../images/domains/Asset 1.png'
import surprise from '../../images/domains/surprise domain.png'
import rpa from '../../images/domains/uipath_rpa.png'


import './Domain.css'
// import { Button } from 'react-bootstrap/Button'
const Domain = () => {
  return (
    <div className='domain-wrapper'>
      <h2 className='section-title'>Domains</h2>
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
                  Apps That Stand Strong: Where Safety Meets Seamless Functionality!               
                </p>
                
            </div>
        </div>
    
        <div class="card-container">
            <img src={rpa} alt=''/>
            <h2>UiPath Automation</h2>
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
