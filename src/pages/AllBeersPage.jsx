import axios from "axios";
import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';


function AllBeersPage() {
    const [beers, setBeers] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        const fetchBeers = async () => {
            try {
                const response = await axios.get('https://ih-beers-api2.herokuapp.com/beers');
                setBeers(response.data);
                //console.log('beers', beers)
            } catch (error) {
                console.error(error);
            }
        };
        fetchBeers();
    }, []);

    //search bar
    useEffect(() => {
        const searchBeers = async () => {
            try {
                const response = await axios.get(`https://ih-beers-api2.herokuapp.com/beers/search?q=${searchQuery}`);
                setBeers(response.data);
            } catch (error) {
                console.error(error);
            }
        };
        searchBeers();
    }, [searchQuery])


    //search bar 
    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    return (
        <div className='container'>
            <h2 className='mt-4'>All Beers</h2>
            <div className="mb-4">
                <label htmlFor="search">Search Beers: </label>
                <input
                    type="text"
                    id="search"
                    value={searchQuery}
                    onChange={handleSearchChange}
                />
            </div>
            <ul>
                {beers.map((beer) => (
                    <li key={beer._id} className='row mb-4'>
                        <NavLink to={`/beers/${beer._id}`} className='text-decoration-none'>
                            <img src={beer.image_url} alt={beer.name} className='image-fluid' style={{ maxWidth: '50px' }} />
                            <div className='card-body'>
                                <h3 className='text-dark card-title'>{beer.name}</h3>
                                <p className='text-black-50 card-text'>{beer.tagline}</p>
                                <p className='text-dark card-text'>Contributed by: {beer.contributed_by}</p>
                            </div>
                        </NavLink>
                    </li>
                ))}
            </ul>
        </div>
    );
}



export default AllBeersPage;
