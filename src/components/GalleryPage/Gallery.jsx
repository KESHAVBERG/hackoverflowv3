import './Gallery.css'
import g3 from '../../images/gallery/IMG_0227.webp'
import g4 from '../../images/gallery/IMG_0272.webp'
import g5 from '../../images/gallery/IMG_0306.webp'
import g10 from '../../images/gallery/IMG_0699.webp'
import g13 from '../../images/gallery/IMG_0813.webp'
import g14 from '../../images/gallery/IMG_0833.webp'
import g15 from '../../images/gallery/IMG_0801.jpg'
import { Link } from 'react-router-dom'
import { FaChevronRight} from 'react-icons/fa'
import WaterEffect from '../WaterEffect/WaterEffect'

function Gallery (){
    return (
        <div className="gallery-container">
            {/* <h2 className='section-title'>Gallery</h2> */}
            <div style={{height:"1rem"}}></div>
            <WaterEffect heading="Gallery"/>
            <div style={{height:"1.5rem"}}></div>
            <div className="gallery-grid-wrapper">
                <div>
                    <img src={g3} alt="" />
                </div>
                
                <div>
                    <img src={g13} alt="" />
                </div>
                <div className='big'>
                    <img src={g5} alt="" />
                </div>
                <div >
                    <img src={g4} alt="" />
                </div>
                <div>
                    <img src={g14} alt="" />
                </div>
                <div >
                    <img src={g10} alt="" />
                </div>
                <div>
                    <img src={g15} alt="" />
                </div>
            </div>
            <div style={{height:"0.75rem"}}></div>
        </div>
    )
}

export default Gallery