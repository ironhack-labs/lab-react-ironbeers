import axios from "axios";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";


function AllBeersPage() {
    const [beers, setBeers] = useState([]);
    const [resApi, setResApi] = useState('');

    useEffect(() => {
        const fetchBeers = () => {
            axios.get('https://ih-beers-api2.herokuapp.com/beers')
                .then(response => {
                    setBeers(response.data);
                })
                .catch(err => {
                    console.error(err);
                });
        };
        fetchBeers();
    }, [])



    useEffect(() => {
        const searchBeers = () => {
            axios.get(`https://ih-beers-api2.herokuapp.com/beers/search?q=${resApi}`)
                .then(response => {
                    setBeers(response.data);
                })
                .catch(err => {
                    console.error(err)
                });
        };
        searchBeers();
    }, [resApi])

    const handleOnSearch = (ev) => {
        setResApi(ev.target.value);
    };


    return (
        <div className="container">
            <h2>All Beers</h2>
            <label htmlFor="search">Search your Beer:</label>
            <input type="text"
                id="search"
                value={resApi}
                onChange={handleOnSearch}
            />
            <ul>
                {beers.map((beer) => (
                    <li key={beer.id} className="">
                        <NavLink to={`/beers/${beer._id}`}>
                            <img src={beer.image_url} alt="beer" />
                            <div className="card-body">
                                <h3>{beer.name}</h3>
                                <p>{beer.tagline}</p>
                                <p>{beer.contributed_by}</p>
                            </div>
                        </NavLink>

                    </li>
                ))}
            </ul>
        </div>
    )
}

export default AllBeersPage;
