import './Home.css'
import Timer from '../Timer/Timer';
import logo from '../../images/logo.png'
import rec from '../../images/rec_logo.png'
import { Link } from 'react-router-dom';
import prize1 from '../../images/prize1.png'
import prize2 from '../../images/prize2.png'
import prize3 from '../../images/prize3.png'
function Home(){
    return (
        <div className="home-container" id='home'>
            <div className="home-content" style={{marginTop:"2em"}}>
                <img src={rec} alt="" className='rec-logo'/>
                <h1>Department of CSE</h1>
                <p>proudly presents</p>
                <img src={logo} alt="" className='hackoverflow-logo'/>
                <div className='prize'>
                    <div>
                        <img src={prize1}></img>
                        <p>₹ 20,000</p>
                    </div>
                    <div>
                        <img src={prize2}></img>
                        <p>₹ 10,000</p>
                    </div>
                    <div>
                        <img src={prize3}></img>
                        <p>₹ 7,500</p>
                    </div>
                    
                </div>
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