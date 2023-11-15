import { useState } from "react";

function FilterBeers(props) {

    const [string, setString] = useState("");

    return (
        <input
            type="text"
            name="filteredBeer"
            placeholder="enter name of the beer"
            value={string}
            onChange={(e) => {
                const newValue = e.target.value
                setString(newValue)
                props.filterBeers(newValue)
            }}
        />
    )
}

export default FilterBeers;