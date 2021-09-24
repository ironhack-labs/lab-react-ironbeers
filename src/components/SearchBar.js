import React,{useState} from 'react'


function Search(props){
    const[search, setSearch] = useState('')


    const handleSearchInput = e =>{
       setSearch(e.target.value)
       
       props.searchBeer(e.target.value)
    }


    return (
        <div className="search-bar">
          <input value={search} placeholder='Search' className="search-bar" type="text" onChange={handleSearchInput} />
        </div>
      );
}

export default Search