import React from "react";
import "../scss/featuresPage.scss";
const FeaturesPage = () => {
  return (
    <div className="features-container">
      <div className="features-main-div">
        <div className="image-div"></div>
        <div className="content-div">
          <div className="content-div-1">
            <h1>We Create Something New</h1>
            <h4>
              We have created a new product that will help designers, developers
              and companies create websites for their startups quickly and
              easily.
            </h4>
          </div>
          <div className="content-div-2">
            <div>
              <h1>30 New feature pages</h1>
              <h4>
                Startup Framework contains components and complex blocks which
                can easily.
              </h4>
            </div>
            <div>
              <h1>Useful Symbol Components</h1>
              <h4>
                Samples will show you the feeling on how to play around using
                the components.
              </h4>
            </div>
          </div>
        </div>
        <div className="slider-div">
          <div className="features-dot-container">
            <span className="dot-span-active" />
            <span className="dot-span-inactive"></span>
            <span className="dot-span-inactive"></span>
            <span className="dot-span-inactive"></span>
            <span className="dot-span-inactive"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesPage;
