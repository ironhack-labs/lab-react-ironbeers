import React from 'react'
import {Link} from 'react-router-dom'


const BeerCard =(props)=>{
    return(
        
            <div className='col-md-3'>
                <figure>
                    <img src={props.image_url} alt={props.name} className='beer'/>
                </figure>
                <Link to={`/${props._id}`}><h2>{props.name}</h2></Link>
                <p>{props.tagline}</p>
                <p>{props.contributed_by}</p>
                <hr></hr>
            </div>
        
    )
}

export default BeerCard