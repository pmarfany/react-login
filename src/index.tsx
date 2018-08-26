import * as React from "react";
import ReactDOM = require("react-dom");
import {App} from "./App";

// Estils
import './scss/style.scss';
import './fonts/fonts.scss';

const rootElement = document.getElementById('login');

ReactDOM.render(<App/>, rootElement);