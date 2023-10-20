import './Home.css'
import Timer from '../Timer/Timer';
import logo from '../../images/logo.png'
import rec from '../../images/rec_logo.png'
import { Link } from 'react-router-dom';
import Aos from 'aos';
import 'aos/dist/aos.css'
import { useEffect, useState } from 'react';
function Home(){
    const [showRegister,setShowRegister]=useState(true)
    useEffect(()=>{
        Aos.init()
        const date = new Date();
        const day= date.getDate();
        const month=date.getMonth();
        if(month==10 || day>24){
            setShowRegister(false)  
        }
        else{
            setShowRegister(true)
        }
        console.log(date)
    },[])
    return (
        <div className="home-container" id='home' data-aos="zoom-in" data-aos-duration="2500" data-aos-once="true" data-aos-offset="-400">
            <div className="home-content" >
                <img src={rec} alt="" className='rec-logo'/>
                <h1>Department of Computer Science and Engineering</h1>
                <p className='small'>proudly presents</p>
                <img src={logo} alt="" className='hackoverflow-logo' height={75} width={250}/>
                <p>4<sup>th</sup> - 5 <sup>th</sup> November,2023 </p>
                <p className='prize-text'>Cash prizes Worth 1 Lakh</p>
                <Timer />
                {showRegister?
                <p className='end-date text-warning'>*Registration Ends on 25<sup className='text-warning'>th</sup> Oct</p>:
                <p className='end-date text-warning'>Registration Closed</p>}
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