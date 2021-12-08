import "./App.css";
import React from 'react'
import Navbar from "./components/Navbar";
import AllBeers from "./pages/AllBeers";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/"  element={<AllBeers />} />
        <Route
                path="/beers/:id"
                element={<AllBeers />}
              />
      </Routes>
    </div>
  );
}

export default App;
