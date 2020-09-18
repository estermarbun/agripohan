import React from "react";
import "./App.css";
import Login from "./component/Login";
import Header from "./component/Header";
import About from "./component/About";
import Contact from "./component/Contact";
import Footer from "./component/Footer";
import Navigation from "./component/Navigation";
import Product from "./component/Product";
import Promo from "./component/Promo";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        {" "}
        {/* <!-- Navigation--> */}
        <Navigation />
        {/* <!-- Header--> */}
        <Header /> {/* <!-- Promo--> */}
        <Promo />
        {/* <!-- Product--> */}
        <Product />
        {/* <!-- About--> */}
        <About />
        {/* <!-- Contact--> */}
        <Contact />
        {/* <!-- Footer--> */}
        <Footer />
        {/* <Switch></Switch> */}
        {/* <Route path="/" />
        <Route path="/component" component={Login} /> */}
      </div>
    </Router>
  );
}

const Home = () => <div></div>;
export default App;
