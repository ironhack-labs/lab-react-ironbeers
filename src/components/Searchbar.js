import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";

export const Searchbar = () => {
  //   const [query, setQuery] = useState("");

  //   const findBeersApi = async (e) => {
  //     const beersFound = await axios.get(
  //       `https://ih-beers-api2.herokuapp.com/beers/search?q=${query}`
  //     );
  //     setQuery(e.target.value);
  //     // setQuery(beersFound.data);
  //   };

  return (
    <div>
      <label for="searchbar"></label>
      <input
        type="text"
        placeholder="Search by name..."
        style={{
          width: "50%",
          marginTop: "30px",
          borderRadius: "5px",
          border: "1px solid lightgrey",
        }}
        // onChange={findBeersApi}
        // value={query}
      />
    </div>
  );
};
