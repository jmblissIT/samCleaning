import React from 'react';
// import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const StepOne = (state, setState) => {
  return (
    <div className='multi-step-form'>
      <div className='mult-resp-form'>
        <Form>
          <h2 className='form-step-ome-left'>Please Select Service:</h2>
          <div className='width-hastobe'>
            <div className='tbltbl'>
              <Form.Group controlId='formBasicEmail'>
                <Form.Label>Category</Form.Label>
                <select className='slt-slt'>
                  <option value='0'>Select category</option>
                  <option value='8'>Studio</option>
                  <option value='9'>1 Bedroom</option>
                  <option value='10'>2 Bedroom</option>
                  <option value='11'>3 Bedroom</option>
                  <option value='16'>4 Bedroom</option>
                  <option value='17'>5 Bedroom</option>
                  <option value='12'>Office Less Then 1000 SF</option>
                  <option value='13'>Office 1500 SF</option>
                  <option value='14'>Office 2000 SF</option>
                  <option value='15'>Office 3000 SF</option>
                  <option value='18'>Hourly cleaning</option>
                </select>
              </Form.Group>
            </div>

            <Form.Group className='mb-3' controlId='formBasicPassword'>
              <Form.Label>Service</Form.Label>
              <select className='slt-slt'>
                <option value='0'>Select service</option>
                <option value='9'>Standard Cleaning</option>
                <option value='11'>Deep Cleaning</option>
                <option value='12'>Move in/Out cleaning</option>
                <option value='14'>Post Construction Cleaning</option>
                <option value='15'>Construction Protection</option>
                <option value='16'>Hourly Cleaning</option>
                <option value='21'>Standard Cleaning</option>
                <option value='22'>Deep Cleaning</option>
                <option value='24'>Construction Protection</option>
                <option value='26'>Deep Cleaning</option>
                <option value='27'>Deep Cleaning</option>
                <option value='28'>Standard Cleaning</option>
                <option value='29'>Move in/Out cleaning</option>
                <option value='31'>Deep Cleaning</option>
                <option value='32'>Construction Protection</option>
                <option value='34'>Hourly Cleaning</option>
                <option value='35'>Hourly Cleaning</option>
                <option value='36'>Deep Cleaning</option>
                <option value='37'>Deep Cleaning</option>
                <option value='38'>Standard Cleaning</option>
                <option value='39'>Standard Cleaning</option>
                <option value='40'>Standard Cleaning</option>
                <option value='41'>Construction Protection</option>
                <option value='42'>Construction Protection</option>
                <option value='44'>Hourly Cleaning Rate 15$/hr</option>
              </select>
            </Form.Group>
          </div>
          <div className='go-left'>
            <Form.Group className='mb-3' controlId='formBasicPassword'>
              <Form.Label className='availabe'>I am availabe or after </Form.Label>
              <input type='date' placeholder='23 March' className='date'></input>
            </Form.Group>
            <div className='go-center'>
            <Form.Group className=' weekday' controlId='formBasicPassword'>
              <Form.Label> </Form.Label>
              <div class='form-check form-check-inline'>
                <label class='form-check-label abslt' for='inlineRadio1'>
                  Mon
                </label>
                <input
                  class='form-check-input'
                  type='checkbox'
                  name='inlineRadioOptions'
                  id='inlineRadio1'
                  value='option1'
                />
              </div>
              <div class='form-check form-check-inline'>
                <label class='form-check-label abslt' for='inlineRadio1'>
                  Tue
                </label>
                <input
                  class='form-check-input'
                  type='checkbox'
                  name='inlineRadioOptions'
                  id='inlineRadio1'
                  value='option1'
                />
              </div>
              <div class='form-check form-check-inline'>
                <label class='form-check-label abslt' for='inlineRadio1'>
                  Wed
                </label>
                <input
                  class='form-check-input'
                  type='checkbox'
                  name='inlineRadioOptions'
                  id='inlineRadio1'
                  value='option1'
                />
              </div>
              <div class='form-check form-check-inline'>
                <label class='form-check-label abslt' for='inlineRadio1'>
                  Thu
                </label>
                <input
                  class='form-check-input'
                  type='checkbox'
                  name='inlineRadioOptions'
                  id='inlineRadio1'
                  value='option1'
                />
              </div>
              <div class='form-check form-check-inline'>
                <label class='form-check-label abslt' for='inlineRadio1'>
                  Sat
                </label>
                <input
                  class='form-check-input'
                  type='checkbox'
                  name='inlineRadioOptions'
                  id='inlineRadio1'
                  value='option1'
                />
              </div>
              <div class='form-check form-check-inline'>
                <label class='form-check-label abslt' for='inlineRadio1'>
             Sun
                </label>
                <input
                  class='form-check-input'
                  type='checkbox'
                  name='inlineRadioOptions'
                  id='inlineRadio1'
                  value='option1'
                />
              </div>
            </Form.Group>
          </div>
          </div>
         
        </Form>
      </div>
    </div>
  );
};
export { StepOne };