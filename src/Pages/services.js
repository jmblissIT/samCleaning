import React from 'react'
import service1 from '../components/assets/images/service_1.jpg';
import service2 from '../components/assets/images/service_2.jpg';
import service3 from '../components/assets/images/service_3.jpg';
import service4 from '../components/assets/images/service_4.jpg';
import service5 from '../components/assets/images/service_5.jpg';
import service6 from '../components/assets/images/service_6.png';

const Service = () => {
    return(
        <>
        <div>
            <div className='row'>
                <div className='col-md-4'>
                    <h1>Offering The Best Cleaning Services</h1>
                </div>
                <div className='col-md-8'>
                    <p>simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type</p>
                </div>
            </div>
        </div>
        <div>
            <section>
                <div className='row'>
                    <div className='col-md-4'>
                        <img src={service1} alt="office cleaning"></img>
                        <h4>Office Cleaning</h4>
                    </div>
                    <div className='col-md-4'>
                        <img src={service2} alt="construction cleaning"></img>
                        <h4>Post Construction Cleaning</h4>
                    </div>
                    <div className='col-md-4'>
                        <img src={service3} alt="construction protection"></img>
                        <h4>Construction Protection</h4>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-4'>
                        <img src={service4} alt="move inout cleaning"></img>
                        <h4>Move In / Out Cleaning</h4>
                    </div>
                    <div className='col-md-4'>
                        <img src={service5} alt="deep cleaning"></img>
                        <h4>Deep Cleaning</h4>
                    </div>
                    <div className='col-md-4'>
                        <img src={service6} alt="regular cleaning"></img>
                        <h4>Regular Cleaning</h4>
                    </div>
                </div>
            </section>
        </div>
        </>
        
    );
}
export default Service;