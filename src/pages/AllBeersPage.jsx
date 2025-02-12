import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Search from "../components/Search";
import axios from "axios";


const URLBeers= "https://ih-beers-api2.herokuapp.com/beers"
function AllBeersPage() {
	// Mock initial state, to be replaced by data from the API. Once you retrieve the list of beers from the Beers API store it in this state variable.
	const [beers, setBeers] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const getBeers = async () => {
      try {
        const response = await axios.get(URLBeers);
        setBeers(response.data);
      } catch (error) {
        setError("Failed to load beers data");
      } finally {
        setLoading(false);
      }
    };

    getBeers();
  }, [searchTerm]);
// getBeers();

	// TASKS:
	// 1. Set up an effect hook to make a request to the Beers API and get a list with all the beers.
	// 2. Use axios to make a HTTP request.
	// 3. Use the response data from the Beers API to update the state variable.

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  const filteredBeers = beers.filter((beer) =>
    beer.name.toLowerCase().includes(searchTerm.toLowerCase())
  );


	// The logic and the structure for the page showing the list of beers. You can leave this as it is for now.
	return (
    <>
      <Search onSearch={handleSearch} />

      <div className="d-inline-flex flex-wrap justify-content-center align-items-center w-100 p-4">
        {filteredBeers.map((beer, i) => (
          <div key={i}>
            <Link to={"/beers/" + beer._id}>
              <div className="card m-2 p-2 text-center" style={{ width: "24rem", height: "18rem" }}>
                <div className="card-body">
                  <img
                    src={beer.image_url}
                    style={{ height: "6rem" }}
                    alt={"image of " + beer.name}
                  />
                  <h5 className="card-title text-truncate mt-2">{beer.name}</h5>
                  <h6 className="card-subtitle mb-3 text-muted">
                    <em>{beer.tagline}</em>
                  </h6>
                  <p className="card-text">
                    Created by: {beer.contributed_by}
                  </p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}

export default AllBeersPage;