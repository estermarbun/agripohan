import React from "react";
import Img1 from "../assets/img/2100022 (2).jpg";
import Investor from "../component/Investor"
import Anggota from "../component/Anggota"
import Petani from "../component/Petani"
import Keuangan from "../component/Keuangan"
import { Link } from "react-router-dom";

export default () => {
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
              
            <Link to="/anggota">
                <button className="btn btn-header" type="button">
                  Anggota
                </button>
                </Link>
            </li>
            <li className="nav-item">
            <Link to="/investor">
                <button className="btn btn-header" type="button">
                  Investor
                </button>
                </Link>
            </li>
            <li className="nav-item">
            <Link to="/petani">
                <button className="btn btn-header" type="button">
                  Petani
                </button>
                </Link>
            </li>
            <li className="nav-item">
            <Link to="/keuangan">
                <button className="btn btn-header" type="button">
                  Keuangan
                </button>
                </Link>
            </li>
          </ul>       
        </div>
      </div>
    </nav>
  );
};
