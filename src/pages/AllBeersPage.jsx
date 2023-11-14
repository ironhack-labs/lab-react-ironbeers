import { useEffect, useState } from "react";
import { Link } from 'react-router-dom'
import axios from "axios";


const beerAPI = "https://ih-beers-api2.herokuapp.com/beers"
const queryAPI = "https://ih-beers-api2.herokuapp.com/beers/search?q=" //{query}

function AllBeersPage(props) {
    const [beers, setBeers] = useState([])
    const [fetching, setFetching] = useState(true)
    const [queryString, setQueryString] = useState("")

    useEffect(() => {
        axios.get(beerAPI)
            .then((response) => {
                setBeers(response.data)
                setFetching(false)
            })
            .catch((error) => console.log(error))
    }, [])

    const imgStyle = {
        maxHeight: '150px',
        width: 'auto',
    }

    function handleInput(event) {
        console.log(event.target.value)
        setQueryString(event.target.value)
    }


    useEffect(() => {
        let currentAPI = queryAPI + queryString
        setFetching(true)
        axios.get(currentAPI)
            .then((response) => {
                setBeers(response.data)
                setFetching(false)
            })
            .catch((error) => console.log(error))
    }, [queryString])


    return (
        <div className="container">
            <input type="text" onChange={handleInput} />
            <ul className="list-group">
                {fetching ? <p>Loading...</p> : beers.map((beer) => {
                    return (
                        <a key={beer._id} className="list-group-item list-group-item-action" href={`/beers/${beer._id}`}>
                            <div className="row">
                                <div className="col-3 d-flex justify-content-center">
                                    <img style={imgStyle} src={beer.image_url} alt="Beer image" />
                                </div>
                                <div className="col-9 d-flex align-content-center  flex-wrap">
                                    <div className="col">
                                        <div className="row">
                                            <h2>{beer.name}</h2>
                                        </div>
                                        <div className="row">
                                            <p className="text-secondary">{beer.tagline}</p>
                                        </div>
                                        <div className="row">
                                            <small className="text-muted"><strong>Created by:</strong> {beer.contributed_by}</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </a>
                    )
                })}
            </ul>
        </div>
    )
}

export default AllBeersPage;
