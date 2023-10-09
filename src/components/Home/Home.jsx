import './Home.css'
import Timer from '../Timer/Timer';
import logo from '../../images/logo.png'
import rec from '../../images/rec_logo.png'
import { Link } from 'react-router-dom';
 
function Home(){
    return (
        <div className="home-container" id='home'>
            <div className="home-content" style={{marginTop:"2em"}}>
                <img src={rec} alt="" className='rec-logo'/>
                <h1>Department of CSE</h1>
                <p>proudly presents</p>
                <img src={logo} alt="" className='hackoverflow-logo'/>
                <div className='prize'>
                    <div className='prize-card'>
                        <h2>1</h2>
                        <p>₹ 10,000</p>
                    </div>
                    <div className='prize-card'>
                        <h2>2</h2>
                        <p>₹ 7,000</p>
                    </div>
                    <div className='prize-card'>
                        <h2>3</h2>
                        <p>₹ 5,000</p>
                    </div>
                </div>
                <Timer />
                <Link to={'/register'} style={{textDecoration:'none'}}>
                    <div className="register-btn">
                        Register
                    </div>
                </Link>            </div>
        </div>
    )
}

export default Home