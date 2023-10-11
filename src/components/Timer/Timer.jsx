import React from 'react';
import { useState, useEffect } from 'react';
import './Timer.css'

const Timer = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const deadline = "November, 4, 2023";


  const getTime = () => {
    const time = Date.parse(deadline) - Date.now();

    setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
    setHours(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    setMinutes(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    setSeconds(Math.floor((time % (1000 * 60 )) / (1000)));

  };

  useEffect(() => {


    const interval = setInterval(() => getTime(), 1000);

    return () => clearInterval(interval);
  }, [days,hours,minutes,seconds]);

  return (
    <div className='timer-container'>
        
          <div id="days">{days} <br /><span>days</span></div>
        
          <div id="hours">{hours} <br /><span>hours</span></div>
       
          <div id="minutes">{minutes} <br /><span>minutes</span></div>
        
          <div id="seconds">{seconds} <br /><span>seconds</span></div>
        
     </div>
  );
};

export default Timer;