import { useState, useEffect, useParams } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function AllBeersPage() {
  const [beers, setBeers] = useState();

  useEffect(() => {
    axios.get("https://ih-beers-api2.herokuapp.com/beers").then((res) => {
      setBeers(res.data);
    });
  }, []);

  const handleInputChange = (e) => {
    axios
      .get(
        `https://ih-beers-api2.herokuapp.com/beers/search?q=${e.target.value}`
      )
      .then((response) => {
        setBeers(response.data);
      })
      .catch((error) => {
        console.error("Error fetching search results:", error);
      });
  };

  if (!beers) return <p>Loading...</p>;
  return (
    <>
      <input
        className="form-control me-2"
        type="search"
        placeholder="Search"
        aria-label="Search"
        onChange={handleInputChange}
      ></input>
      <div className="row row-cols-1 row-cols-md-4 g-2">
        {beers.map((element) => {
          const beerIdLink = `/beers/${element._id}`;
          return (
            <Link
              to={beerIdLink}
              key={element._id}
              className="card mb-3"
              style={{ maxHeight: 200 }}
            >
              <div className="row g-0">
                <div className="col-md-4">
                  <img
                    src={element.image_url}
                    className="rounded-start img-thumbnail"
                    alt={element.name}
                    style={{ maxHeight: 200 }}
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">{element.name}</h5>
                    <p className="card-text">{element.tagline}</p>
                    <p className="card-text">
                      <small className="text-body-secondary">
                        Created by: {element.contributed_by}
                      </small>
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
}

export default AllBeersPage;
