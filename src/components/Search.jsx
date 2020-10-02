
import React from 'react'

function Search(props) {

    function handleChange (event) {
        let newValue = event.target.value;
        props.handleSearch(newValue);
    }

    return (
        <div className=' container text-center my-5'>
            <h2>Looking for some beer?</h2>
            <input
                type="text"
                name="search"
                value={props.search}
                onChange={handleChange}
                className='form-control'
                placeholder='Search a beer here'
            />
        </div>
    )
}

export default Search