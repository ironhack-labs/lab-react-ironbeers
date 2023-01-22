import "./App.css";
import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

import HomePage from "./components/HomePage";
import ListBeers from "./components/ListBeers";
import SingleBeer from "./components/SingleBeer";
import RandomBeer from "./components/RandomBeer";
import NewBeer from "./components/NewBeer";

function App() {
  const devAPI = process.env.REACT_APP_API_URL;
  const [beersArr, setBeersArr] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getListofBeers();
  }, []);

  // this console.log showed me that here the array is still undefined
  // console.log(beersArr);

  const getListofBeers = () => {
    axios
      .get(devAPI + "/beers")
      .then((response) => {
        setBeersArr(response.data); // I want to access and display the API's response
        setIsLoading(false);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/beers"
          element={<ListBeers beersArr={beersArr} isLoading={isLoading} />}
        />
        <Route
          path="/beers/:beerId"
          element={<SingleBeer beersArr={beersArr} />}
        />
        <Route
          path="/random-beer"
          element={
            <RandomBeer
              devAPI={devAPI}
              isLoading={isLoading}
              setIsLoading={setIsLoading}
            />
          }
        />
        <Route path="/new-beer" element={<NewBeer devAPI={devAPI} />} />
      </Routes>
    </div>
  );
}

export default App;
