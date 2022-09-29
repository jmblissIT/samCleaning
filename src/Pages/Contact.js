import React from 'react'

const Contact = () => {
    return(
        <>
        <div className='contactform' >
            <div className='container-fluid'>
                <div className='row'>    
                    <h1 className= "min"><b>Contact Us</b></h1>
                </div>
            </div>
            <div className='container'>
                <div className='row centerrow'>
                    <div className='box'>
                        <div className='locinfo'>
                            <div><i class="fa fa-map-marker" aria-hidden="true"></i></div>
                            <div>
                                <h5 className="lineH">ADDRESS</h5>
                                <p className="lineP">2294 Oak Street,Old Forge,
                                <br />New York 13420.</p>
                            </div>
                        </div>
                        
                        <hr />
                        <div className='locinfo'>
                            <div><i class="fa fa-phone" aria-hidden="true"></i></div>
                            <div>
                                <h5 className="lineH">MOBILE</h5>
                                <p className="lineP">315-369-5732</p>
                            </div>

                        </div>
                        <hr />
                        <div className='locinfo'>
                            <div><i class="fa fa-envelope" aria-hidden="true"></i></div> 
                            <div>
                                <h5 className="lineH">EMAIL</h5>
                                <p classname="linep">xyz@gmail.com</p>
                            </div>
                        </div>    
                        <hr />
                        <div className='locinfo'>
                            <div><i class="fa fa-clock-o" aria-hidden="true"></i></div>
                            <div>
                                <h5 className="lineH">OPENING TIMES</h5>
                                <p className="lineP">Monday to Saturday 11am-5pm
                                <br />Sunday-Closed</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className='formbox'>
                        <form>
                            <p className="rightbox"><input type="text" className="yourname" placeholder="Your Name" /></p>
                            <p className="rightbox"><input type="email" className="yourname" placeholder="Your Email" /></p>
                            <p className="rightbox"><input type="text" className="yourname" placeholder="Subject" /></p>
                            <p className="righttextarea"><textarea className="yourname" placeholder="Your Message"></textarea></p>
                            <input className="submitbutton" type="submit" value="SUBMIT" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};
export default Contact;