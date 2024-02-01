import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios"; 




function BeerDetailsPage() {

        const { beerId } = useParams();
        const [beersDetails, setBeerDetails] = useState(null);

        useEffect(() => {
            const fetchBeerDetails = () => {
                if (beerId) {
                    axios.get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
                        .then(response => {
                            setBeerDetails(response.data);
                        })
                        .catch(error => {
                            console.error(error);
                        });
                }
            };
        
            fetchBeerDetails();
        }, [beerId]);


        return (
            <div className='container'>
                {beersDetails
                
                ?

                 (
                    <>
                        <h2 className='mt-4'>{beersDetails.name}</h2>
                        <div>
                            <div>
                                <img src={beersDetails.image_url} alt={beersDetails.name}  />
                            </div>
                            <div>
                                {beersDetails.tagline && <p>{beersDetails.tagline}</p>}
                                {beersDetails.first_brewed && <p>First Brewed: {beersDetails.first_brewed}</p>}
                                {beersDetails.attenuation_level && <p>Attenuation Level: {beersDetails.attenuation_level}</p>}
                                {beersDetails.description && <p>Description: {beersDetails.description}</p>}
                                {beersDetails.contributed_by && <p>Contributed by: {beersDetails.contributed_by}</p>}
                            </div>
                        </div>
                    </>
                )

                 : 
                 
                 (
                    <div>Loading...</div>
                )}
            </div>
        );

}

export default BeerDetailsPage;
