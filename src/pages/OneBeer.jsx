import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

function OneBeer() {
  const { beerId } = useParams();
  // console.log(beerId);
  const [fetchedBeer, setFetchedBeer] = useState("");

  useEffect(() => {
    const fetchOneBeer = async () => {
      const { data } = await axios(
        `https://ih-beers-api2.herokuapp.com/beers/${beerId}`
      );
      setFetchedBeer(data);
    };
    fetchOneBeer();
  }, [beerId]);

  console.log(fetchedBeer);

  return (
    <div>
          <header>
        <Link to={"/"}>Back to Home</Link>
      </header>
      <div>
        <img src={fetchedBeer.image_url} alt="beer" />
        <h1>{fetchedBeer.name}</h1>
        <p>{fetchedBeer.tagline}</p>
        <p>{fetchedBeer.contributed_by}</p>
        <p>{fetchedBeer.first_brewed}</p>
        <p>{fetchedBeer.attenuation_level}</p>
        <p>{fetchedBeer.description}</p>
      </div>
    </div>
  );
}

export default OneBeer;
