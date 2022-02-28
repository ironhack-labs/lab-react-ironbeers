import { useState, useEffect } from 'react';
import axios from "axios";
import { Link } from "react-router-dom";
import Header from './Header';

function Beers() {
    const [searchQuery, setSearchQuery] = useState('')
    const [beers, setBeers] = useState([])

    useEffect(() => {
        axios.get(`https://ih-beers-api2.herokuapp.com/beers/search?q=${searchQuery}`)
            .then(response => {
                setBeers(response.data)
            })
            .catch(error => console.log(error))
    }, [searchQuery])

    const handleInputChange = (event => {
        setSearchQuery(event.target.value)
    })

    return (
        <div>
            <Header />
            <div className='beers'>
                <div>
                    <label htmlFor="search"><strong>Search</strong></label>
                    <input type="search" onChange={handleInputChange} value={searchQuery} style={{ width: '40vw', padding: "15px", margin: '30px' }} />
                </div>
                <div className='container-fluid'>
                    {beers.map(beer => {
                        return (
                            <div key={beer._id}>
                                <Link to={`/beers/${beer._id}`} className='link'>
                                    <img src={beer.image_url} alt={beer.name} style={{ width: '100px', }} />
                                    <h1>{beer.name}</h1>
                                    <p>{beer.contributed_by}</p>
                                    <p>{beer.tagline}</p>
                                    <button>More Details</button>
                                </Link>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div >
    )
}

export default Beers;
