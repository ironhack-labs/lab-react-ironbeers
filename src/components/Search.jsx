function Search({setSearchBar}) {

  const onSearch = (e) => {
    setSearchBar(e.target.value);
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
          onChange={onSearch}
        />
      </div>
    </div>
  );
}

export default Search;
