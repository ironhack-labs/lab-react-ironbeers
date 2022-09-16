import { AllBeers } from "../components/AllBeers";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export const BeersPage = (props) => {
  const [searchParams, setSearchParams] = useState("");
  const [beers, setBeers] = useState(props.beers);
  const getSearchParams = async (e) => {
    setSearchParams(e.target.value);
    try {
      const { data } = await axios.get(
        `https://ih-beers-api2.herokuapp.com/beers/search?q=${searchParams}`
      );
      setBeers(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: 30 }}
        class="mb-3"
      >
        <label
          for="exampleFormControlInput1"
          class="form-label"
          style={{ fontSize: 30, marginRight: 10 }}
        >
          Search
        </label>
        <input
          style={{ width: "80%" }}
          type="search"
          class="form-control"
          value={searchParams}
          onChange={getSearchParams}
        />
      </div>
      <ul>
        {beers.map((beer) => {
          return (
            <Link
              to={`/beers/${beer._id}`}
              key={beer._id}
              style={{ textDecoration: "none", color: "black" }}
            >
              <AllBeers beer={beer} />
            </Link>
          );
        })}
      </ul>
    </div>
  );
};
