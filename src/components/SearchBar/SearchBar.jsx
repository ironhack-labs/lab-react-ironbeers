import { useState } from "react"

const SearchBar = ({ filterBeers }) => {

    const [filter, setFilter] = useState("")


    const handleFilter = e => {
        setFilter(e.target.value)
        filterBeers(e.target.value)
    }

    return (
        <>
            <p>Search your beer:</p>
            <input type="text" value={filter} onChange={handleFilter} />
        </>
    )
}

export default SearchBar