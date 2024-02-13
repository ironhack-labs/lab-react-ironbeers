import { useState } from 'react';
import axios from 'axios';

const API_URL = "https://ih-beers-api2.herokuapp.com/beers";

function Search(props) {
  const [searchBeer, setSearchBeer] = useState('');


  const handleSearch = async (event) => {
    setSearchBeer(event.target.value);

    try {
      const response = await axios.get(`${API_URL}/search?q=${searchBeer}`);
  
      console.log(response.data)
      props.setBeers(response.data)

    } catch (error) {
      console.log("Error looking for beers: ", error);
    }
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
          value={searchBeer}
          onChange={handleSearch}
        />
      </div>
    </div>
  );
}

export default Search;
