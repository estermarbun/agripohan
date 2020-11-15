import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "../component/Header";
import Footer from "../component/Footer";
import Investor from "../component/Investor";
import Anggota from "../component/Anggota";
import Petani from "../component/Petani";
import Keuangan from "../component/Keuangan";
import Navigation from "../component/AdminNav.jsx";
import InvestorDetail from "../component/InvestorDetail";
import InvestorEdit from "../component/InvestorEdit";
import AnggotaDetail from "../component/AnggotaDetail";
import AnggotaEdit from "../component/AnggotaEdit";
import PetaniDetail from "../component/PetaniDetail";
import PetaniEdit from "../component/PetaniEdit";

class Admin extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          {" "}
          {/* <!-- Navigation--> */}
          <Navigation />
          <Switch>
            <Route path="/admin" render={() => <Home />} />
            <Route path="/anggota" render={() => <Anggota />} />
            <Route path="/anggotadetail" render={() => <AnggotaDetail />} />
            <Route path="/anggotaedit" render={() => <AnggotaEdit />} />
            <Route path="/investor" render={() => <Investor />} />
            <Route path="/investordetail" render={() => <InvestorDetail />} />
            <Route path="/investoredit" render={() => <InvestorEdit />} />
            <Route path="/petani" render={() => <Petani />} />
            <Route path="/petanidetail" render={() => <PetaniDetail />} />
            <Route path="/petaniedit" render={() => <PetaniEdit />} />
            <Route path="/keuangan" render={() => <Keuangan />} />
          </Switch>
          {/* <!-- Footer--> */}
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

const Home = () => (
  <div>
    <h2 style={{ margin: "350px" }} className="greenBoldText">
      WELCOME, Pohan's Admin!
    </h2>
  </div>
);

export default Admin;
