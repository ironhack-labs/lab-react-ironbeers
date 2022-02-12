import { Routes, Route } from "react-router-dom";
import { Home, ListBeers, SingleBeer, RandomBeer, NewBeer } from "./pages";
import { useState, useEffect } from "react";
import { NavBar } from "./components";

const axios = require("axios");

function Router(props) {
  console.log("ROUTER", props);

  const [beersData, setBeersData] = useState([]);

  useEffect(() => {
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers")
      .then((response) => {
        setBeersData(response.data);
      })
      .catch((err) => console.log("Error en fetching api on App.js", err));
  }, []);

  return (
    <Routes>
      {/* <Route path="/" element={<CountriesList />}></Route> */}
      <Route path="/" element={<Home beersData={beersData} />} />
      <Route path="/list-beers" element={<ListBeers beersData={beersData} />} />
      <Route path="/single-beer" element={<SingleBeer />} />
      <Route path="/random-beer" element={<RandomBeer />} />
      <Route path="/new-beer" element={<NewBeer />} />
      <Route path="*" element={<h1>Not found 404 error</h1>} />
    </Routes>
  );
}

export default Router;
