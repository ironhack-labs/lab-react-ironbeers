import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from "../components/Navbar";

function BeerDetailsPage(props) {

    const [beers, setBeers] = useState({});
    const { beer_Id } = useParams();

    const getOneBeer = () => {
        axios.get(`https://ih-beers-api2.herokuapp.com/beers/${beer_Id}`)
            .then((response) => {
                setBeers(response.data);
            })
            .catch((error) => console.log(error));
    }

    useEffect(() => {
        getOneBeer();
    }, []);

    return (
        <>
            <h2 className='page-headers'>Beer Details</h2>

            <Navbar />

            <div className='all-beers-container' key={beers.id}>
                {beers && (
                    <>
                        <img className="beer-image" src={beers.image_url} />
                        <h2>{beers.name}</h2>
                        <h4>{beers.tagline}</h4>
                        <h5>{beers.first_brewed}</h5>
                        <h5>{beers.attenuation_level}</h5>
                        <h6>{beers.description}</h6>
                        <h6>`Contributed by: {beers.contributed_by}`</h6>
                    </>
                )}
            </div>
        </>
    )
}

export default BeerDetailsPage;
