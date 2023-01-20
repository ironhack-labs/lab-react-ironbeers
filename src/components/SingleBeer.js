import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const SingleBeer = () => {
  const [beerArr, setBeersArr] = useState();
  const { beerId } = useParams();

  const oneSingleBeer = beerArr.find((beerDetails) => {
    return beerDetails.id === beerId;
  });

  useEffect(() => {
    getSingleBeer();
  }, []);

  const getSingleBeer = () => {
    axios
      .get(process.env.REACT_APP_API_URL + "/beers/" + beerId)
      .then((response) => {
        console.log(response);

        setBeersArr(response);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div>
      <nav>
        <NavLink className="App-link" to="/">
          Home
        </NavLink>
      </nav>
      <h2>Title: {oneSingleBeer.name}</h2>
      <p>Tagline: {oneSingleBeer.tagline}</p>
      <p>First Brewed: {oneSingleBeer.first_brewed}</p>
      <p>Attenuation Level: {oneSingleBeer.attenuation_level}</p>
      <p>Description: {oneSingleBeer.description}</p>
      <p>Contributed by: {oneSingleBeer.contributed_by}</p>
    </div>
  );
};

export default SingleBeer;
