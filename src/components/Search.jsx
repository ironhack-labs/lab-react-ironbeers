function Search(props) {
  const {query, setQuery} = props

  const handleQuery = ()=>{
    console.log(event.target.value)
    setQuery(event.target.value)
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
          onChange={handleQuery}
          type="text"
          className="form-control search-bar"
          value={query}
        />
      </div>
    </div>
  );
}

export default Search;
