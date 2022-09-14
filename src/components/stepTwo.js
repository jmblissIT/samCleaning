import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const StepTwo = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div>
      <form>
        <div class='form-row'>
          <div class='form-group '>
            <p className='spl-2-stp'>
              Below you can find a list of available time slots for<b> Move in/Out
              cleaning</b>. Click on a time slot to proceed with booking.
            </p>
            <div className='cldr'>
              <Calendar />
             
            </div>
           
          </div>
        </div>
      </form>
    </div>
  );
};
export default StepTwo;