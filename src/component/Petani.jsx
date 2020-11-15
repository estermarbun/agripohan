import React from "react";

export default () => {
    const dataTable = [
        {id: 1, nama: "Rendy Simarmata", phone: "082294696947"},
        {id: 1, nama: "Rendy Simarmata", phone: "082294696947"},
        {id: 1, nama: "Rendy Simarmata", phone: "082294696947"},
        {id: 1, nama: "Rendy Simarmata", phone: "082294696947"},
        {id: 1, nama: "Rendy Simarmata", phone: "082294696947"},
        
    ]
    return (
        
        <div className="container" style={{marginTop: "10%"}}>
            <div>
            <h2
            className="section-heading text-uppercase"
            style={{ color: "#008000" }}
          >
            DATA INVESTOR PT. POHAN
          </h2>

          <table className="table">
              <thead  style={{borderTop: "5px solid red", background: "yellow"}}>
                  <tr>
                    <th>NO.</th>
                    <th>Investor Name</th>
                    <th>Phone Number</th>
                    <th>Action</th>
                  </tr>
              </thead>
                <tbody>
                  {dataTable.map((data, i ) => {
                      return (
                          <tr key={i}>
                              <td>{data.id}</td>
                              <td>{data.nama}</td>
                              <td>{data.phone}</td>                              
                          </tr>
                      )
                  })}
              </tbody>
          </table>
            </div>
        </div>
    );
}