import './TitleSponsor.css'
import edkool from '../../images/sponsors/logo6.jpg'

function TitleSponsor(){
    return (
        <div className="title-sponsor">
            {/* <h2 className='section-title'>Title Sponsor</h2> */}
            <section>
                <div class="content">
                    <h2 className='domain'>Title<span style={{visibility : "hidden"}}>_</span>Sponsors</h2>
                    <h2 className='domain'>Title<span style={{visibility : "hidden"}}>_</span>Sponsors</h2>
                </div>
            </section>
            <div style={{height:"0.75rem"}}></div>
            <img src={edkool} alt="" />
        </div>
    )
}

export default TitleSponsor