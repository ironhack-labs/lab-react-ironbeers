import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Header from "./Header";

function BeersList() {
  const baseURL = "https://ih-beers-api2.herokuapp.com";

  const [beersList, setbeersList] = useState(null);

  const fetchBeersList = async () => {
    try {
      const res = await axios.get(baseURL + "/beers");
      setbeersList([...res.data]);
      //console.log("res.data from beers List......", res.data);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    fetchBeersList();
  }, []);

  const displayBeersList = () => {
    return beersList.map((element) => {
      return (
        <div key={element._id}>
          {element.image_url ? (
            <img src={element.image_url} alt={element.name} style={{height:"200px"}} />
          ) : (
            ""
          )}
          <h3>{element.name}</h3>
          <p>Tagline: {element.tagline}</p>
          <p>Contributed By: {element.contributed_by}</p>
          <Link to={"./" + element._id}>More Detail</Link>
        </div>
      );
    });
  };

  return (
    <>
      <Header />
      {beersList ? displayBeersList() : <p>..loading</p>}
    </>
  );
}

export default BeersList;
