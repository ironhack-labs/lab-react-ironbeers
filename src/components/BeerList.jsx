import { Link, useLoaderData } from "react-router-dom";

export function BeerList() {
  const data = useLoaderData();

  return (
    <div
      className="page-container"
      style={{
        width: 720,
        margin: "auto",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {data.map((beer) => {
        return (
          <Link style={{ textDecoration: "none", color: "black" }} to={`/beerlist/${beer._id}`}>
            <div style={{ display: "flex", flexDirection: "row" }} key={beer._id}>
              <img style={{ width: "100px" }} src={beer.image_url} alt="" />
              <div>
                <h3>{beer.name}</h3>
                <h4>{beer.tagline}</h4>
                <p style={{ width: "200px" }}>Created by: {beer.contributed_by}</p>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
