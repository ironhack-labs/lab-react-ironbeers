import Navbar from "../components/Navbar";
import axios from "axios";
import { useState, useEffect } from "react";
import BeerDetails from "../components/BeerDetails";

function Beers() {
  const [allBeers, setAllBeers] = useState([]);
  const url = "https://ih-beers-api2.herokuapp.com/beers";

  useEffect(() => {
    axios(url)
      .then((data) => {
        console.log(data.data[0]);
        setAllBeers(data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <Navbar />
      {allBeers.length === 0 && <h2>Loading ...</h2>}
      {allBeers.length !== 0 &&
        allBeers.map((eachBeer) => {
          return <BeerDetails beer={eachBeer} key={eachBeer._id} />;
        })}
    </div>
  );
}

export default Beers;
