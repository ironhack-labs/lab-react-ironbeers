import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function AllBeersPage() {
  const [data, setData] = useState(null);
  const [search, setSearch] = useState("");
  useEffect(() => {
    const url = `https://ih-beers-api2.herokuapp.com/beers`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.error("Error in API:", error);
      });
  }, []);

  function handleSearchBeer(query) {
    setSearch(query);
    const url = `https://ih-beers-api2.herokuapp.com/beers/search?q=${query}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.error("Error in API:", error);
      });
  }
  return (
    <>
      <div className="d-flex justify-content-center my-2">
      <input
        className="form-control me-2"
        style={{ width: "300px" }}
        type="text"
        placeholder="Search Beer"
        value={search}
        onChange={(e) => handleSearchBeer(e.target.value)}
      />
      </div>
      
      {data === null ? (
        <div className="text-center mt-5">
          <div className="spinner-border text-info" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        data.map((beer) => (
          <Link key={beer._id} to={`/beer/${beer._id}`}>
            <div
              className="card border-r-0 border-r-0"
              style={{ cursor: "pointer" }}
            >
              <div className="row g-0">
                <div className="col-md-4 d-flex justify-content-center">
                  <img
                    src={beer.image_url}
                    className="img-fluid rounded-start"
                    alt={beer.name}
                    style={{ height: "200px" }}
                  />
                </div>
                <div className="col-md-8 d-flex align-items-center">
                  <div className="card-body">
                    <h5 className="card-title">{beer.name}</h5>
                    <p className="card-text pt-2 mb-0">{beer.tagline}</p>
                    <p className="card-text">
                      <small className="text-body-secondary">
                        <strong>Created by:</strong> {beer.contributed_by}
                      </small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))
      )}
    </>
  );
}

export default AllBeersPage;
