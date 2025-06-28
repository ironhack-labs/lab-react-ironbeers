function Search({ setBeers, backup }) {
  //search by query, making another request to search for beers that match query
  // const [query, setQuery] = useState("");
  // const handleSearch = async () => {
  //   try {
  //     const response = await axios.get(
  //       `https://ih-beers-api2.herokuapp.com/beers/search?q=${query}`
  //     );
  //     setBeers(response.data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return (
    <div className="d-inline-flex justify-content-center align-items-center w-100 p-4">
      <div className="input-group mb-2 w-50">
        <div className="input-group-prepend"></div>
        <input
          type="text"
          // value={query}
          className="form-control search-bar"
          onChange={(e) =>
            setBeers(
              backup.filter((beer) =>
                beer.name.toLowerCase().startsWith(e.target.value.toLowerCase())
              )
            )
          }
        />
        <button
          // onClick={handleSearch}
          className="input-group-text"
          id="basic-addon1"
        >
          Search
        </button>
      </div>
    </div>
  );
}

export default Search;
