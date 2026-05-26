function Search({ searchQuery, handleSearch }) {
  return (
    <div className="d-inline-flex justify-content-center align-items-center w-100 p-4">
      <div className="input-group mb-2 w-50">
        <div className="input-group-prepend">
          <span className="input-group-text" id="basic-addon1">
            Search
          </span>
        </div>
        {/* Link the input to the parent's state via value and onChange */}
        <input
          type="text"
          className="form-control search-bar"
          value={searchQuery}         // ← controlled: displays whatever is in state
          onChange={handleSearch}     // ← calls the parent's handler on every keystroke
        />
      </div>
    </div>
  );
}

export default Search;
