import axios from "axios";

import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

import FilterBeers from "../components/FilterBeers";
import Loader from "../components/Loader";

function AllBeersPage() {

    const [beers, setBeers] = useState([]);
    const [fetching, setFetching] = useState(true);

    const filterBeers = (query) => {
        setFetching(true);

        axios.get(`https://ih-beers-api2.herokuapp.com/beers/search?q=${query}`)
        .then((response) => {
            setBeers(response.data);
            setFetching(false);
        })
        .catch((e) => {
            console.log(e);
        })
    }

    useEffect(() => {
        axios.get('https://ih-beers-api2.herokuapp.com/beers')
            .then((response) => {
                setBeers(response.data);
                setFetching(false);
            })
            .catch((error) => {
                console.log('Error' + error);
            })       
    }, [])

    return (
        <section className="all-beers">

            <FilterBeers filterBeers={filterBeers} />

            {fetching ? <Loader /> : beers.map((beer) => {
                return (
                    <div key={beer._id} className="beer-all-beers-page">
                        <NavLink to={`/beers/${beer._id}`} >
                        <div className="beer-container">
                            <img src={beer.image_url} alt={`${beer.name} bottle`} />
                            <div className="beer-info">
                                <h1>{beer.name}</h1>
                                <h2>{beer.tagline}</h2>
                                <h3>Created by: {beer.contributed_by}</h3>
                            </div>
                        </div>
                        </NavLink>

                    </div>
                )
            })}

        </section>
    )
}

export default AllBeersPage;
