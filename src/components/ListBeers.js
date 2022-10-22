import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PacmanLoader from "react-spinners/PacmanLoader";

function ListBeers() {
  const [beers, setBeers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState("");
  const style = { textDecoration: "none", color: "black" };

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BEERS}`)
      .then((res) => {
        setLoading(false);
        setBeers(res.data);
      })
      .catch((err) => {
        console.error("Error getting list of beers from API", err);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BEERS}/search?q=${query}`)
      .then((res) => {
        setBeers(res.data);
      })
      .catch((err) => {
        console.error("Error getting searched beers from API", err);
      });
  }, [query]);

  return (
    <div className="ListBeers mt-3">
      <form className="m-4">
        <label className="form-label">What are you looking for?</label>
        <input
          type="text"
          className="form-control"
          placeholder="Search"
          autoFocus={true}
          name="query"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
          }}
        />
      </form>
      <PacmanLoader loading={loading} size={100} color="maroon" />

      <div className="container">
        <div className="row">
          {beers.map((beer) => {
            return (
              <div className="col-12 col-md-4" key={beer._id}>
                <div className="card m-1 p-1">
                  <Link to={`/beers/${beer._id}`} style={style}>
                    {beer.image_url ? (
                      <img src={beer.image_url} alt={beer.name} />
                    ) : (
                      <p>Sorry no image</p>
                    )}
                    <h5>{beer.name}</h5>
                    <h6>{beer.tagline}</h6>
                    <p>Created by: {beer.contributed_by}</p>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ListBeers;
