import * as React from "react";
import ReactDOM = require("react-dom");
import {App} from "./App";

// Estils
import './scss/style.scss';
import './fonts/fonts.scss';

// Web Manifest
import './manifest';

// App Favicon
import './assets/favicon.png';

const rootElement = document.getElementById('login');

ReactDOM.render(<App/>, rootElement);