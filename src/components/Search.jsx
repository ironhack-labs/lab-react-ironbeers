import axios from "axios";
import { useEffect, useState } from "react";

function Search({ beers, setBeers }) {
  // const beersToSearch = getAllBeers();

  // const handleChange = (e) => {
  //   e.preventDefault();
  //   setSearchInput(e.target.value);
  // };

  // if (searchInput.length > 0) {
  //   beersToSearch.filter((beer) => {
  //     beer.name.match(searchInput);
  //   });
  // }

  const [inputText, setInputText] = useState("");
  // const [filteredBeers, setFilteredBeers] = useState([])

  const handleInputChange = (e) => {
    const lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };

  const API_URL = `https://ih-beers-api2.herokuapp.com/beers/search?q=${inputText}`;
  useEffect(() => {
    axios.get(`${API_URL}`).then((response) => {
      setBeers(response.data);
    });
  }, [inputText]);

  return (
    <div className="d-inline-flex justify-content-center align-items-center w-100 p-4">
      <div className="input-group mb-2 w-50">
        <div className="input-group-prepend">
          <span className="input-group-text" id="basic-addon1">
            Search
          </span>
        </div>
        <input
          className="form-control search-bar"
          placeholder="Search Beers"
          onChange={handleInputChange}
          value={inputText}
        />
      </div>
    </div>
  );
}

export default Search;
