import { useLoaderData } from "react-router-dom";
import { filterBeerById } from "../util/api";

export function SingleBeer() {
  const beerData = useLoaderData();
  console.log(beerData);

  return (
    <div>
      <div style={{ display: "flex", flexDirection: "row" }} key={beerData._id}>
        <img style={{ width: "100px" }} src={beerData.image_url} alt="" />
        <div>
          <h3>{beerData.name}</h3>
          <h4>{beerData.tagline}</h4>
          <p style={{ width: "200px" }}>Created by: {beerData.contributed_by}</p>
          <p>
            First brewed: {beerData.first_brewed} Attenuation level: {beerData.attenuation_level}
          </p>
          <p>{beerData.description}</p>
        </div>
      </div>
    </div>
  );
}

export function singleBeerLoader({ params }) {
  const beerId = params.id;
  return filterBeerById(beerId);
}

// first_brewed
// attenuation_level
// description
// contributed_by
