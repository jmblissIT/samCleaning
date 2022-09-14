import React from 'react';
import cleaning from './assets/images/cleaning.png';
import dust from './assets/images/dusting.png';
import mope from './assets/images/moping.png';
import finish from './assets/images/finishing.png';


const Services = () => {
  return(
    <div className='services'>
      <div className="container">
        <div className="our-service">
      <div className='one-fa'>
        <h1 className='serv-h1'>Our Services</h1>
        <p className='serv-p'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
          vulputate lectus at auctor elementum. Nam id blandit turpis, sed
          blandit sem. Nullam tempus odio a ipsum bibendum, sed consequat purus
          varius.
        </p>
      </div>
      </div>

      <div className='about-services-img'>
        <div className='services-img'>
          <div className='part-servo'>
            <div className='inner-serv'>
              <div className='inner-pic'>
                <img className='i-serv' src={dust} />
              </div>
              <div className='inner-desc'>
                <h4 className='inner-h4'>Dusting</h4>
              </div>
            </div>
          </div>
          <div className='part-servo'>
            <div className='inner-serv'>
              <div className='inner-pic'>
                <img className='i-serv' src={cleaning} />
              </div>
              <div className='inner-desc'>
                <h4 className='inner-h4'>cleaning</h4>
              </div>
            </div>
          </div>
          <div className='part-servo'>
            <div className='inner-serv'>
              <div className='inner-pic'>
                <img className='i-serv' src={finish} />
              </div>
              <div className='inner-desc'>
                <h4 className='inner-h4'>finishing</h4>
              </div>
            </div>
          </div>
          <div className='part-servo'>
            <div className='inner-serv'>
              <div className='inner-pic'>
                <img className='i-serv' src={mope} />
              </div>
              <div className='inner-desc'>
                <h4 className='inner-h4'>mope</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};
export default Services;
