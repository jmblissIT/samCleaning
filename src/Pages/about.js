import React from "react";
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";

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
          <h1>About Us</h1>
        </div>
      </section>
      <section>
        <div className="row">
          <div className="col-md-6">
            <h2>The MyClean Story</h2>
            <p>
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
          <div className="col-md-6">
            <h2>Our Mission</h2>
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don’t look even
              slightly believable. If you are going to use a passage of Lorem
              Ipsum, you need to be sure there isn’t anything embarrassing
              hidden in the middle of text.
            </p>
          </div>
        </div>
      </section>
      <section>
        <div className="row">
          <div>
            <h1>A trusted cleaning service in new york.</h1>
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don’t look even
              slightly believable.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3">
            <h4>Experienced</h4>
          </div>
          <div className="col-md-3">
            <h4>Professional</h4>
          </div>
          <div className="col-md-3">
            <h4>Background & reference checked</h4>
          </div>
          <div className="col-md-3">
            <h4>Interviewed in-person</h4>
          </div>
        </div>
      </section>
      <section>
        <div className="row">
          <h1>Trusted by all our customers.</h1>
        </div>
        <div>
          <Carousel responsive={responsive} infinite={true}
              itemClass="carouselItem"
              autoPlay={true} showDots={true} arrows={false}>
            <div>Item 1</div>
            <div>Item 2</div>
            <div>Item 3</div>
            <div>Item 4</div>
          </Carousel>
        </div>
      </section>
    </div>
  );
};

export default about;
