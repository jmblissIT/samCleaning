import React from 'react';

import StepSelector from '../components/StepSelector';
import Banner from '../components/Banner';
import PerfectPlan from '../components/Perfectplan';
import Services from '../components/Services';
import Guidance from '../components/Guidance';
import Blank from '../components/Blank';

const Home = () => {
  return (
    <div className='homepage'>
      <div id="step_select" className='scroll-top'><StepSelector /></div>
      <Banner />
      <PerfectPlan />
      <Services />
      <Guidance />
      <Blank />
    </div>
  );
};

export default Home;
