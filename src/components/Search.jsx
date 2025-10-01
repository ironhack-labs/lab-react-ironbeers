function Search({ onSearch }) {
  const handleChange = (e) => {
    onSearch(e.target.value);
  };

  return (
    <div className="p-3 text-center">
      <input
        type="text"
        placeholder="Search beers..."
        onChange={handleChange}
        className="form-control"
        style={{ maxWidth: "400px", margin: "0 auto" }}
      />
    </div>
  );
}

export default Search;
