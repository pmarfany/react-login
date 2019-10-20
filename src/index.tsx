import * as React from "react";
import {render} from "react-dom";
import {App} from "./App";
import './scss/style.scss';
import './fonts/fonts.scss';

const rootElement = document.getElementById('login');

render(<App/>, rootElement);
