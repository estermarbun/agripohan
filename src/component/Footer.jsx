import React from "react";
import Promo1 from "../assets/img/2084182.jpg";
import Promo2 from "../assets/img/3772.jpg";
import Img1 from "../assets/img/2100022 (2).jpg";
import Img2 from "../assets/img/31686.jpg";
import locationImg from "../assets/img/pin.png";
export default () => {
  return (
    <footer className="footer py-4">
      <div className="container">
        <div className="row align-items-center darkGreenText">
          <div className="col-lg-4 text-lg-left">
            Copyright © 2020 PT. Pohan. All rights reserved.
          </div>
          <div className="col-lg-4 my-3 my-lg-0">
            <i className="fa fa-phone"></i> 0812-3027-3687
          </div>
          <div className="col-lg-4 my-3 my-lg-0">
            <i className="fa fa-map"></i> Siborong-borong, Sumatera Utara,
            Indonesia
          </div>
        </div>
      </div>
    </footer>
  );
};
