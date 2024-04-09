import { useState } from "react";
import Axios from "axios";

const API_URL = "https://ih-beers-api2.herokuapp.com/beers";

function Search() {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState([]);

  const handleInput = (e) => {
    const inputValue = e.target.value;
    setQuery(inputValue);
    console.log(inputValue);

    Axios.get(`${API_URL}/search?q=${inputValue}`)
      .then((response) => {
        console.log(response);
        setResult(response.data);
        console.log(response.data);
      })
      .catch((error) => console.log(error));
  };

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
          onChange={handleInput}
          value={query}
        />
      </div>
      <ul>
        {result.map((beer) => (
          <li key={beer.id}>{beer.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Search;
