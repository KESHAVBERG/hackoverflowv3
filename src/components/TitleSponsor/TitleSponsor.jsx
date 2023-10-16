import './TitleSponsor.css'
import edkool from '../../images/sponsors/logo6.webp'

function TitleSponsor(){
    return (
        <div className="title-sponsor">
            
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