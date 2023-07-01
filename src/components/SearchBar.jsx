function SearchBar(props) {
  const { query, handleSearch } = props;

  return (
    <div className="search-bar">
      <label>
        Search
        <input
          name="searchBar"
          value={query}
          type="text"
          onChange={(event) => handleSearch(event)}
        />
      </label>
    </div>
  );
}

export default SearchBar;
