function Search({ handleSearchBeer, searchState, setSearchState }) {
  return (
    <div className="d-inline-flex justify-content-center align-items-center w-100 p-4">
      <div className="input-group mb-2 w-50">
        <div className="input-group-prepend">
          <span
            className="input-group-text"
            id="basic-addon1"
            onClick={handleSearchBeer}
          >
            Search
          </span>
        </div>
        <input
          type="text"
          className="form-control search-bar"
          value={searchState}
          onChange={(event) => {
            setSearchState(event.target.value);
          }}
        />
      </div>
    </div>
  );
}

export default Search;
