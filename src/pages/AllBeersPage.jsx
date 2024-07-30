import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

const AllBeersPage = () => {
    const [beers, setBeers] = useState([]);
    const [filteredBeers, setFilteredBeers] = useState([]);
    const [query, setQuery] = useState("");

    const getAllBeers = async () => {
        try {
            const response = await fetch("https://ih-beers-api2.herokuapp.com/beers");
            const data = await response.json();
            setBeers(data);
            setFilteredBeers(data);  
        } catch(e) { 
            console.error(e);
        }
    };

    const searchBeers = async (query) => {
        try {
            const response = await fetch(`https://ih-beers-api2.herokuapp.com/beers/search?q=${query}`);
            const data = await response.json();
            setFilteredBeers(data);
        } catch(e) {
            console.error(e);
        }
    };

    useEffect(() => {
        getAllBeers();
    }, []);

    const handleInputChange = (e) => {
        const query = e.target.value;
        setQuery(query);
        if (query) {
            searchBeers(query);
        } else {
            setFilteredBeers(beers);
        }
    };

    return (
        <div className="beer-list-container">
            <h1>All The Beers</h1>
            <input
                type="text"
                value={query}
                onChange={handleInputChange}
                placeholder="Search beers..."
            />
            <ul className="beer-list">
                {filteredBeers.map((beer) => (
                    <li key={beer.id ?? beer._id ?? beer.name}>
                        <img className="display-beer-img" src={beer.image_url} alt={`beer ${beer.name}`} />
                        <div className="header-text">
                            <h2>
                                <Link to={`/beers/${beer.id ?? beer._id}`}>{beer.name}</Link>
                            </h2>
                            <h3 className="tagline">{beer.tagline}</h3>
                            <p><strong>Contributed by: </strong> {beer.contributed_by}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default AllBeersPage;