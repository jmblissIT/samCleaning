import React from 'react';
import { HashLink } from "react-router-hash-link";
const PerfectPlan = () => {
  return (
    <div className='perfect-plan'>
      <div className='container'>
      <div className='one-fa'>
        <div className='perfect-content blackheading'>
        <h1 className='perfect-heading'>Find the Perfect Plan For You</h1>
        <h5 className='perfect-h5'>
          Sam's Detail Cleaning Helps You Clean Your Home
        </h5>
        </div>
        <div className='book-now perfectbtn'>
        <HashLink smooth to={"/#step_select"} className="nav-link"><button className='book-now-btn'>Book Now</button></HashLink>
        </div>
      </div>
    </div>
    </div>
  );
};
export default PerfectPlan;
