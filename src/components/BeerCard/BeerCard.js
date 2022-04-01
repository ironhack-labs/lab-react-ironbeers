import React from "react";





const BeerCard = ({ name, image_url, tagline, contributed_by, 
    //description, first_brewed, _id 
}) => {

    // const [singleBeer, setSingleBeer] = useState(false) 
    // DUDA => COMO PUEDO REUTILIZAR BeerCard para la vista de BeerList & BeerDetals
    // const singleBeer = beers.find(beer => beer._id === id)


    // setBeerDetail({beerDetail:true})

    return (

        <div className="Beer">
            <div className='card'>
                <div className="d-flex mt-5 mx-5">
                    <div className="pe-5 mb-3">
                        <img src={image_url} style={{ height: 160, width: 55 }} className="card-img-top" alt=" " />
                    </div>
                    <div>
                        <h3 className="fs-1 fw-light">{name}</h3>
                        <h4 className="fs-2 " style={{ color: 'grey' }}>{tagline}</h4>
                        <p className="fs-6"><strong>Created by:</strong> {contributed_by}</p>
                        {/* {_id === {_id} && (
                        <div>
                            <p className="fs-6"><strong>description:</strong> {description}</p>
                            <p className="fs-6"><strong>first brewed:</strong> {first_brewed}</p>
                        </div>
                        )} */}
                    </div>
                    <hr />
                </div>
            </div>
        </div>
    )

}
export default BeerCard;