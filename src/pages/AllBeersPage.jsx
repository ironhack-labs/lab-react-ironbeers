import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from "../components/Navbar";

function AllBeersPage() {

    const [beers, setBeers] = useState([]);

    const getAllBeers = () => {
        axios.get('https://ih-beers-api2.herokuapp.com/beers')
            .then((response) => {
                setBeers(response.data);
            })
            .catch((error) => console.log(error));
    }

    useEffect(() => {
        getAllBeers();
    }, []);

    return (
        <>
            <h2 className='page-headers'>All Beers Page</h2>

            <Navbar />

            {beers.map((beer) => {

                return (
                    <div className='all-beers-container' key={beer.id}>
                        <Link to={`/beers/${beer.id}`}>
                            <img className="beer-image" src={beer.image_url} />
                            <h2>{beer.name}</h2>
                            <h4>{beer.tagline}</h4>
                            <h5>`Contributed by: {beer.contributed_by}`</h5>
                        </Link>
                    </div>
                )
            })};

        </>
        
    )
}

export default AllBeersPage;
