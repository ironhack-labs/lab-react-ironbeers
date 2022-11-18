import React, { useState } from 'react'



const Search = (props) => {
    const [search, setSearch] = useState("");
    const searchHandler = (event) => {
        setSearch(event.target.value)
        console.log(event.target.value)
        props.onSearch(event.target.value)
    }


    return (

        <div>
            <div>
                <label>
                    Search
                </label>
                <input type="text" value={search} onChange={searchHandler} />
            </div>
        </div>

    )
}
export default Search