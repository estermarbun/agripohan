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
    <div className="container" style={{ marginTop: "7%", textAlign: "left" }}>
      <div>
        <h3
          className="section-heading text-uppercase"
          style={{ color: "#008000" }}
        >
          EDIT DATA ANGGOTA
        </h3>
        <p>Daftar Anggota di PT. Pohan Agriculture</p>
        <form id="form-group" name="sentMessage" noValidate="novalidate">
          <div className="row align-items-stretch mb-5">
            <div
              className="col-md-6"
              style={{ textAlign: "left", marginTop: "10px" }}
            >
              <div className="form-group">
                <label className="greenBoldText">Anggota Name</label>
                <input
                  className="form-control"
                  id="name"
                  type="text"
                  placeholder={dataTable[0].nama}
                  required="required"
                  data-validation-required-message="Please enter investor name."
                />
                <p className="help-block text-danger"></p>
              </div>
              <div className="form-group mb-md-0">
                <label className="greenBoldText">Anggota Phone</label>
                <input
                  className="form-control"
                  id="phone"
                  type="tel"
                  placeholder={dataTable[0].phone}
                  required="required"
                  data-validation-required-message="Please enter your investor number."
                />
                <p className="help-block text-danger"></p>
              </div>
              <div className="form-group mb-md-0">
                <label className="greenBoldText">Anggota Address</label>
                <textarea
                  className="form-control"
                  id="message"
                  placeholder={dataTable[0].address}
                  required="required"
                  data-validation-required-message="Please enter a message."
                  style={{ height: "auto" }}
                ></textarea>
                <p className="help-block text-danger"></p>
              </div>
            </div>
          </div>
          <div style={{ textAlign: "left" }}>
            <Link to="/anggotadetail">
              <button
                className="btn btn-header backButton"
                id="sendMessageButton"
                type="submit"
              >
                Back
              </button>
            </Link>
            <Link to="/anggota">
              <button
                className="btn btn-header editButton"
                id="sendMessageButton"
                type="submit"
              >
                Save
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};
