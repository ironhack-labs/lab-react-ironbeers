import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react"
import axios from "axios";


const BeersPage = () => {

    const [beers, updateBeers] = useState([])

    useEffect(() => {
        axios
            .get('https://ih-beers-api2.herokuapp.com/beers/')
            .then((response) => {
                updateBeers(response.data);
                console.log("holi caracoli", beers)
            })
            .catch(err => console.log(err))
    }, [])

    return (

        <div>
            <h1> Beers list</h1>
            <hr />
            {beers.map(elm => {
                return (
                    <div key={elm._id} className="beer">
                        <img src={elm.image_url}></img>
                        <p>{elm.name}</p>
                        <p>{elm.tagline}</p>

                        <Link to={`/beers/${elm._id}`}>See Beer</Link>
                        <hr />
                    </div>
                )
            })}
        </div>
    )
}

export default BeersPage