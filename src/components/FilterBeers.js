import { useState } from "react";

function FilterBeers(props) {
    const [keyWord, setKeyWord] = useState('')

    function handleKeyWordInput(event) {
        setKeyWord(event.target.value)
        props.handleFilteredBeers(event.target.value)
    }

    return (

        <>
            <div>
                <label htmlFor="filter">Search Beer</label>
                <input onChange={handleKeyWordInput} type='text' id='filter' value={keyWord} />
            </div>
        </>
    )
}

export default FilterBeers;