import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Search from "../components/Search";
import { URL } from "../config.js";
import axios from "axios";

function AllBeersPage() {
  const [beers, setBeers] = useState(null);
  const [searchInput, setSearchInput] = useState("");

  const fetchAllBeers = async () => {
    try {
      const allBeersResponse = await axios.get(URL + `/`);
      setBeers(allBeersResponse.data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchSearchBeer = async () => {
    if (searchInput === "") {
      fetchAllBeers();
    } else {
      try {
        const searchBeerResponse = await axios(URL + `/search?q=${searchInput}`);
        setBeers(searchBeerResponse.data);
      } catch (error) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    fetchAllBeers();
  }, []);

  useEffect(() => {
    fetchSearchBeer();
  }, [searchInput]);

  return (
    <>
      <Search searchInput={searchInput} setSearchInput={setSearchInput} />

      <div className="d-inline-flex flex-wrap justify-content-center align-items-center w-100 p-4">
        {beers &&
          beers.map((beer, i) => {
            return (
              <div key={i}>
                <Link to={"/beers/" + beer._id}>
                  <div className="card m-2 p-2 text-center" style={{ width: "24rem", height: "18rem" }}>
                    <div className="card-body">
                      <img src={beer.image_url} style={{ height: "6rem" }} alt={"image of" + beer.name} />
                      <h5 className="card-title text-truncate mt-2">{beer.name}</h5>
                      <h6 className="card-subtitle mb-3 text-muted">
                        <em>{beer.tagline}</em>
                      </h6>
                      <p className="card-text">Created by: {beer.contributed_by}</p>
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
