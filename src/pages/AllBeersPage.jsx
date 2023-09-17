import { render } from "@testing-library/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function AllBeersPage() {
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers")
      .then((response) => {
        setBeers(response.data);
      })
      .catch((e) => {
        console.log("Error getting beers from the API", e);
      });
  }, []);

  const renderList = () => {
    if (beers === null) {
      return <p>loading....</p>;
    }

    return (
      <section className="beers-list">
        {beers.map((beer) => (
          <Link key={beer._id} to={`/beers/${beer._id}`}>
            <div className="beer-item">
                <div className="beer-item-image-wrapper">
              <img src={beer.image_url} alt={beer.name} />
                </div>
                <div className="beer-item-info-wrapper">
              <h2>{beer.name}</h2>
              <p>{beer.tagline}</p>
              <p>Contributed by: {beer.contributed_by}</p>
              </div>
            </div>
          </Link>
        ))}
      </section>
    )
  };

  return (
    <>
    {renderList()}
    </>
  )

}

export default AllBeersPage;
