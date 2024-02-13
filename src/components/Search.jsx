import axios from "axios";

function Search(props) {
  return (
    <div className="d-inline-flex justify-content-center align-items-center w-100 p-4">
      <div className="input-group mb-2 w-50">
        <div className="input-group-prepend">
          <span className="input-group-text" id="basic-addon1">
            Search
          </span>
        </div>
        <input onChange= {(event)=> {
        axios
        .get (`https://ih-beers-api2.herokuapp.com/beers/search?q=${event.target.value}`)
        .then ((response) => {
          props.setBeers(response.data)
        })
        }}
          type="text"
          className="form-control search-bar"
        />
      </div>
    </div>
  );
}

export default Search;

