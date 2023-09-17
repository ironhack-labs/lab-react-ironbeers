import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function AllBeersPage() {
    const [beers, setBeers] = useState([]);
    const [searchedBeer, setSearchedBeer] = useState('');
    const [filteredBeers, setFilteredBeers] = useState([]);
    const [fetching, setFetching] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://ih-beers-api2.herokuapp.com/beers');
                setBeers(response.data);
                setFilteredBeers(response.data);
                setFetching(false);
            } catch (error) {
                console.error("Error fetching data: ", error);
                setFetching(false);
            }
        };

        fetchData();
    }, []);

    const handleSearch = async () => {
        if (searchedBeer) {
            setFetching(true);
            try {
                const response = await axios.get(`https://ih-beers-api2.herokuapp.com/beers/search?q=${searchedBeer}`);
                setFilteredBeers(response.data);
                setFetching(false);
            } catch (error) {
                console.error("Error searching for beers: ", error);
                setFetching(false);
            }
        } else {
            setFilteredBeers(beers);
        }
    };

    return (
        <section className='d-flex flex-column align-items-center'>
            <div>
                <input
                    type="text"
                    name="searchedBeer"
                    value={searchedBeer}
                    onChange={(e) => {
                        setSearchedBeer(e.target.value);
                    }}
                />
                <button className='btn btn-outline-primary search-button' onClick={handleSearch}>Search</button>
            </div>
            {fetching ? (
                <p>Loading...</p>
            ) : (
                filteredBeers.map((beer) => (
                    <Link to={`/beers/${beer._id}`} key={beer._id}>
                        <div>
                            <img src={beer.image_url} className="card-img-top" alt="Beer" />
                            <div className="card-body" style={{ maxWidth: '30rem' }}>
                                <h2 className="card-text">{beer.name}</h2>
                                <h4>{beer.tagline}</h4>
                                <p>Created by: {beer.contributed_by}</p>
                            </div>
                        </div>
                    </Link>
                ))
            )}
        </section>
    );
}

export default AllBeersPage;
