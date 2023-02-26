import { useState, useEffect } from "react"
import axios from "axios"

function SearchBar() {
    const [query, setQuery] = useState("")

        const handleSelect = (e) => {

        setQuery(e.target.value)
        }

        useEffect(()=>{
            axios.get(`https://ih-beers-api2.herokuapp.com/beers/search?q=${query}`)
            .then(response => {
                
            })
        },[])

    return ( 
        <form action="">
        <h3>Search</h3>

        <label>Search</label>
        <input value={query} type="text" onChange={(e) => handleSelect(e)} /> 

        </form>
     );
}

export default SearchBar;