/*import "./BeerList.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function BeerList() {
    const [beersList, setBeersList] = useState([]);

    const loadBeers = () => {
        axios
            .get("https://ih-beers-api2.herokuapp.com/beers")
            .then((response) => {
                setBeersList(response.data);
            })
            .catch((err) => console.error(err));
    };

    useEffect(() => {
        loadBeers();
    }, []);

    return (
        <div>
            <header>
                <Link to="/" className="home">
                    Home
                </Link>
            </header>

            <section>
                {beersList.map((beer, index) => {
                    return (
                        <div key="index" className="beerCard">
                            <img src={beer.image_url} className="beer-img" />
                            <div>
                                <h3>{beer.name}</h3>
                                <h4>{beer.tagline}</h4>
                                <p>Created by: {beer.contributed_by}</p>
                                <Link to={beer._id}>More Details</Link>
                            </div>
                        </div>
                    );
                })}
            </section>
        </div>
    );
}

export default BeerList;*/

import "./BeerList.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function BeerList() {
    const [beersList, setBeersList] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");

    const loadBeers = () => {
        let url = "https://ih-beers-api2.herokuapp.com/beers";
        if (searchQuery !== "") {
            url = `https://ih-beers-api2.herokuapp.com/beers/search?q=${searchQuery}`;
        }

        axios
            .get(url)
            .then((response) => {
                setBeersList(response.data);
            })
            .catch((err) => console.error(err));
    };

    useEffect(() => {
        loadBeers();
    }, [searchQuery]);

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    return (
        <div>
            <header>
                <Link to="/" className="home">
                    Home
                </Link>
                <input
                    type="text"
                    placeholder="Search beers"
                    value={searchQuery}
                    onChange={handleSearchChange}
                />
            </header>

            <section>
                {beersList.map((beer, index) => {
                    return (
                        <div key={index} className="beerCard">
                            <img src={beer.image_url} className="beer-img" />
                            <div>
                                <h3>{beer.name}</h3>
                                <h4>{beer.tagline}</h4>
                                <p>Created by: {beer.contributed_by}</p>
                                <Link to={beer._id}>More Details</Link>
                            </div>
                        </div>
                    );
                })}
            </section>
        </div>
    );
}

export default BeerList;
