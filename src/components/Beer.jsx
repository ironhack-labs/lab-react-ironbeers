import React from 'react';
import { Link } from 'react-router-dom';


const Beer = ({ image_url, name, tagline, contributed_by, _id }) => {

    return (
        <div className="Beer border py-5" key={_id}>
            <Link to={`/${_id}`} className="text-decoration-none">
                <div className="d-flex">
                    <span className="w-25 d-flex justify-content-center">
                        <img src={image_url} alt={name} style={{ height: 250 }} />

                    </span>
                    <div className="d-flex flex-column align-items-start justify-content-around py-5">
                        <h2>{name}</h2>
                        <p>{tagline}</p>
                        <p>{contributed_by}</p>


                    </div>


                </div>
            </Link>
        </div>
    )


}

export default Beer;