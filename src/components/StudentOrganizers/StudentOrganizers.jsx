import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import './StudentOrganizers.css'
import mustafa from '../../images/organizers/mustafa.webp'
import suriya from '../../images/organizers/suriya.webp'
import subash from '../../images/organizers/subash.webp'
import joshua from '../../images/organizers/joshua.webp'
import keerthana from '../../images/organizers/keerthana.webp'
import { useEffect } from "react"
import VanillaTilt from 'vanilla-tilt'
import { Link } from "react-router-dom"
import {FaChevronRight} from 'react-icons/fa'
import WaterEffect from "../WaterEffect/WaterEffect"

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4, 
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1300, 
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 1000, 
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 780,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const StudentOrganizers = () => {

  useEffect(()=>{
    VanillaTilt.init(document.querySelectorAll(".carousel-content"), {
        max: 15,
        speed: 300,
        glare:1,
        "max-glare":.25,
        gyroscope:false
    })
  },[])

  return (
    <div className="carousel-container">
      {/* <h2 className='section-title'>Organizers</h2> */}
      <WaterEffect heading="Organizers"/>
      <Slider {...settings}>
        <div className="carousel-content">
          <img src={keerthana} alt=""/>
          <div className="carousel-coordinator-info">
              <h2>Keerthana</h2>
              <p className="carousel-position">
                  President
              </p>
          </div>
        </div>
        <div className="carousel-content">
          <img src={suriya} alt=""/>
          <div className="carousel-coordinator-info">
              <h2>Suriya Prakash</h2>
              <p className="carousel-position">
                  Vice President
              </p>
          </div>
        </div>
        <div className="carousel-content">
          <img src={mustafa} alt=""/>
          <div className="carousel-coordinator-info">
              <h2>Mustafa</h2>
              <p className="carousel-position">
                  Secretary
              </p>
          </div>
        </div>
        <div className="carousel-content">
          <img src={subash} alt=""/>
          <div className="carousel-coordinator-info">
              <h2>Subhash B</h2>
              <p className="carousel-position">
                  Treasurer
              </p>
          </div>
        </div>
        <div className="carousel-content">
          <img src={joshua} alt=""/>
          <div className="carousel-coordinator-info">
              <h2>Joshua David</h2>
              <p className="carousel-position">
                  Student Coordinator
              </p>
          </div>
        </div>
      </Slider>
      <Link to='/teams#members'><button className='btn btn-outline-light coordinator-button'>Team Members <FaChevronRight/></button></Link>
    </div>
  );
};

export default StudentOrganizers;
