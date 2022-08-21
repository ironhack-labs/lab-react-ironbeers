import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Link, NavLink } from 'react-router-dom';

function BeerDetails() {
    const [beerDetails, setBeerDetails] = useState("")

    const {beerId} = useParams();

    const getBeerDetails = async () => {
        try {
            let response = await axios.get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`);
            setBeerDetails(response.data);
            console.log(response.data);
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getBeerDetails();
    },[beerId])


  return (
    <>

        <Link to={`/`}>
            <header>
                <img src="https://user-images.githubusercontent.com/23629340/40707029-cb2fce12-63ef-11e8-939c-f673ff3b965d.png" alt="return-home" className='return-home' />
            </header>
        </Link>
    <div>
        {beerDetails && (
            <div className='beer-details'>
                <span className="beer-details-image">
                    <img src={beerDetails.image_url} alt="beer details" />
                </span>
                <div className="beer-details-info">
                    <span className="beer-details-name-level">
                        <h2>{beerDetails.name}</h2>
                        <h3>{beerDetails.attenuation_level}</h3>
                    </span>
                    <span className="beer-details-tagline-brewed">
                        <h4>{beerDetails.tagline}</h4>
                        <h6>{beerDetails.first_brewed}</h6>
                    </span>
                    <span className="beer-details-description">
                        <p>{beerDetails.description}</p>
                        <p>{beerDetails.contributed_by}</p>
                    </span>
                </div>
            </div>
        )
        }
    </div>
    </>
  )
}

export default BeerDetails