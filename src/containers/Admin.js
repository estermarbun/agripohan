import React, {Component} from 'react';
import ReactDOM from "react-dom"
import {BrowserRouter, Route, Switch} from "react-router-dom"
import Header from "../component/Header";
import Footer from "../component/Footer";
import Investor from "../component/Investor"
import Anggota from "../component/Anggota"
import Petani from "../component/Petani"
import Keuangan from "../component/Keuangan"
import Navigation from "../component/AdminNav.jsx";

class Admin extends Component {
    render() {
        return (
            <BrowserRouter>            
                <div className="App">
                    {" "}
                    {/* <!-- Navigation--> */}
                    {/* <Navigation />      
                     */}
                    <div>
                        <Switch>                        
                        <Route path="/admin" render={() => <Home/>}/>             
                        <Route path="/anggota"  render={() => <Anggota/>}/>
                        <Route path="/investor"  render={() => <Investor/>}/>
                        <Route path="/petani"  render={() => <Petani/>}/>
                        <Route path="/keuangan"  render={() => <Keuangan/>}/>
                   </Switch>
                   </div>
                    
                    {/* <!-- Footer--> */}
                    <Footer />
                </div>
            </BrowserRouter>
        )
    }
}

const Home = () => (
    <div>
        <h2>Admin Page</h2>
        <Navigation /> 
    </div>
)
 
export default Admin;