//Main(entry) file of Front end
import React from "react";
import { Meteor } from "meteor/meteor";
import { render } from "react-dom";
import App from "../imports/ui/App";
import "bootstrap/dist/css/bootstrap.min.css";

// selecting element in UI to load the React App
Meteor.startup(() => {
  render(<App />, document.getElementById("react-target"));
});
