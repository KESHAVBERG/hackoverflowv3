import React from 'react';
import { useState, useEffect } from 'react';
import './Timer.css'

const Timer = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const deadline = "October, 30, 2023";


  const getTime = () => {
    const time = Date.parse(deadline) - Date.now();

    setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
    setHours(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    setMinutes(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    setSeconds(Math.floor((time % (1000 * 60 )) / (1000)));

  };

  useEffect(() => {

    // document.getElementById('dd').style.strokeDashoffset = 440 - (440*days) / 365;
    // document.getElementById('hh').style.strokeDashoffset = 440 - (440*hours) / 24;
    // document.getElementById('mm').style.strokeDashoffset = 440 - (440*minutes) / 60;
    // document.getElementById('ss').style.strokeDashoffset = 440 - (440*seconds) / 60;

    // document.querySelector('.day_dot').style.transform = `rotateZ(${days * 0.986}deg)`;
    // document.querySelector('.hr_dot').style.transform = `rotateZ(${hours * 15}deg)`;
    // document.querySelector('.min_dot').style.transform = `rotateZ(${minutes * 6}deg)`;
    // document.querySelector('.sec_dot').style.transform = `rotateZ(${seconds * 6}deg)`;

    const interval = setInterval(() => getTime(), 1000);

    return () => clearInterval(interval);
  }, [days,hours,minutes,seconds]);

  return (
    <div className='timer-container'>
        {/* <div className="timer-circle" style={{"--clr":"#fff"}}>
          <div className="dots day_dot"></div>
          <svg>
            <circle cx="70" cy="70" r="70"></circle>
            <circle cx="70" cy="70" r="70" id='dd'></circle>
          </svg> */}
          <div id="days">{days} <br /><span>days</span></div>
        {/* </div>
        <div className="timer-circle" style={{"--clr":"#ff2972"}}>
          <div className="dots hr_dot"></div>
          <svg>
            <circle cx="70" cy="70" r="70"></circle>
            <circle cx="70" cy="70" r="70" id='hh'></circle>
          </svg> */}
          <div id="hours">{hours} <br /><span>hours</span></div>
        {/* </div>
        <div className="timer-circle" style={{"--clr":"#fee800"}}>
          <div className="dots min_dot"></div>
          <svg>
            <circle cx="70" cy="70" r="70"></circle>
            <circle cx="70" cy="70" r="70" id='mm'></circle>
          </svg> */}
          <div id="minutes">{minutes} <br /><span>minutes</span></div>
        {/* </div>
        <div className="timer-circle" style={{"--clr":"#04fc43"}}>
          <div className="dots sec_dot"></div>
          <svg>
            <circle cx="70" cy="70" r="70"></circle>
            <circle cx="70" cy="70" r="70" id='ss'></circle>
          </svg> */}
          <div id="seconds">{seconds} <br /><span>seconds</span></div>
        {/* </div> */}
     </div>
  );
};

export default Timer;