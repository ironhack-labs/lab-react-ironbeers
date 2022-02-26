import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import BeerDetails from "./BeerDetails";


function Beers() {

    const [beers, setBeers] = useState([]);
    const [fetching, setFetching] = useState(true);


    useEffect(() => {
        axios
            .get("https://ih-beers-api2.herokuapp.com/beers")
            .then((response) => {
                console.log('response.data', response.data);
                setBeers(response.data);
                setFetching(false);
            });

    }, []);


    return (
        <>
            <header className='medium-padding cyan5'>
                <Link to='/'><i>home</i></Link>
            </header>
            <div className="large-margin">
                {fetching && <div className="loader large cyan" role="status">
                </div>}
                {beers.map((beer) => (
                    <div className="large-padding">
                        <div className="row no-wrap medium-space" key={beer._id}>
                            <div className="col">
                                <img style={{ height: '200px' }} src={beer.image_url}></img>
                            </div>
                            <div className="col">
                                <div className="no-padding">
                                    <h5><Link class="card-link" to={`/beers/${beer._id}`} element={<BeerDetails beer={beer} />}>{beer.name}</Link></h5>
                                    <h6>{beer.tagline}</h6>
                                    <p>created by: {beer.contributed_by}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>

    );
}

export default Beers;
