import './Home.css'
import Timer from '../Timer/Timer';
import logo from '../../images/logo.png'
import rec from '../../images/rec_logo.png'
import { Link } from 'react-router-dom';
function Home(){
    return (
        <div className="home-container" id='home'>
            <div className="home-content" >
                <img src={rec} alt="" className='rec-logo'/>
                <h1>Department of Computer Science and Engineering</h1>
                <p>proudly presents</p>
                <img src={logo} alt="" className='hackoverflow-logo' height={75} width={250}/>
                <p>4<sup>th</sup> - 5 <sup>th</sup> November,2023 </p>
                <p className='prize-text'>Cash prizes Worth 1 Lakh</p>
                <Timer />
                <Link to={'/register'} style={{textDecoration:'none'}}>
                    <div className="register-btn">
                        Register
                    </div>
                </Link>            
                </div>
        </div>
    )
}

export default Home