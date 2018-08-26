import * as React from "react";
import {Footer} from "./components/footer/Footer";
import {Login} from "./components/Login";

export const App = () => (
  <React.Fragment>
    <Login />
    <Footer />
  </React.Fragment>
);