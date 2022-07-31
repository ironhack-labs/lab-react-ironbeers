import axios from 'axios';
import { useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom'

function BeerDetails() {

    const { beerId } = useParams();
    const [beerDetails, setBeerDetails] = useState(null);

    useEffect(() => {
        fetchbeerDetails();
    }, []);

    const fetchbeerDetails = () => {
        axios
            .get(process.env.REACT_APP_API_BASE_URL + "/beers/" + beerId)
            .then((response) => {
                setBeerDetails(response.data);
            })
            .catch((e) => {
                console.log(e);
            });
    }


    const renderBeerDetails = () => {
        return (
            <div className='beerDetails'>
                {/* <img src={beerDetails.image_url} alt={`no image of...${beerDetails.name}`}></img> */}
                <h3>{beerDetails.name}</h3>
                <h4>{beerDetails.tagline}</h4>
                <h5>{beerDetails.first_brewed}</h5>
                <h5>{beerDetails.attenuation_level}</h5>
                <p>{beerDetails.description}</p>
                <h4>{beerDetails.contributed_by}</h4>
            </div>
        );
    }



    return (
        <>
            <header>
                <NavLink to="/">Home</NavLink>
            </header>
            {
                beerDetails === null
                    ? <p>loading...</p>
                    : renderBeerDetails()
            }
            <NavLink to="/beers">back to the List of Beers</NavLink>
        </>

    )

}

export default BeerDetails;