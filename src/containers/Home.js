import React, {Component} from 'react';

import Header from "../component/Header";
import About from "../component/About";
import Contact from "../component/Contact";
import Footer from "../component/Footer";
import Navigation from "../component/Navigation";
import Product from "../component/Product";
import Promo from "../component/Promo";

class Home extends Component {
    render() {
        return (
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
        )
    }
}

export default Home;