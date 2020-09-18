import React from "react";

export default () => {
  return (
    <section className="page-section" id="login">
      <div className="container">
        <div className="text-center">
          <h2 className="section-heading text-uppercase">Welcome</h2>
        </div>
        <form id="loginForm" name="sentMessage" noValidate="novalidate">
          <div className="row align-items-stretch mb-5">
            <div className="col-md-6">
              <div className="form-group">
                <label>Email / Username</label>
                <input
                  className="form-control"
                  id="name"
                  type="text"
                  placeholder="Your Email / Username *"
                  required="required"
                  data-validation-required-message="Please enter your email / username."
                />
                <p className="help-block text-danger"></p>
              </div>
              <div className="form-group mb-md-0">
                <input
                  className="form-control"
                  id="password"
                  type="password"
                  placeholder="Your Password *"
                  required="required"
                  data-validation-required-message="Please enter your password."
                />
                <p className="help-block text-danger"></p>
              </div>
            </div>
          </div>
          <div className="text-center">
            <button
              className="btn btn-primary btn-xl text-uppercase"
              id="sendMessageButton"
              type="reset"
            >
              Reset
            </button>
            <button
              className="btn btn-primary btn-xl text-uppercase"
              id="sendMessageButton"
              type="submit"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};
