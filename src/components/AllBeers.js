import axios from "axios"
import {useState, useEffect} from "react"
import AllBeersLink from "./AllBeersLink"

const AllBeers = () => {
    const [beers, setBeers] = useState(null)

    useEffect(() => {
        axios.get("https://ih-beers-api2.herokuapp.com/beers/").then(results => {
            setBeers(results.data)
        })
    }, [])

    return beers ? (
        <div className="allBeers">
            {beers.map(beer => <AllBeersLink key={beer._id} beer={beer}/>)}
        </div>
    ) :
    (
        <div>
            <p>waiting for the stuff to load ...</p>
        </div>
    )

}

export default AllBeers