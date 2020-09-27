import React from 'react'

export default function SearchBar(props) {

    function handleChange (event) {
        // console.log(event.target.value, 'VALUE');
        let newValue = event.target.value;
        props.handleQuery(newValue);
    }

    return (
        <div>
            <h1>Search a Beer</h1>
            <input
                type="text"
                name="query"
                value={props.query}
                onChange={handleChange}
            />
        </div>
    )
}
