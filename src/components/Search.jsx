import { useState } from "react";
import axios from "axios";


function Search(props) {
  const API_URL="https://ih-beers-api2.herokuapp.com/beers/search?q="
const [searchText, setSearchText] = useState("")

const {setBeers} = (props);

const handleSearch = (e) => {
  setSearchText(e.target.value);
  console.log(e.target.value)
  axios
  .get(`${API_URL}${e.target.value}`)
  .then((response)=>setBeers(response.data))
  .catch((error)=>console.error(error))

}


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
          onChange={handleSearch}
        />
      </div>
    </div>
  );
}

export default Search;
