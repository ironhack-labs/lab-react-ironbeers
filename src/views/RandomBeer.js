import React from "react";





const RandomBeer = ({ randomBeer }) => {


   

    return (
        <div className="Beer Details">
            { randomBeer ? (
                <div className="Beer">
                <div className='card'>
                    <div className="mt-5 mx-5">
                        <div className="mb-3">
                            <img src={randomBeer.image_url} style={{ height: 400, width: 180 }} className="card-img-top" alt=" " />
                        </div>
                        <div className="text-start">
                            <div className="d-flex justify-content-between">
                            <h3 className="fs-1 fw-light">{randomBeer.name}</h3>
                            <h3 className="fs-1 fw-light" style={{ color: 'grey' }}>{randomBeer.attenuation_level}</h3>
                            </div>
                            <h4 className="fs-6 " style={{ color: 'grey' }}>{randomBeer.tagline}</h4>
                            <p className="fs-6"><strong>{randomBeer.description}</strong></p>
                            <p className="fs-6" style={{ color: 'grey' }} ><strong> {randomBeer.contributed_by} </strong> </p>
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



export default RandomBeer;