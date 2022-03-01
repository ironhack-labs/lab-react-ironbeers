import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Header from "../components/Navbar";
import Search from "../components/Search";

const apiURL = "https://ih-beers-api2.herokuapp.com/beers/";

function ListBeers() {
  const [loading, setLoading] = useState(true);
  const [beers, setBeers] = useState([]);
  const [query, setQuery] = useState("");

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

  const searchHandler = (string) => {
    setQuery(string);
  };

  return (
    <>
      <div
        className="d-inline-flex flex-column justify-content-center align-items-center"
        style={{ maxWidth: "700px" }}
      >
        <Header />
        <Search searchHandler={searchHandler} />

        {loading && (
          <img
            src="https://c.tenor.com/tEBoZu1ISJ8AAAAC/spinning-loading.gif"
            alt="loading"
          />
        )}

        {beers.map((beer, i) => {
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

export default ListBeers;
