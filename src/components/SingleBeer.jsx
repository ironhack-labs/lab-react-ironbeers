import React from 'react'
import { Link } from 'react-router-dom';
import uuid from 'react-uuid'
export default function SingleBeer(props) {
    const { allBeers } = props;
    const { image_url, name, tagline, contributed_by, _id } = props.beer;

    return (
        <Link key={uuid()} to={`/beer/${_id}`}>
        {allBeers && <div className='flex flex-row justify-center items-center place-items-center justify-items-center'>
                <div className='w-1/4 flex flex-row justify-center items-center place-items-center justify-items-center'>
                    <img src={image_url} alt={name} className="p-5 h-56" />
                </div>
                <div className="flex flex-col justify-center items-start place-items-center justify-items-center w-3/4">
                    <h3>{name}</h3>
                    <p>{tagline}</p>                    
                    <p><strong>Created by:</strong> {contributed_by}</p>
                </div>
            </div>
        }       
        <hr />
        </Link> 
    )
}
