
function SearchBar({searchfFormState, handleOnChange}) {

    return (
      <div className="searchBar">
  
        <label>Search</label>
        <input value={searchfFormState} type="text" onChange={handleOnChange} />
      </div>
    );
  }

export default SearchBar