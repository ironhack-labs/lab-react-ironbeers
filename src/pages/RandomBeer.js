import { useEffect } from "react";
import { useState } from "react";
import BeerComponent from "./../components/BeerComponent";
import axios from "axios";

function RandomBeer() {
  const [beer, setBeer] = useState("random");

  useEffect(() => {
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/${beer}`)
      .then((response) => setBeer(response.data))
      .catch((err) => console.log(err));
  }, [beer]);

  return (
    <div>
      <BeerComponent beer={beer} />
      <button
        type="button"
        class="btn btn-primary mt-4"
        onClick={() => setBeer("random")}
      >
        Get another random beer
      </button>
    </div>
  );
}

export default RandomBeer;
