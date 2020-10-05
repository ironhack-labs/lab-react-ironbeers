import React from 'react'

function Search(props) {

    function handleChange (event) {
        // console.log(event.target.value, 'VALUE');
        let newValue = event.target.value;
        props.handleSearch(newValue);
    }

    return (
        <div className=' container text-center my-5'>
            <h2>Find your beer!</h2>
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