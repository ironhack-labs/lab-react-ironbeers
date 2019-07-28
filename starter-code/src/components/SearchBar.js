import React from 'react';

function SearchBar(props) {
    return (   
        <div className="container">
            <div className="row">
                <div className="input-field col s12">
                    <input id="search" placeholder="Search Beers" type="text" value={props.searchText} onChange={props.handleSearchText} />
                </div>
            </div>
        </div>
    )
}

export default SearchBar;
