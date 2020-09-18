import React from "react";
import Login from "../component/Login";
import Promo1 from "../assets/img/2084182.jpg";
import Promo2 from "../assets/img/3772.jpg";
import Img1 from "../assets/img/2100022 (2).jpg";
import Img2 from "../assets/img/31686.jpg";
import locationImg from "../assets/img/pin.png";
import { Link, useHistory } from "react-router-dom";

export default () => {
  const history = useHistory();
  const loginDirect = () => {
    let path = "../component/Login.jsx";
    history.push(path);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
      <div className="container">
        <div className="row">
          {" "}
          <div className="col-md-2">
            <img src={Img1} width="60px" height="60px" alt="logo" />
          </div>
          <div className="col-md-10" style={{ color: "white" }}>
            <h4>PT. Pohan Agriculture</h4>
            <p>Penghasil tanaman jangka pendek.</p>
          </div>
        </div>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav text-uppercase ml-auto">
            <li className="nav-item">
              <a href="#">
                <button className="btn btn-header" type="button">
                  Home
                </button>
              </a>
            </li>
            <li className="nav-item">
              <a href="#services">
                <button className="btn btn-header" type="button">
                  Promo
                </button>
              </a>
            </li>
            <li className="nav-item">
              <a href="#portfolio">
                <button className="btn btn-header" type="button">
                  Product
                </button>
              </a>
            </li>
            <li className="nav-item">
              <a href="#about">
                <button className="btn btn-header" type="button">
                  About
                </button>
              </a>
            </li>

            <li className="nav-item">
              <a href="#contact">
                <button className="btn btn-header" type="button">
                  Inquiry
                </button>
              </a>
            </li>
            <li className="nav-item">
              <button onClick={loginDirect}>
                <i className="fa fa-user" /> Login{" "}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
