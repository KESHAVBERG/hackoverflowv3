import './TitleSponsor.css'
import edkool from '../../images/sponsors/logo7.png'

function TitleSponsor(){
    return (
        <div className="title-sponsor">
            <h2 className='section-title'>Title Sponsor</h2>
            <img src={edkool} alt="" />
        </div>
    )
}

export default TitleSponsor