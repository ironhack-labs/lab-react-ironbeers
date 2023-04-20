// Import necessary packages
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Header from "../components/Header";
import Search from "../components/Search";

// Define the API endpoint URL
const apiURL = "https://ih-beers-api2.herokuapp.com/beers/";

// Define the AllBeersPage component
function AllBeersPage() {

  // Set up state variables using the useState hook
  const [loading, setLoading] = useState(true);
  const [beers, setBeers] = useState([]);
  const [query, setQuery] = useState("");

  // Fetch all beers from the API when the component mounts using the useEffect hook
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(apiURL);
        setBeers(response.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  // Fetch searched beers from the API whenever the query state variable changes using the useEffect hook
  useEffect(() => {
    const fetchSearchedBeers = async () => {
      try {
        const response = await axios.get(apiURL + `/search?q=${query}`);
        setBeers(response.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    fetchSearchedBeers();
  }, [query]);

  // Handle changes to the query state variable when the user types in the search bar
  const searchHandler = (string) => {
    setQuery(string);
  };

  // Render the component
  return (
    <>
      <div
        className="d-inline-flex flex-column justify-content-center align-items-center"
        style={{ maxWidth: "700px" }}
      >
        <Header /> 
        <Search searchHandler={searchHandler} /> 
        {loading && ( // Render a loading spinner if the beers are still loading
          <img
            src="https://c.tenor.com/tEBoZu1ISJ8AAAAC/spinning-loading.gif"
            alt="loading"
          />
        )}

        {beers.map((beer, i) => { // Map over the beers and render a card for each one
          return (
            <div key={i}>
              <Link to={"/beers/" + beer._id}>
                <div className="card" style={{ width: "18rem" }}>
                  <div className="card-body">
                    <img
                      src={beer.image_url}
                      style={{ height: "100px" }}
                      alt={"image of" + beer.name}
                    />
                    <h5 className="card-title">{beer.name}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">
                      {beer.tagline}
                    </h6>
                    <p className="card-text">
                      Created by: {beer.contributed_by}
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default AllBeersPage;

