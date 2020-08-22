import React from 'react'

import {Link} from 'react-router-dom';
import BeerInfo from './BeerInfo'

export default function Beer(props) {
    let beer = props.beers.find((beer)=>{
        return beer._id === props.match.params.id
    })
    if(!beer){ //Prevents the React flow
        return <p>Loading...</p>
    }
    return (
        <div>
        <Link to={'/home'}><img src='https://user-images.githubusercontent.com/23629340/40707029-cb2fce12-63ef-11e8-939c-f673ff3b965d.png' alt='img' width ='100%'/></Link>
            <BeerInfo beer = {beer}/>
        </div>
    )
}
