import React, { useState } from 'react';
import { Stepper } from 'react-form-stepper';
import Button from 'react-bootstrap/Button';
import { StepOne } from '../components/stepone';
import StepTwo from '../components/stepTwo';
import StepThree from './StepThree';
import StepFour from './StepFour';
import StepFive from '../components/stepFive';

const StepSelector = () => {
  const AddState = () => {
    setState(state + 1);
    console.log(state);
  };

  const SubsState = () => {
    setState(state - 1);
    console.log(state);
  };
  const prevStyle = { background: '#33c3f0' };
  const nextStyle = { background: '#33c3f0' };
  const [state, setState] = useState(1);
  const steps = [
    { name: 'StepOne', component: <StepOne /> },
    { name: 'StepTwo', component: <StepTwo /> },
    { name: 'StepThree', component: <StepThree /> },
    { name: 'StepFour', component: <StepFour /> },
  ];

  return (
    <div className='form-edit-plb '>
      {' '}
      {/* <Multistep
        activeStep={0}
        showNavigation={false}
        steps={steps}
        prevStyle={prevStyle}
        nextStyle={nextStyle}
        
      />
      ; */}
      <div
      // style={{
      //   backgroundColor:
      //     state === 0
      //       ? 'green'
      //       : state === 1
      //       ? 'green'
      //       : state === 2
      //       ? 'green'
      //       : '100%',
      //   backgroundColor: state === 3 ? 'green' : 'var(--purple)',
      // }}
      >
        <Stepper
          steps={[
            {
              label: ' 1. Service',
              component: <StepOne />,
            },
            { label: '2. Time', component: <StepTwo /> },
            { label: '3. Details' },
            { label: '4. Payment' },
            { label: '5. Done' },
          ]}
          activeStep={state - 1}
        />
      </div>
      {(() => {
        switch (state) {
          case 0:
            if (state <= 0) {
              window.location.reload();
            }
          case 1:
            return <StepOne state={state} />;

          case 2:
            return <StepTwo />;
          case 3:
            return <StepThree />;
          case 4:
            return <StepFour />;
          case 5:
            return <StepFive />;
          case 6:
            if (state >= 6) {
              window.location.reload();
            }
            return;

          default:
            return <StepOne />;
        }
      })()}{' '}
      {state !== 1 ? (
       
        <Button
          value='Button'
          variant='primary'
          className='sbt-mty'
          type='submit'
          onClick={() => SubsState()}
        >
          {' '}
          Back{' '}
        </Button>
        
      ) : (
        ''
      )}
      
      <Button
        variant='primary'
        className='sbt-mty'
        type='submit'
        onClick={() => AddState()}
      >
        {state === 5 ? 'over' : 'Next'}
      </Button>
    
    </div>
  );
};

export default StepSelector;