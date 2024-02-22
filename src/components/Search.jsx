import { useState } from "react";
import { Link } from "react-router-dom";
import API_URL from "../utils/api";
import axios from "axios";

function Search(props) {

  const [search, setSearch] = useState("")

  const handleSearch = (e)=> {
    setSearch(e.target.value)
  }

  const filteredResult = props.beers.filter ((eachBeer) => { //axios.get(`${API_URL}/search?q={query}`)
    if (search.length > 0) {
      return eachBeer.name.toLowerCase().match(search.toLowerCase())
    }
  });
  console.log(filteredResult)
  const handleSubmit = (e) => {
    e.preventDefault()
    props.setBeer(search)
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
          value={search}
          onChange={handleSearch}
        />
        {filteredResult.map((eachBeer) => {
          return (
            <Link to={`/beers/${eachBeer._id}`}>
            <div>
            <img src={eachBeer.image_url} width="60px" alt="" />
            <p>{eachBeer.name}</p>
            </div>
            </Link>
          )
        })}
      </div>
    </div>
  );
}

export default Search;
