function SearchBar(props) {
    const handleSearch = (e) => {
       props.setSearchValue(e.target.value)
    }
  
    return (
      <header>
        <div>
            <label htmlFor="search">Search</label>
            <input type="search" id="search" name="search" placeholder="Search for Beer" onChange={handleSearch}  />
        </div>
        
      </header>
    );
}

export default SearchBar;