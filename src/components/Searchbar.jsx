import { useState } from "react";

function Searchbar({ onSearch }) {

    const [ searchTerm, setSearchTerm ] = useState('');

    const handleSearch = (beer) => {
        setSearchTerm(beer.target.value);
        onSearch(beer.target.value);
    }

  return (
    <form role="search" className="">
        <input className="form-control me-2 my-3" type="search" placeholder="Search" value={searchTerm} onChange={handleSearch}/>
    </form>
  )
}

export default Searchbar