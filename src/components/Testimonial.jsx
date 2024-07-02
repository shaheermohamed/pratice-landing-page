import React from "react";
import "../scss/testimonial.scss";
const Testimonial = () => {
  return (
    <div className="testimonial-container">
      <div className="testimonial-div">
        <h1>Our Happy Clients</h1>
        <div className="testi-div">
          <div className="testi-each">
            <div>
              <img
                src={require("../assets/users/Userpic1.png")}
                alt="sd"
                style={{ width: "70px", height: "70px" }}
              />
            </div>
            <div>
              <h4>
                Get a fully retina ready site when you build with Startup
                Framework. Websites look sharper and more gorgeous on devices
                with retina display support
              </h4>
              <h3>Rayhan Curran</h3>
            </div>
          </div>
          <div className="testi-each">
            <div>
              <img
                src={require("../assets/users/Userpic2.png")}
                alt="sd"
                style={{ width: "70px", height: "70px" }}
              />
            </div>
            <div>
              <h4>
                As a business targeting high net worth individuals, we were
                looking for a slick, cool and mini-malistic design for our
                website
              </h4>
              <h3>Kayley Frame</h3>
            </div>
          </div>
          <div className="testi-each">
            <div>
              <img
                src={require("../assets/users/Userpic3.png")}
                alt="sd"
                style={{ width: "70px", height: "70px" }}
              />
            </div>
            <div>
              <h4>
                The most important part of the Startup Framework is the samples
              </h4>
              <h3>Gene Whitfield</h3>
            </div>
          </div>
          <div className="testi-each">
            <div>
              <img
                src={require("../assets/users/Userpic4.png")}
                alt="sd"
                style={{ width: "70px", height: "70px" }}
              />
            </div>
            <div>
              <h4>
                I’ve built my website with Startup just in one day, and it was
                ready-to-go.
              </h4>
              <h3>Allan Kim</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
