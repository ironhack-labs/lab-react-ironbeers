import { useEffect, useState } from "react";
import Header from "./Header";
import ListItem from "./ListItem";
const url = "https://ih-beers-api2.herokuapp.com/beers";

function BeersList() {
  const [beers, setBeers] = useState([]);
  useEffect(() => {
    async function fetchCountries() {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      setBeers(data);
    }
    fetchCountries();
  }, []);

  useEffect(() => console.log("STATE OF BEERS:", beers), [beers]);

    return (
      <div>
        <Header />
        <ListItem beers={beers}/>
      </div>
    );
}

export default BeersList;
