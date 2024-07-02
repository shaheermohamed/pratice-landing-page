import React from "react";
import "../scss/form.scss";
const Form = () => {
  return (
    <div className="form-content">
      <div className="form-main-div">
        <div className="form-content-div">
          <h1>We solve digital problems with an outstanding creative flare</h1>
          <h4>
            We have created a new product that will help designers, developers
            and companies create websites for their startups quickly and easily.
          </h4>
        </div>
        <div className="form-div">
          <div className="form-div-heading">
            <h3>SIGN UP</h3>
            <h3>LOGIN</h3>
          </div>
          <span
            style={{
              width: "100%",
              height: "1px",
              backgroundColor: "#EBEAED",
              display: "inline-block",
            }}
          />
          <div className="form-items-div">
            <input placeholder="Enter Email" />
            <input placeholder="Your Password" />
            <button style={{ backgroundColor: "#25DAC5" }}>
              Create An Account
            </button>

            <button style={{ backgroundColor: "#1DA1F2" }}>
              Login via Twitter
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
