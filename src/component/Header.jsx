import React from "react";

export default () => {
  return (
    <header className="masthead">
      <div className="container">
        <div className="masthead-subheading greenBorder">
          Welcome To Pohan Website!
        </div>
        <div className="masthead-heading text-uppercase greenBorder">
          It's Nice To Meet You
        </div>
        <a
          className="btn btn-primary btn-xl text-uppercase js-scroll-trigger"
          href="../component/Login.jsx"
        >
          Tell Me More
        </a>
      </div>
    </header>
  );
};
