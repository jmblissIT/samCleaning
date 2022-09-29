import React from "react";
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";
import helen from '../components/assets/images/helen_smith.jpg';
import john from '../components/assets/images/john_jones.png';
import slider1 from '../components/assets/images/image_3.jpg';
import slider2 from '../components/assets/images/image_2.jpg';
import slider3 from '../components/assets/images/image_1.jpg';
import exp from '../components/assets/images/exp.png';
import background from '../components/assets/images/background.png';
import professional from '../components/assets/images/prof.png';

const about = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div>
      <section className="about-section">
        <div className="about-title">
          <h1 className= "min">About Us</h1>
        </div>
      </section>
      <section>
      <div className="container">  
        <div className="row">
          <div className="col-md-6 aboutbox">
            <h4 className="mainheading">The MyClean Story</h4>
            <p className="paragraph">
              Lorem Ipsum has been the industry’s standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not
              only five centuries, but also the leap into electronic
              typesetting, remaining essentially unchanged. It was popularised
              in the 1960s with the release of Letraset sheets containing Lorem
              Ipsum passages, and more recently with desktop publishing software
              like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
          </div>
          <div className="col-md-6 aboutbox">
            <h4 className="mainheading">Our Mission</h4>
            <p className="paragraph">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don’t look even
              slightly believable. If you are going to use a passage of Lorem
              Ipsum, you need to be sure there isn’t anything embarrassing
              hidden in the middle of text.
            </p>
            <p className="paragraph">Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer
               took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
               but also the leap into electronic typesetting, remaining essentially unchanged.
            </p>
            <p className="paragraph">
            It was popularised in the 1960s with the release of Letraset sheets containing
             Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>

          </div>
        </div>
      </div>  
      </section>
      <section className="midbox">
        <div className="container">
        <div className="row">
          <div>
            <h1 className="whitetext">A trusted cleaning service in new york.</h1>
            <p className="textcolor">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don’t look even
              slightly believable.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3">
          <div><img src={exp} alt="experience"/></div>
            <h5 className="white">Experienced</h5>
          </div>
          <div className="col-md-3">
          <div><img src={professional} alt="professional"/></div>
            <h5 className="white">Professional</h5>
          </div>
          <div className="col-md-3">
          <div><img src={background} alt="background"/></div>
            <h5 className="white">Background & reference checked</h5>
          </div>
          <div className="col-md-3">
          <div><img src={exp} alt="interview in person"/></div>
            <h5 className="white">Interviewed in-<br />person</h5>
          </div>
        </div>
      </div>
      </section>
      <section>
        <div className="row">
          <h1 className="thirdpart">Trusted by all our customers.</h1>
        </div>
        <div className="about-slider">
          <Carousel responsive={responsive} infinite={true}
              itemClass="carouselItem"
              autoPlay={true} showDots={true} arrows={false}>
            <div className="slider-1">
              <div><img src={helen} alt="helen"></img></div>
              <div>
                <h3>HELEN SMITH</h3>
                <h4>CEO</h4>
                <p>Pellentesque habitant morbi tristique senectus sed netus eft malesuada fames ac turpis egestas Aenean non tell Donec pede quam placerat ristique faucibus poserw ulet elobortis justo. Etiam nunc sit. Fusce non pede non erat varius lacinia nunc et ligula.</p>
              </div>
            </div>
            <div className="slider-1">
              <div><img src={john} alt="john"></img></div>
              <div>
                <h3>John Jones</h3>
                <h4>Manager</h4>
                <p>Pellentesque habitant morbi tristique senectus sed netus eft malesuada fames ac turpis egestas Aenean non tell Donec pede quam placerat ristique faucibus poserw ulet elobortis justo. Etiam nunc sit. Fusce non pede non erat varius lacinia nunc et ligula.</p>
              </div>
            </div>
            <div className="slider-1">
              <div><img src={slider1} alt="slider1"></img></div>
              <div>
                <h3>Would recommend to anyone</h3>
                <p>I love your product! I would recommend this to anyone. What a great find!</p>
              </div>
            </div>
            <div className="slider-1">
              <div><img src={slider2} alt="slider2"></img></div>
              <div>
                <h3>Excellent Customer Support</h3>
                <p>I receieved excellent customer support, and quickly. Thank you so much!</p>
              </div>
            </div>
            <div className="slider-1">
              <div><img src={slider3} alt="slider3"></img></div>
              <div>
                <h3>This is a great product.</h3>
                <p>I needed a simple, easy-to-use way to add testimonials to my website and display them.  Easy Testimonials Pro did all of that and more!</p>
              </div>
            </div>
          </Carousel>
        </div>
      </section>
    </div>
  );
}
export default about;
