import React from 'react';
import './RandomBeer.css'
import NavBar from '../NavBar/NavBar'
import DetailCard from '../DetailCard/DetailCard'
import {Link} from "react-router-dom"
const RandomBeer = ({props,data,loading,getData}) => {

    return (
        <div className='RandomBeer'>
            <NavBar />
            <Link to="/random"><button className='btn btn-primary btn-sm mx-3 my-3'>Try another one</button></Link>
            {loading ? (<h1>Loading...</h1>):(
                getData,
                <DetailCard 
                    image={data.image_url} 
                    name={data.name}
                    attenuation={data.attenuation_level}
                    tagline={data.tagline}
                    first_brewed={data.first_brewed}
                    description={data.first_brewed}
                    contributed_by={data.contributed_by}/> 
                )
            }
             
        </div>
    );
};

export default RandomBeer;