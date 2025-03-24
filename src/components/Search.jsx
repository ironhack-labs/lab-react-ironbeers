function Search({ onSearch }) {
  const handleInputChange = (e) => {
    const searchTerm = e.target.value;
    onSearch(searchTerm);
  };

  return (
    <div className="text-center mt-4 mb-3">
      <input
        type="text"
        placeholder="Buscar cerveza por nombre..."
        className="form-control w-50 mx-auto"
        onChange={handleInputChange}
      />
    </div>
  );
}

export default Search;
