import { useEffect, useState } from "react"
import serviceApi from "../../services/beer-api"

const SearchForm = ({ setBeerList }) => {

    const [query, setQuery] = useState("")

    useEffect(() => {
        serviceApi
            .filterBeer(query)
            .then(filteredBeers => setBeerList(filteredBeers))
            .catch(err => console.log(err))
    }, [query])

    const handleInput = (e) => setQuery(e.target.value)

    return (<div>
        <input type="text" onChange={handleInput} />
    </div>
    )

}
export default SearchForm