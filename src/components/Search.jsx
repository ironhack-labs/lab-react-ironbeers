import React from 'react';

const Search = ({handleSearch, search}) => {
    return (
        <div>
            <div>
                <input type="text" className="__search __m-1" name="search" placeholder='Search' onChange={handleSearch} value={search} />
            </div>
        </div>)
}

export default Search;


