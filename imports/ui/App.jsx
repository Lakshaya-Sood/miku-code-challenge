import React from "react"; // es6
import { Navbar } from "react-bootstrap";
// var Reactes5 = require("react"); // es5
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "../ui/Home";
import UserRegistration from "../ui/UserRegistration";

export default function App() {
  return (
    <React.Fragment>
      <Navbar bg="light">
        <Navbar.Brand>Application Header</Navbar.Brand>
      </Navbar>
      <Router>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/register">
            <UserRegistration />
          </Route>
        </Switch>
      </Router>
    </React.Fragment>
  );
}
