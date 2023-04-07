import { useParams } from "react-router-dom";

const BeerDetails = (props) => {

    const {beerId} = useParams();

    const oneBeer = props.beers.find(beer => beer._id === beerId);

    return(
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <img src={oneBeer.image_url} alt={oneBeer.name} style={{width:'100px', marginTop:'50px'}} />
                </div>
            </div>
            <div className="row">
                <div className="col-8 mt-5 text-white text-start">
                    <h2 className="fw-bolder">{oneBeer.name}</h2>
                    <p className="fw-bold fst-italic">{oneBeer.tagline}</p>
                </div>
                <div className="col-4 mt-5 text-end text-light">
                    <h2>{oneBeer.attenuation_level}</h2>
                    <p>{oneBeer.first_brewed}</p>
                </div>
            </div>
            <div className="row">
                <div className="col-12 text-start text-light">
                    <p>{oneBeer.description}</p>
                </div>
            </div>
            <div className="row">
                <div className="col-12 text-light">
                    <p>{oneBeer.contributed_by}</p>
                </div>
            </div>
        </div>
    )

};

export default BeerDetails;