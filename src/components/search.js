import React, { useState } from "react";



const SearchBar = (props) =>{

    const[inputSearch,setInputSearch] = useState("")


    const handleSearch = (e) =>{
        
        setInputSearch(e.target.value)
        props.filter(e.target.value)
    }

    return(
        <form>
            <input placeholder="Search" type="text" value={inputSearch} onChange={handleSearch}  />
        </form>
    )
}

export default SearchBar