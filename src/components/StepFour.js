import React from 'react';

const StepFour = () => {
  return (
    <div>
      <form>
        <div class='form-row'>
          <p>Please tell us how you would like to pay:</p>
          <div className='input-left'>
            <input type='radio' id='contactChoice1' checked />
            <label className='will-pay' for='contactChoice1'> will Pay locally.</label>
          </div>
        </div>
      </form>
    </div>
  );
};
export default StepFour;