import React from "react";
import ReactDOM from "react-dom";
import 'bulma/css/bulma.min.css'
import 'bulma-extensions/bulma-pageloader/dist/css/bulma-pageloader.min.css'
import "@fortawesome/fontawesome-free/css/all.css";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
