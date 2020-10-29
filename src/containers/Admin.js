import React, {Component} from 'react';

import Header from "../component/Header";
import Footer from "../component/Footer";
import Navigation from "../component/Navigation";

class Admin extends Component {
    render() {
        return (
            <div className="App">
                {" "}
                {/* <!-- Navigation--> */}
                <Navigation />
                {/* <!-- Header--> */}
                <Header />

                {/* <!-- Footer--> */}
                <Footer />
                {/* <Switch></Switch> */}
                {/* <Route path="/" />
                <Route path="/component" component={Login} /> */}
            </div>
        )
    }
}

export default Admin;