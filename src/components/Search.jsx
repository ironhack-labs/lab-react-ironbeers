import axios from "axios";

function Search({setBeers}) {
  function makeSearchQuery(e) {
    const query = e.target.value;
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/search?q=${query}`)
      .then((response) => setBeers(response.data))
      .catch((error) => console.log(error));
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
          onChange={(e) => makeSearchQuery(e)}
        />
      </div>
    </div>
  );
}

export default Search;
