import './TitleSponsor.css'
import edkool from '../../images/sponsors/logo6.webp'

function TitleSponsor(){
    return (
        <div className="title-sponsor">
            <h2 className='section-title'>Title Sponsor</h2>
            <img src={edkool} alt="" />
        </div>
    )
}

export default TitleSponsor