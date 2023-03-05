import React, {useState} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

function Searchbar({searchBeersList}){
    const [search, setSearch] = useState("")
    

    const handleSearch = (e) => {
        setSearch(e.target.value)
        searchBeersList(e.target.value)
    }

    
    
  return (
    
    <div>
        <h2>Search Beers</h2>
        <label htmlFor='search'>Search:</label>
        <input type="text" name="search" value={search} onChange={handleSearch} />
        
		
        
    </div>
  )
}

export default Searchbar