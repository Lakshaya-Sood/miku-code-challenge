import React from "react"; // es6
import { Navbar, Nav } from "react-bootstrap";
// var Reactes5 = require("react"); // es5
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "../ui/Home";
import UserRegistration from "../ui/UserRegistration";

export default function App() {
  return (
    <Router>
      <Navbar bg="light">
        <Navbar.Brand>Application Header</Navbar.Brand>
        <nav>
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
          </ul>
        </nav>
      </Navbar>

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
  );
}
