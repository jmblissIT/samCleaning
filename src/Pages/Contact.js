import React from 'react'

const Contact = () => {
    return(
        <div className='contactform' >
            <div className='container-fluid'>
                <div className='row'>    
                    <h1 className= "min"><b>Contact Us</b></h1>
                </div>
            </div>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-6  box'>
                        <div className='locinfo'>
                            <div><i class="fa fa-map-marker" aria-hidden="true"></i></div>
                            <div>
                                <h5>ADDRESS</h5>
                                <p>2294 Oak Street,Old Forge,
                            New York 13420.</p>
                            </div>
                        </div>
                        
                        <hr />
                        <div className='locinfo'>
                            <div><i class="fa fa-mobile" aria-hidden="true"></i></div>
                            <div>
                                <h5>MOBILE</h5>
                                <p>315-369-5732</p>
                            </div>

                        </div>
                        <hr />
                        <div className='locinfo'>
                            <div><i class="fa fa-envelope" aria-hidden="true"></i></div> 
                            <div>
                                <h5>EMAIL</h5>
                                <p>xyz@gmail.com</p>
                            </div>
                        </div>    
                        <hr />
                        <div className='locinfo'>
                            <div><i class="fa fa-clock-o" aria-hidden="true"></i></div>
                            <div>
                                <h5>OPENING TIMES</h5>
                                <p>Monday to Saturday 11am-5pm
                               Sunday-Closed</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Contact;