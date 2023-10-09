import './Gallery.css'
import g1 from '../../images/gallery/IMG_0196.webp'
import g2 from '../../images/gallery/IMG_0221.webp'
import g3 from '../../images/gallery/IMG_0227.webp'
import g4 from '../../images/gallery/IMG_0272.webp'
import g5 from '../../images/gallery/IMG_0306.webp'
import g6 from '../../images/gallery/IMG_0343.webp'
import g7 from '../../images/gallery/IMG_0501.webp'
import g8 from '../../images/gallery/IMG_0588 (1).webp'
import g9 from '../../images/gallery/IMG_0697.webp'
import g10 from '../../images/gallery/IMG_0710.webp'
import g11 from '../../images/gallery/IMG_0750.webp'
import g12 from '../../images/gallery/IMG_0796.webp'
import g13 from '../../images/gallery/IMG_0813.webp'
import g14 from '../../images/gallery/IMG_0833.webp'
import g15 from '../../images/gallery/IMG_0888.webp'

function Gallery (){
    return (
        <div className="gallery-container">
            <h2 className='section-title'>Gallery</h2>
            <div className="gallery-grid-wrapper">
                <div>
                    <img src={g1} alt="" />
                </div>
                <div>
                    <img src={g13} alt="" />
                </div>
                <div className='tall'>
                    <img src={g12} alt="" />
                </div>
                <div className='wide res-wide'>
                    <img src={g7} alt="" />
                </div>
                <div>
                    <img src={g5} alt="" />
                </div>
                <div className='tall'>
                    <img src={g9} alt="" /> 
                </div>
                <div  className='big'>
                    <img src={g15} alt="" />
                </div>
                <div  className='wide'>
                    <img src={g8} alt="" />
                </div>
                <div>
                    <img src={g11} alt="" />
                </div>
                <div>
                    <img src={g10} alt="" />
                </div>
                <div className='big'>
                    <img src={g3} alt="" />
                </div>
                <div >
                    <img src={g4} alt="" />
                </div>
                <div>
                    <img src={g6} alt="" />
                </div>
                <div >
                    <img src={g14} alt="" />
                </div>
                <div>
                    <img src={g2} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Gallery