import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Beers() {

    const [beers, setBeers] = useState([]);

    useEffect(() => {
        axios.get("https://ih-beers-api2.herokuapp.com/beers")
            .then(response => {
                setBeers(response.data);
            })
            .catch()
    }, []);

    const renderBeers = (beer) => {
        return (
            <div className="apartment-summary">
                <img src={beer.image_url} alt={beer.title} />
                <br />
                <h2>{beer.name}</h2>
                <h4>{beer.tagline}</h4>
                <p>"Created by:"{beer.contributed_by}</p>
                
                <Link to={`/beers/${beer._id}`}>More details</Link>
            </div>

        );
    }

    return (
        <section className="Beers">
            <header><a href="/">Home</a></header>
            <h1>Beer List</h1>
            {beers.map(apartment => {
                return renderBeers(apartment);
            })}
        </section>
    )
}

export default Beers;