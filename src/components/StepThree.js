import React from 'react';

const StepThree = () => {
  return (
    <div>
      <form>
        <div class='form-row'>
          <p>
            You selected a booking for Move in/Out cleaning by Cleaning Book at
            3:30 pm on September 13, 2022. The price for the service is $145.00.
            Please provide your details in the form below to proceed with
            booking.
          </p>
          <div className='step3-btn'>
            <button className='btn-fb'>Log in with Facebook</button>
          </div>
          <div className='psn-dtl-grp'>
            <div className='prsn-detl'>
              <label>Full Name</label>
              <input
                type='name'
                class='form-control'
                id='inputEmail4'
                placeholder=''
              />
            </div>

            <div className='prsn-detl'>
              <label>Phone</label>
              <input
                type='number'
                class='form-control'
                id='inputEmail4'
                placeholder='+9155558999'
              />
            </div>

            <div className='prsn-detl'>
              <label>Email</label>
              <input
                type='email'
                class='form-control'
                id='inputEmail4'
                placeholder=''
              />
            </div>
          </div>
          <h1 className='step3add'>Address</h1>
          <div className='adrs-slt'>
            <div className='adrs-detl'>
              <label>Country</label>
              <input
                type='text'
                class='form-control'
                id='inputEmail4'
                placeholder=''
              />
            </div>
            <div className='adrs-detl'>
              <label>State/Region</label>
              <input
                type='text'
                class='form-control'
                id='inputEmail4'
                placeholder=''
              />
            </div>
            <div className='adrs-detl'>
              <label>City/Postal Code</label>
              <input
                type='text'
                class='form-control'
                id='inputEmail4'
                placeholder=''
              />
            </div>
            <div className='adrs-detl'>
              <label>Street Address</label>
              <input
                type='text'
                class='form-control'
                id='inputEmail4'
                placeholder=''
              />
            </div>
          </div>
          <div className='lst-mnu'>
            <label className='lst-lft'>Region We Work</label>
            <select class='bookly-custom-field'>
              <option value=''></option>
              <option value='Brooklyn'>Brooklyn</option>
              <option value='States Island'>States Island</option>
              <option value='Bronx'>Bronx</option>
              <option value='Manhattan'>Manhattan</option>
              <option value='Jersey City'>Jersey City</option>
              <option value='West New York'>West New York</option>
              <option value='Union City'>Union City</option>
              <option value='North Bergen'>North Bergen</option>
              <option value='Weehawken'>Weehawken</option>
            </select>
          </div>
        </div>
      </form>
    </div>
  );
};
export default StepThree;