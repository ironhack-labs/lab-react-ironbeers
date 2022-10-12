import "./App.css";
import Home from "./pages/home";
import { Routes, Route } from "react-router-dom";
import Beers from "./pages/beers";
import RandomBeer from "./pages/random-beer";
import Newbeer from "./pages/new-beer";
import SingleBeer from "./pages/single-beer";
import axios from "axios";
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  const [beerData, setBeerData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  // console.log("App is renderin");

  useEffect(() => {
    setIsLoading(true);
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers")
      .then((result) => {
        // console.log(result.data);
        setBeerData(result.data);
      })
      .catch((err) => {
        console.log("err:", err);
        setIsError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/beers"
          element={
            <Beers
              beerData={beerData}
              isLoading={isLoading}
              isError={isError}
            />
          }
        />
        <Route
          path="/random-beer"
          element={
            <RandomBeer
              beerData={beerData}
              isLoading={isLoading}
              isError={isError}
            />
          }
        />
        <Route path="/new-beer" element={<Newbeer />} />
        <Route
          path="/beers/:id"
          element={
            <SingleBeer
              beerData={beerData}
              isLoading={isLoading}
              isError={isError}
            />
          }
        />
      </Routes>
    </div>

    //   <div className="App">
    //     <header className="App-header">
    //       <img src={logo} className="App-logo" alt="logo" />
    //       <p>
    //         Edit <code>src/App.js</code> and save to reload.
    //       </p>
    //       <a
    //         className="App-link"
    //         href="https://reactjs.org"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         Learn React
    //       </a>
    //     </header>
    //   </div>
    // );
  );
}

export default App;
