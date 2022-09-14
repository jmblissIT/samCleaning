import React from 'react';
import choose from "./assets/images/choose-1-2.png"
import g1 from "./assets/images/g1.png"
import g2 from "./assets/images/g2.png"
import g3 from "./assets/images/g3.png"
import g4 from "./assets/images/g4.png"


const Guidance = () => {
  return(
    <div className='guidance '>

      <div className='g1-rw1'>
        <div className='firstrow'>
          <div className='g-img'>
            <img src={g1}/>
          </div>
          <div className='g-descp'>
            <h4 className='g-des-h4'>Professional and Secure</h4>
            <p className='g-des-p'>
              No one steps foot on your property until they have been background
              checked, drug screened, and work-history verified.
            </p>
          </div>
        </div>

        <div className='firstrow'>
          <div className='g-img'>
            <img src={g2}/>
          </div>
          <div className='g-descp'>
            <h4 className='g-des-h4'>We Speak English</h4>
            <p className='g-des-p'>
              We ensure all of our housekeepers speak english well and can
              handle just about any request you have of them.
            </p>
          </div>
        </div>
      </div>
      <div className='g1-rw1'>
        <div className='firstrow'>
          <div className='second-column-g'>
            <div className='g-img'>
              <img className='img-check' src={choose} />
            </div>
          </div>
        </div>
      </div>
      <div className='g1-rw1'>
        <div className='firstrow'>
          <div className='g-img'>
            <img src={g3} />
          </div>
          <div className='g-descp'>
            <h4 className='g-des-h4'>Satisfaction Guarantee</h4>
            <p className='g-des-p'>
              we will try to fix anything not done right. If you are still
              unhappy with the work quality, we will refund your money with no
              hassle.
            </p>
          </div>
        </div>

        <div className='firstrow'>
          <div className='g-img'>
            <img src={g4}/>
          </div>
          <div className='g-descp'>
            <h4 className='g-des-h4'>Competitive Prices</h4>
            <p className='g-des-p'>
              We can give you a quick, no pressure estimate over the phone, or
              you can get one emailed to you (spam free!) right away.
            </p>
          </div>
        </div>
      </div>
    </div>

  );
};
export default Guidance;
