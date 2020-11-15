import React from "react";
import { Link } from "react-router-dom";
import imgView from "../assets/img/eye.png"
import imgEdit from "../assets/img/paper.png"
import imgDelete from "../assets/img/rubbish.png"

export default () => {
    const dataTable = [
        {id: 1, nama: "Rendy Simarmata", phone: "082294696947"},
        {id: 1, nama: "Rendy Simarmata", phone: "082294696947"},
        {id: 1, nama: "Rendy Simarmata", phone: "082294696947"},
        {id: 1, nama: "Rendy Simarmata", phone: "082294696947"},
        {id: 1, nama: "Rendy Simarmata", phone: "082294696947"},
        {id: 1, nama: "Rendy Simarmata", phone: "082294696947"},
        {id: 1, nama: "Rendy Simarmata", phone: "082294696947"},
        {id: 1, nama: "Rendy Simarmata", phone: "082294696947"},
        {id: 1, nama: "Rendy Simarmata", phone: "082294696947"},
        {id: 1, nama: "Rendy Simarmata", phone: "082294696947"},
        {id: 1, nama: "Rendy Simarmata", phone: "082294696947"},
        {id: 1, nama: "Rendy Simarmata", phone: "082294696947"},
        {id: 1, nama: "Rendy Simarmata", phone: "082294696947"},
        {id: 1, nama: "Rendy Simarmata", phone: "082294696947"},
        {id: 1, nama: "Rendy Simarmata", phone: "082294696947"},
    ]
    return (
        
        <div className="container" style={{marginTop: "7%"}}>
            <div>
            <h3
            className="section-heading text-uppercase"
            style={{ color: "#008000" }}
          >
            DATA INVESTOR
          </h3>
            <p>Daftar Investor di PT. Pohan Agriculture</p>
          <table className="table">
              <thead>
                  <tr>
                    <th>No.</th>
                    <th>Investor Name</th>
                    <th>Phone Number</th>
                    <th>Action</th>
                  </tr>
              </thead>
                <tbody>
                  {dataTable.map((data, i ) => {
                      return (
                          <tr key={i}>
                              <td>{i+1}</td>
                              <td>{data.nama}</td>
                              <td>{data.phone}</td>   
                              <td>
                                <Link to="/investordetail">
                                  <button className="imgButton"><img src={imgView} alt="view" width="30px"/>
                                    </button> </Link>  
                                <Link to="/investoredit">
                                <button className="imgButton"><img src={imgEdit} alt="edit" width="30px"/>
                                    </button> 
                                </Link>
                                     
                                    <button className="imgButton"><img src={imgDelete} alt="delete" width="30px"/>
                                    </button>   
                                    
                              </td>                   
                          </tr>
                      )
                  })}
              </tbody>
          </table>
            </div>
        </div>
    );
}