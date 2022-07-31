import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const BeersList = (props) => {
    const [search, setSearch] = useState("")
    const [filtered, setFiltered] = useState(null)
    //const [foundBeers, setFoundBeers] = useState(null)
    const handleChange = (e) => {
        setSearch(e.target.value)
        console.log("zz", search)
        fetchFoundBeers()
    }
    let foundBeer
    useEffect(() => {
        fetchFoundBeers()
    }, [search])
    const fetchFoundBeers = () => {
        axios.get(process.env.REACT_APP_API_QUERY_URL + search)
        .then((res) => {
            console.log("res", res.data)
            setFiltered(res.data)
            return foundBeer
        })
        .catch((e) => console.log(e))
    }
    return (
        <>
            <h1>All beers!</h1>
            <input name="filter" value={search} onChange={handleChange}/>
            {filtered  ?
            <div className="list-of-beers">
            {filtered.map(element => {
                return (
                    <div >
                        <p>{element.name}</p>
                        <img src={element.image_url} alt={element.name}/>
                        <p>{element.tagline}</p>
                        <p>{element.contributed_by}</p>
                        <Link to={`/beers/${element._id}`}>Show Details</Link>
                        <hr></hr>
                    </div>
                    )
            })}
            </div>
            :
            <div>
                {props.beers ?
                <div className="list-of-beers">
                    {props.beers.map(beer => {
                        return (
                        <div>
                            <p>{beer.name}</p>
                            <img src={beer.image_url} alt={beer.name}/>
                            <p>{beer.tagline}</p>
                            <p>{beer.contributed_by}</p>
                            <Link to={`/beers/${beer._id}`}>Show Details</Link>
                            <hr></hr>
                        </div>
                        )
                    })}
                </div>
                : <p>LOADING</p>
            }
            </div>
            }
        </>
    )
}

export default BeersList
