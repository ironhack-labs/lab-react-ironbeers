import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"


function AllBeersPage() {

    const apiURL = "https://ih-beers-api2.herokuapp.com/beers/"

    const [beers, setBeers] = useState([])
    const [query, setQuery] = useState("")
    const [searchInput, setSearchInput] = useState("")

    const getBeers = () => {
        axios.get(`${apiURL}`)
            .then((response) => {
                console.log(response.data)
                setBeers(response.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    useEffect(() => {
        getBeers()
    }, [])

    const getQuery = () => {
        axios.get(apiURL + `/search?q=${query}`)
            .then((response) => {
                setBeers(response.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    useEffect(() => {
        getQuery()
    }, [query])

    const queryHandler = (searchInput) => {
        setQuery(searchInput)
    }

    const filterHandler = (e) => {
        setSearchInput(e.target.value)
        queryHandler(e.target.value)
    }

    return (
        <div>

            <h1 className="list-of-beers">List of beers</h1>

            <div className="search-beer-form">
                <form>
                    <label>
                        Search Beer
                        <input
                            type="text"
                            value={searchInput}
                            onChange={filterHandler}
                        />
                    </label>
                </form>
            </div>

            {beers.map((beer) => {
                return (
                    <div key={beer._id}>
                        <Link to={`/beers/${beer._id}`} >
                            <div className="list-beer">
                                <div className="list-beer-image">
                                    <img className="beer-image" src={beer.image_url} />
                                </div>
                                <div className="list-beer-text">
                                    <h1 className="beer-text">{beer.name}</h1>
                                    <h2 className="beer-text">{beer.tagline}</h2>
                                    <p className="beer-text">Created by: {beer.contributed_by}</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                )
            })}
        </div>
    )
}

export default AllBeersPage
