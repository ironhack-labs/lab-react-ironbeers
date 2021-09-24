import React from 'react';
import Navbar from '../components/Navbar';
import { useState, useEffect } from "react";


function SingleBeerPage(props) {
 //console.log('single' , props)

    const [beersList, setBeersList] = useState({
        _id:'',
        name:"",
        tagline: '',
        contributed_by: '',
        image_url: '',
        first_brewed:'', 
        attenuation_level:'', 
        description:'',
    });

    useEffect(() => {
        const foundBeer  = props.beersList.filter((beerObj) => {
            return beerObj._id === props.match.params.beerId;
        })
        if (foundBeer){
        //console.log('found', foundBeer)
        setBeersList(foundBeer[0]);
        } 
            
    }, [props.beersList, props.match.params.beerId], []);

    return ( 
        
        <>
        {/* {console.log('detail' , beersList)} */}
            <Navbar/>
            {beersList && (
        
            <div className="beer-detail  container ">
                <h1>Beer Detail</h1>
                    <div key={beersList._id} className="row " >
                    
                            <div className="col-12 col-sm-10 col-md-5 col-lg-5 col-xl-5 list-image">
                                <img src={beersList.image_url} alt={beersList.name} />
                            </div>
                            <div className="col-12 col-sm-10 col-md-7 col-lg-7 col-xl-7 list-data">
                                <h3>{beersList.name}</h3>
                                <h5>{beersList.tagline}</h5>
                                <p><span className="bold">First brewed:</span> {beersList.first_brewed}</p>
                                <p><span className="bold">Attenuation level:</span> {beersList.attenuation_level}</p>
                                <p><span className="bold">Description:</span></p>
                                <p>{beersList.description}</p>
                                <p><span className="bold">Created by:</span> {beersList.contributed_by}</p>
                                {/* /beers/:beerId --> match.params.beerId */}
                            </div>
            
                    </div>
    
            </div>

            )}
        </>
    );
}

export default SingleBeerPage;
