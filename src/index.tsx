import * as React from "react";
import ReactDOM = require("react-dom");
import './scss/style.scss';

class App extends React.Component {
    render() {
        return <div>Hello, world!</div>;
    }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);