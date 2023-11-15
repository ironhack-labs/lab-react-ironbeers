import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const API_URL = "https://ih-beers-api2.herokuapp.com/beers";

function AllBeersPage() {
  const [allBeers, setAllBeers] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const[fetching,setFetching] = useState(false);

  useEffect(() => {
    getAllBeers();
  }, []);

  const getAllBeers = () => {
    axios
      .get(`${API_URL}`)
      .then((response) => {
        console.log("getAllBeers .then")
        setFetching(true);
        setAllBeers(response.data);
        setFetching(false);
      })
      .catch((error) => console.log("error to get all beers : ", error));
  };

  const handleChange = (e) => {
    setSearchQuery(e.target.value);
    axios.get(`${API_URL}/search?q=${e.target.value}`)
      .then(response => {
        setFetching(true);
        setAllBeers(response.data)
        setFetching(false);
      })
      .catch(error => console.log("error to get search query beers : ", error))
  } 

  return (
    <div>
      <h1>All Beers</h1>
      <form>
        <label> Search a beer :
        <input type="text" name="searchQuery" value={searchQuery} placeholder="search something..." onChange={handleChange} />
        </label>
        
      </form>

      {(fetching === true || allBeers === null) ? (
        <h2>Loading...</h2>
      ) : (
        <div>
          {allBeers.map((beer) => {
            return (
              <div key={beer._id} className="AllBeersPage-beer">
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
