import React from "react";
import { Link } from "react-router-dom";
import imgView from "../assets/img/eye.png";
import imgEdit from "../assets/img/paper.png";
import imgDelete from "../assets/img/rubbish.png";

export default () => {
  const dataTable = [
    {
      id: 1,
      nama: "Rendy Simarmata",
      phone: "082294696947",
      address: "Jl. Sudirman Blok A No.212, Batam Center, Kepulauan Riau",
    },
  ];
  return (
    <div className="container" style={{ marginTop: "7%" }}>
      <div>
        <h3
          className="section-heading text-uppercase"
          style={{ color: "#008000" }}
        >
          DETAIL DATA PETANI
        </h3>
        <p>Daftar Petani di PT. Pohan Agriculture</p>

        <div
          className="form-group"
          style={{ textAlign: "justify", marginTop: "5%" }}
        >
          <div className="row">
            <div className="col-md-4 greenBoldText">
              <label>ID</label>
            </div>
            <div className="col-md-1 greenBoldText">
              <label>:</label>
            </div>
            <div className="col-md-7">{dataTable[0].id}</div>
          </div>
          <div className="row">
            <div className="col-md-4 greenBoldText">
              <label>Nama</label>
            </div>
            <div className="col-md-1 greenBoldText">
              <label>:</label>
            </div>
            <div className="col-md-7">{dataTable[0].nama}</div>
          </div>
          <div className="row">
            <div className="col-md-4 greenBoldText">
              <label>Nomor Telepon</label>
            </div>
            <div className="col-md-1 greenBoldText">
              <label>:</label>
            </div>
            <div className="col-md-7">{dataTable[0].phone}</div>
          </div>
          <div className="row">
            <div className="col-md-4 greenBoldText">
              <label>Alamat</label>
            </div>
            <div className="col-md-1 greenBoldText">
              <label>:</label>
            </div>
            <div className="col-md-7">{dataTable[0].address}</div>
          </div>
          <div className="row">
            <div className="col-md-4"></div>
            <div className="col-md-1"></div>
            <div className="col-md-7">
              <Link to="/petani">
                <button className="btn btn-header backButton" type="button">
                  Back
                </button>
              </Link>
              <Link to="/petaniedit">
                <button className="btn btn-header editButton" type="button">
                  Edit
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
