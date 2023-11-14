import { useEffect, useState } from "react";
import { Link } from 'react-router-dom'
import axios from "axios";

const beerAPI = "https://ih-beers-api2.herokuapp.com/beers"

function AllBeersPage(props) {
    const [beers, setBeers] = useState([])
    const [fetching, setFetching] = useState(true)

    useEffect(() => {
        axios.get(beerAPI)
            .then((response) => {
                setBeers(response.data)
                setFetching(false)
            })
            .catch((error) => console.log(error))
    }, [])

    const imgStyle = {
        width: '50px',
    }

    return (
        <div>
            <ul className="list-group">
                {fetching ? <p>Loading...</p> : beers.map((beer) => {
                    return (
                        <a key={beer._id} className="list-group-item list-group-item-action" href={`/beers/${beer._id}`}><img style={imgStyle} src={beer.image_url} alt="Beer image" />
                            {beer.name}
                            {beer.tagline}
                            {beer.contributed_by}
                        </a>
                    )
                })}
            </ul>
        </div>
    )
}

export default AllBeersPage;
