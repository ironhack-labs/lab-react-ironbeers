function SearchBar(props) {
  const { searchWord, handleSearch } = props;

  return (
    <div>
      <label>
        Search
        <input
          name="searchBar"
          value={searchWord}
          type="text"
          onChange={(event) => handleSearch(event)}
        />
      </label>
    </div>
  );
}

export default SearchBar;
