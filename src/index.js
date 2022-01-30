import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { HashRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
reportWebVitals();

// =======
//   <BrowserRouter basename={process.env.PUBLIC_URL}>
//     <App />
//   </BrowserRouter>,
//   document.getElementById('root')
// >>>>>>> 268a2d8ec09172e4778f700279349d2c44b59c6d
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
