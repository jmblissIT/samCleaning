import React from 'react';
import SAMS from './assets/images/SAMS-01-300x191.png';


const Footer = () => {
  return (
 <div className="footer">
<div className="container">
  <div className="top-footer">
    <div className="footer-widget1">
       <div className="footer-image">
        <a href=""><img src={SAMS}  /></a>
       </div>
    </div>
    <div className="footer-widget2">
      <div className="menu1">
        <h4>MORE</h4>
        <div className="menu1-content">
          <ul className="menu-items">
            <li className="menu-item">HOME</li>
            <li className="menu-item">ABOUT US</li>
            <li className="menu-item">BOOKING</li>
            <li className="menu-item">SERVICES</li>
            <li className="menu-item">CONTACT</li>
            <li className="menu-item">FAQ</li>
          </ul>
        </div>
      </div>
    </div>
    <div className="footer-widget3">
      <div className="menu2">
        <h4>WHERE WE CLEAN</h4>
        <div className="menu2-content">
          <ul className="menu-items">
            <li className="menu-item">NEW YORK</li>
            <li className="menu-item">BROOKLYN</li>
            <li className="menu-item">QUEENS</li>
            <li className="menu-item">MANHATTAN</li>
            <li className="menu-item">JERSEY CITY</li>
            <li className="menu-item">NORTH BERGEN</li>
            <li className="menu-item">WEEHAWKEN</li>
          </ul>
        </div>
      </div>
    </div>
    <div className="footer-widget4">
      <div className="menu3">
        <h4>WORKING HOURS</h4>
        <div className="menu3-content">
          <ul className="menu-items">
            <li className="menu-item">MONDAY TO SATURDAY – 11AM – 5PM</li>
            <li className="menu-item">SUN: CLOSED
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  
</div>
<div className="bottom-footer">
    <p>Designed by <a href="">SAM'S Themes</a> | Powered by <a href="">REACT</a> </p>
  </div>
</div> 

  );
};
export default Footer;
