import React from "react";
import "./App.css";

import Home from "./containers/Home";
import Admin from "./containers/Admin";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Admin" component={Admin} />
      </Switch>
    </Router>
  );
}

export default App;
