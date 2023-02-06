import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getBeer } from "../api";
import NavBar from "../components/NavBar";

function Beer() {
  const [beer, setBeer] = useState();
  const { beerId } = useParams();

  useEffect(() => {
    async function handleGetBeer() {
      const response = await getBeer(beerId);
      setBeer(response.data);
    }
    handleGetBeer();
  }, [beerId]);

  return beer ? (
    <div>
      <NavBar />
      <>
        <img width="15%" src={beer.image_url} alt={beer.name} />
        <div>
          <h1>{beer.name}</h1>
          <h3>{beer.tagline}</h3>
        </div>
        <div>
          <p>{beer.attenuation_level}</p>
          <p>{beer.first_brewed}</p>
        </div>
        <div>
          <p>{beer.description}</p>
          <p>{beer.contributed_by}</p>
        </div>
      </>
    </div>
  ) : (
    <p>Loading...</p>
  );
}

export default Beer;
