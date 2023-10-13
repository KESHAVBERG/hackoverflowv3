import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import './StaffOrganizers.css'
import anand from '../../images/teachers/anand.webp'
import narayanan from '../../images/teachers/narayanan.webp'
import duraimurugan from '../../images/teachers/duraimurugan.webp'
import jagadeesh from '../../images/teachers/jagadeesh.webp'
import hod from '../../images/teachers/hod.webp'
import { useEffect } from "react"
import VanillaTilt from 'vanilla-tilt'

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

const StaffOrganizers = () => {

  useEffect(()=>{
    VanillaTilt.init(document.querySelectorAll(".staff-carousel-content"), {
        max: 15,
        speed: 300,
        glare:1,
        "max-glare":.25,
        gyroscope:false
    })
  },[])

  return (
    <div className="staff-carousel-container">
      <h2 className='section-title'>Coordinators</h2>
      <Slider {...settings}>
        <div className="staff-carousel-content">
          <img src={hod} alt=""/>
          <div className="staff-carousel-coordinator-info">
              <h2>Dr.P.Kumar</h2>
              <p className="staff-carousel-position">
                  Convener
              </p>
          </div>
        </div>
        <div className="staff-carousel-content">
          <img src={duraimurugan} alt=""/>
          <div className="staff-carousel-coordinator-info">
              <h2>Dr.N.Duraimurugan</h2>
              <p className="staff-carousel-position">
              Faculty Coordinator
              </p>
          </div>
        </div>
        <div className="staff-carousel-content">
          <img src={narayanan} alt=""/>
          <div className="staff-carousel-coordinator-info">
              <h2>Mr.K.E.Narayana</h2>
              <p className="staff-carousel-position">
              Faculty Coordinator
              </p>
          </div>
        </div>
        <div className="staff-carousel-content">
          <img src={jagadeesh} alt=""/>
          <div className="staff-carousel-coordinator-info">
              <h2>Dr.M.Jagadeesh</h2>
              <p className="staff-carousel-position">
              Faculty Coordinator
              </p>
          </div>
        </div>
        <div className="staff-carousel-content">
          <img src={anand} alt=""/>
          <div className="staff-carousel-coordinator-info">
              <h2>Dr.K.Anand</h2>
              <p className="staff-carousel-position">
              Faculty Coordinator
              </p>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default StaffOrganizers;
