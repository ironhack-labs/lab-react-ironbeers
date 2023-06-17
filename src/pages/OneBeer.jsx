import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import NavBar from "./components/NavBar";

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
      <NavBar />   

      <div className="randombeer">
        <img className="randombeerimg" src={fetchedBeer.image_url} alt="beer" />
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
