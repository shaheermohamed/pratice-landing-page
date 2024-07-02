import React from "react";
import "../scss/landingPage.scss";
const LandingPage = () => {
  return (
    <div className="bg-container">
      <header className="header-container">
        <div className="header-content">
          <h3 className="header-text">Home</h3>
          <h3 className="header-text">Features</h3>
          <h3 className="header-text">Pricing</h3>
          <h3 className="header-text">Blog</h3>
        </div>
      </header>
      <section className="section-container">
        <div>
          <h4>Startup 3</h4>
          <h1>Forget About Code</h1>
          <h4>
            Startup Framework gives you complete freedom over your creative
            process — you don’t have to think about any technical aspects. There
            are no limits and absolutely no coding.{" "}
          </h4>
        </div>

        <div className="dot-container">
          <span className="dot-span-active" />
          <span className="dot-span-inactive"></span>
          <span className="dot-span-inactive"></span>
          <span className="dot-span-inactive"></span>
          <span className="dot-span-inactive"></span>
        </div>
        <div>
          <button className="section-container-btn">Create an Account</button>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
