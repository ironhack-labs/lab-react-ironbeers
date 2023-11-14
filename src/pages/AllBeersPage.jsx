import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const API_URL = "https://ih-beers-api2.herokuapp.com";

function AllBeersPage() {
  const [allBeers, setAllBeers] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    getAllBeers();
  },[searchQuery]);

  const getAllBeers = () => {
    axios
      .get(`${API_URL}/beers`)
      .then((response) => {
        console.log("test")
        setAllBeers(response.data);
      })
      .catch((error) => console.log("error to get all beers : ", error));
  };

  

  useEffect(() => {
    getQueryBeers();
  }, [searchQuery]);

  const getQueryBeers = () => {
    axios
      .get(
        `https://ih-beers-api2.herokuapp.com/beers/search?q={${searchQuery}}`
      )
      .then((response) => {
        console.log(response.data);
        
      })
      .catch((error) =>
        console.log("error to get beer according to query : ", error)
      );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchQuery(e.target.value);
    getQueryBeers();
  };

  return (
    <div>
      <h1>All Beers</h1>
      <label>
        Search a beer :
        <input
          type="text"
          name="searhQuery"
          value={searchQuery}
          onChange={(e) => handleSubmit(e)}
        />
      </label>

      {allBeers === null ? (
        <h2>Loading...</h2>
      ) : (
        <div>
          {allBeers.map((beer) => {
            return (
              <div className="AllBeersPage-beer">
                <img src={beer.image_url} />
                <h2>{beer.name}</h2>
                <h3>{beer.tagline}</h3>
                <p>
                  <i>Contributed by {beer.contributed_by}</i>
                </p>
                <Link to={`/beers/${beer._id}`}>
                  <button>See details</button>
                </Link>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default AllBeersPage;
