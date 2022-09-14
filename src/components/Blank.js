import React from 'react';

const Blank = () => {
  return (
    <div className='Reviews'>
      <div className='Reviews-area'>
        <div className='Review-content'>
          <div className='client'>
             <div className='digits'>
                <span className='number'>2574</span>
             </div>
             <div className='about'>Clients A Year</div>
          </div>
          <div className='people'>
          <div className='digits'>
          <span className='number'>354</span>
          </div>
          <div className='about'>People Working</div>   
          </div>
          <div className='customer'>
          <div className='digits'>
          <span className='number'>700</span>
         </div>
          <div className='about'>Happy Customers</div> 
          </div>
          <div className='projects'>
          <div className='digits'>
          <span className='number'>3474</span>
         </div>
         <div className='about'>Completed Projects</div> 
          </div>
        </div>
      </div>
    </div>
  );
};
export default Blank;
