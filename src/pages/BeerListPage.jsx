import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import axios from "axios";
import BeerCard from "../components/BeerCard";
import { Link } from "react-router-dom";

function BeerListPage() {
  const [beers, setBeers] = useState([]);
  const [term, setTerm] = useState("");

  useEffect(() => {
    fetchBeers();
  }, []);

  const fetchBeers = async () => {
    try {
      const res = await axios.get("https://ih-beers-api2.herokuapp.com/beers");
      const data = res.data;
      setBeers(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    searchBeer();
  }, [term]);

  const searchBeer = async () => {
    if (!term) {
      return fetchBeers();
    }

    try {
      const res = await axios.get(
        `https://ih-beers-api2.herokuapp.com/beers/search?q=${term}`
      );
      const data = res.data;
      setBeers(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Header />
      <section className="beer-list ps-5 py-3">
        <div className="row">
        <div className="col-md-12">
              <div className="mb-3 w-50 mx-auto">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search beer..."
                  value={term}
                  onChange={(e) => {
                    setTerm(e.target.value);
                  }}
                />
              </div>
            </div>
        </div>
        {!beers.length && <span>Loading Beers....</span>}
        {beers.length && (
          <div className="row">
            {beers.map((beer) => {
              return (
                <div key={beer._id} className="col-md-3 col-sm-12">
                  <Link to={`/beers/${beer._id}`} className="link">
                    <BeerCard beer={beer} />
                  </Link>
                </div>
              );
            })}
          </div>
        )}
      </section>
    </>
  );
}

export default BeerListPage;
