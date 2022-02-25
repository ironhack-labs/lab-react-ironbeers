import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Beers = () => {
    const [beers, setBeers] = useState([]);

    useEffect(() => {
        loadAllBeers()
    }, []);

    const loadAllBeers = () => {
        axios
            .get(`https://ih-beers-api2.herokuapp.com/beers`)

            .then(({ data }) => setBeers(data))

            .catch((err) => console.log(err))
    }

    return (
        <div>
            {beers.map((beer) => (
                <div className="beer-card" key={beer._id}>
                    <Link to={`/beers/${beer._id}`}>
                        <img src={beer.image_url} alt={beer.name} />
                        <h1>{beer.name}</h1>
                        <p>{beer.tagline}</p>
                        <p>{beer.contributed_by}</p>
                    </Link>
                </div>
            ))}
        </div>
    );
}
export default Beers