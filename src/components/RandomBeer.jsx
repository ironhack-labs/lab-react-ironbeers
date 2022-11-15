import { useLoaderData } from "react-router-dom";

export function RandomBeer() {
  const randomBeer = useLoaderData();
  console.log(randomBeer);

  return (
    <div>
      <div style={{ display: "flex", flexDirection: "row" }} key={randomBeer._id}>
        <img style={{ width: "100px" }} src={randomBeer.image_url} alt="" />
        <div>
          <h3>{randomBeer.name}</h3>
          <h4>{randomBeer.tagline}</h4>
          <p style={{ width: "200px" }}>Created by: {randomBeer.contributed_by}</p>
          <p>
            First brewed: {randomBeer.first_brewed} Attenuation level:{" "}
            {randomBeer.attenuation_level}
          </p>
          <p>{randomBeer.description}</p>
        </div>
      </div>
    </div>
  );
}

// first_brewed
// attenuation_level
// description
// contributed_by
