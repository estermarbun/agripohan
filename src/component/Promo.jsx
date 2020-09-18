import React from "react";
import Promo1 from "../assets/img/2084182.jpg";
import Promo2 from "../assets/img/3772.jpg";
import Img1 from "../assets/img/2100022 (2).jpg";
import Img2 from "../assets/img/31686.jpg";
import locationImg from "../assets/img/pin.png";
export default () => {
  return (
    <section className="page-section" id="services">
      <div className="container">
        <div className="text-center">
          <h2 className="section-heading text-uppercase darkGreenText">
            PROMO
          </h2>
          <h3
            className="section-subheading text-muted"
            style={{ color: "#008000" }}
          >
            Nikmati promo menarik sekarang juga!
          </h3>
        </div>
        <div className="row text-center">
          <div className="col-md-3">
            <img src={Promo1} width="250px" height="250px" alt="promo" />
          </div>
          <div className="col-md-3">
            <img src={Promo2} width="250px" height="250px" alt="promo" />
          </div>
          <div className="col-md-3">
            <img src={Promo1} width="250px" height="250px" alt="promo" />
          </div>
          <div className="col-md-3">
            <img src={Promo2} width="250px" height="250px" alt="promo" />
          </div>
        </div>
      </div>
    </section>
  );
};
