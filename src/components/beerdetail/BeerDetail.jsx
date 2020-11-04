import React from 'react'


export default function BeerDetail(props) {

    const id = props.match.params.idBeer
    const beersArray = props.beers
    const beerDetails = beersArray.find(beer => beer._id === id)
    console.log(beerDetails)

    return (
        <div className='d-flex justify-content-center align-items-center' style={{height: "100vh"}}>
            <div className="card mb-3 border-white" style={{maxWidth: "540px"}}>
                <div className='row no-gutters'>
                    <div className='col-md-4'>
                        <img className='card-img' src={beerDetails.image_url} alt={beerDetails.name}></img>
                    </div>
                    <div className='col-md-8'>
                        <div className='card-body'>
                            <h2 className='card-title'>{beerDetails.name}</h2>
                            <h5 className='font-weight-normal '>{beerDetails.tagline}</h5>
                            <div className='d-flex justify-content-between'>
                               
                                <p className='text-muted'>{beerDetails.first_brewed}</p>
                                <p className='font-weight-bold text-muted'>{beerDetails.attenuation_level}</p>
                            </div>
                     
                            
                            <p className='card-text'>{beerDetails.description}</p>
                            <p className='card-text'><small className='text-muted'>Created by: {beerDetails.contributed_by}</small> </p>
                        </div>

                    </div>

                </div>

            </div>


        </div>

    )
}
