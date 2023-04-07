import { Link } from 'react-router-dom';
import './BeersList.css'

const BeersList = (props) => {
    return (
        <div className="container">
            <div className="row mt-5">
                {props.beers.map((beer) => {
                    return(
                        <Link className="col-md-6 col-12 link-router" to={`/beers/${beer._id}`} key={beer._id}>
                            <div className="row beer-element">
                                <div className="col-2">
                                    <img src={beer.image_url} alt={beer.name} style={{width:'80px', height:'150px'}} />
                                </div>
                                <div className="col-10 text-start">
                                    <h4 className='ms-5'>{beer.name}</h4>
                                    <h5 className='ms-5'>{beer.tagline}</h5>
                                    <br /> <br />
                                    <p className='ms-5'>Created By: <strong>{beer.name}</strong></p>
                                </div>
                            </div>
                            <br />
                        </Link>
                    )
                })}
            </div>
        </div>
    );
};

export default BeersList;