import React from 'react';

import { HashLink } from "react-router-hash-link";
import c1 from './assets/images/c1.jpg';
import c2 from './assets/images/c2.jpg';
import c3 from './assets/images/c3.jpg';

const Banner = () => {
  return (
    <div className='banner'>
      <div className='container'>
      <div className='one-fa blackheading'>
        <h1 className='workheading'>How We Work</h1>
    
      </div>
      <div className='one-fa'>
        <div className='card-deck'>
          <div className='card'>
            <div className='bnr-image'>
              <img
                className='card-img-top  bnr-editImg'
                src={c1}
                alt='Card image cap'
              />
            </div>
            <div className='card-body'>
              <h5 className='card-title'>Home Cleaning</h5>
              <p className='card-text'>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
             
            </div>
          </div>
          <div className='card'>
            <div className='bnr-image'>
              <img
                className='card-img-top  bnr-editImg'
                src={c2}
                alt='Card image cap'
              />
            </div>
            <div className='card-body'>
              <h5 className='card-title'>Office Cleaning</h5>
              <p className='card-text'>
                This card has supporting text below as a natural lead-in to
                additional content.
              </p>
              
            </div>
          </div>
          <div className='card'>
            <div className='bnr-image'>
              <img
                className='card-img-top  bnr-editImg'
                src={c3}
                alt='Card image cap'
              />
            </div>
            <div className='card-body'>
              <h5 className='card-title'>Window Cleaning</h5>
              <p className='card-text'>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This card has even longer content
                than the first to show that equal height action.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className='book-now bannerbtn'>
        <HashLink smooth to={"/#step_select"} className="nav-link"><button className='book-now-btn'>Book Now</button></HashLink>
      </div>
    </div>
    </div>
  );
};
export default Banner;