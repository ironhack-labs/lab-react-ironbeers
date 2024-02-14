import { useState, useEffect } from "react";
import axios from "axios";

function Search() {
  const [name, setName] = useState("");

  useEffect(() => {
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/search?q=${name}`)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [name]);

  return (
    <div className="d-inline-flex justify-content-center align-items-center w-100 p-4">
      <div className="input-group mb-2 w-50">
        <div className="input-group-prepend">
          <span className="input-group-text" id="basic-addon1">
            Search
          </span>
        </div>
        <input
          type="text"
          className="form-control search-bar"
          value={name}
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
      </div>
    </div>
  );
}

export default Search;
