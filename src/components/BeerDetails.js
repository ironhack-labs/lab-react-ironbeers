//jshint esversion:9

import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export const BeerDetails = () => {
    
    const [beer, setBeer] = useState({});
    const {beerId} = useParams();

    useEffect(()=> {
        
        if (beerId) {

            (async () => {
                let response = await axios.get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`);
                console.log('response.data from api =>', response.data);
                setBeer(response.data);

            })();
        }

    },[beerId]);

    if(!beer) {

        return (<p>Loading beer details...</p>);
    }


    return(
        
        <div className="beer-details-container" >

            <div className='beers-beer-img-container'>
                <img src={beer.image_url} alt="beer" style={{height: "350px"}}/>
            </div>
            
            <div className="beers-beer-info">

                <div>
                    <h2 className='beers-beer-info-name'>{beer.name}</h2>

                    <p className='beers-beer-tagline'>{beer.attenuation_level}</p>
                </div>

                <div>

                    <p className='beers-beer-tagline'>{beer.tagline}</p>

                    <p className='beers-beer-tagline'>{beer.first_brewed}</p>

                </div>
                
                <p className=''>{beer.description}</p>

                <p>{beer.contributed_by}</p>
                
            </div>

        </div>
        
        
    )
}
