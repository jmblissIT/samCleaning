import React from 'react';
import sam from './assets/images/SAMS-01-300x191.png';
import { Link } from 'react-router-dom';


const Navigation = () => {
  return (
    <div className="navigation">
       <div className="container">
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <Link to='' ><img src={sam} className="cleanimg"  /></Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item ">
      <Link to='' className="nav-link" >HOME</Link>
      </li>
      <li className="nav-item">
      <Link to='/about' className="nav-link">  ABOUT US</Link>
      </li>
      <li className="nav-item dropdown">
      <Link to='/Service' className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          SERVICES
        </Link>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
        <Link to='' className="dropdown-item nav-link">REGULAR CLEANING</Link>
        <Link to='' className="dropdown-item nav-link" >DEEP CLEANING</Link>
        <Link to='' className="dropdown-item nav-link">POST CONSTRUCTION</Link>
        <Link to='' className="dropdown-item nav-link">CLEANING</Link>
        <Link to='' className="dropdown-item nav-link" >MONE IN / OUT CLEANING</Link>
        <Link to='' className="dropdown-item nav-link" >OFFICE CLEANING</Link>
        <Link to='' className="dropdown-item nav-link" >CONSTRUCTION</Link>
        <Link to='' className="dropdown-item nav-link" >PROTECTION</Link>
          <div className="dropdown-divider"></div>
          <Link to='' className="dropdown-item nav-link" >Something else here</Link>
        </div>
      </li>
      <li className="nav-item">
      <Link to='/contact' className="nav-link">CONTACT US</Link>
      </li>
      <li className="nav-item">
      <Link to='/FAQ' className="nav-link">FAQ</Link>
      </li>
      
      <Link to='/Book'><button className="bookbtn">BOOK NOW</button></Link>
    
    </ul>
  </div>
</nav>
</div>
</div>
  );
};
export default Navigation;
