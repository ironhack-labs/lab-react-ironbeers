import React from "react";
import { useParams } from "react-router";



const BeerDetail = ({ beers }) => {

    const { id } = useParams()
    
    const singleBeer = beers.find(beer => beer._id === id)
    //const randomBeer = randomBeer
    
    // beers.find(beer => beer._id === ranId)


    return (
        <div className="Beer Details">
            { singleBeer ? (
                <div className="Beer">
                <div className='card'>
                    <div className="mt-5 mx-5">
                        <div className="mb-3">
                            <img src={singleBeer.image_url} style={{ height: 400, width: 180 }} className="card-img-top" alt=" " />
                        </div>
                        <div className="text-start">
                            <div className="d-flex justify-content-between">
                            <h3 className="fs-1 fw-light">{singleBeer.name}</h3>
                            <h3 className="fs-1 fw-light" style={{ color: 'grey' }}>{singleBeer.attenuation_level}</h3>
                            </div>
                            <h4 className="fs-6 " style={{ color: 'grey' }}>{singleBeer.tagline}</h4>
                            <p className="fs-6"><strong>{singleBeer.description}</strong></p>
                            <p className="fs-6" style={{ color: 'grey' }} ><strong> {singleBeer.contributed_by} </strong> </p>
                        </div>
                        <hr />
                    </div>
                </div>
            </div>
            ):(
                <h1>Loading...</h1>
            )}
        </div>
    )
};

export default BeerDetail


