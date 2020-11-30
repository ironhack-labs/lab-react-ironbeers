import React, { useState, useEffect }  from 'react';
import './Beer.css';
import axios from "axios";


 function BeerDetail(props) {

    const [beerDetail, setBeerDetail] = useState({});

    useEffect(() => {
        axios
       .get(
         `https://ih-beers-api2.herokuapp.com/beers/:id`
       )
       .then((beerResult) => {
         console.log(`THE ID IS ${beerResult.data}`)
         setBeerDetail(beerResult.data);
       })
       .catch((error) => console.error(`Something went wrong with the handleBeersList function: ${error}`));
    },[]);

    return (
        <div>
        <h1>Beer Details</h1>
            <ul>
                <li>
                    <div className="container-div">
                        {/* <div className="element-div">
                            <img src={beerDetail.image_url} alt={beerDetail.name} width="50px"/>
                        </div> */}
                        <div className="element-div-1">
                            <h1>{beerDetail.name}</h1>
                            {/* <p>{beerDetail.tagline}</p>
                            <p>Contributed by: {beerDetail.contributed_by}</p> */}
                        </div>
                    </div>
                    
                </li>
            </ul>
        </div>
    )
}

export default BeerDetail;