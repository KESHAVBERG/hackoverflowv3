import './Gallery.css'
import g2 from '../../images/gallery/IMG_0221.webp'
import g3 from '../../images/gallery/IMG_0227.webp'
import g4 from '../../images/gallery/IMG_0272.webp'
import g5 from '../../images/gallery/IMG_0306.webp'
import g10 from '../../images/gallery/IMG_0699.webp'
import g13 from '../../images/gallery/IMG_0813.webp'
import g14 from '../../images/gallery/IMG_0833.webp'
import { Link } from 'react-router-dom'
import { FaChevronRight} from 'react-icons/fa'

function Gallery (){
    return (
        <div className="gallery-container">
            <h2 className='section-title'>Gallery</h2>
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
                    <img src={g2} alt="" />
                </div>
            </div>
            <Link style={{ textDecoration : "none"}} to='/gallery'><div className="see-more-gallery">See More <span className='right-arrow-gallery'><FaChevronRight/></span></div></Link>
        </div>
    )
}

export default Gallery