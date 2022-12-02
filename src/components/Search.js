import React from 'react';

function Search(props) {
    const handleInputChange = e => {
        props.setQuery(e.target.value)
    }
    return (
        <div>
            <label htmlFor="searchBeer">Search</label>
            <input id="searchBeer" type="text" onChange={handleInputChange}></input>
        </div>
    );
}

export default Search
