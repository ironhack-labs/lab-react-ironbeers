import axios from "axios";

function Search({setBeers}) {

  const handleChange = async (event) => {
    try {
      const {data} = event.target.value === "" ? await axios.get(`${import.meta.env.VITE_SERVER_URL}`) 
        : await axios.get(`${import.meta.env.VITE_SERVER_URL}/search?q=${event.target.value}`)
      console.log(data);
      setBeers(data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="d-inline-flex justify-content-center align-items-center w-100 p-4">
      <div className="input-group mb-2 w-50">
        <div className="input-group-prepend">
          <span className="input-group-text" id="basic-addon1">
            Search
          </span>
        </div>
        <input onChange={handleChange}
          type="text"
          className="form-control search-bar"
        />
      </div>
    </div>
  );
}

export default Search;