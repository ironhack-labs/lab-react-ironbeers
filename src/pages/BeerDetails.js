import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

function BeerDetails(props) {
    const [singleBeer, setSingleBeer] = useState(null);
    const [fetching, setFetching] = useState(true);


    const { beerId } = useParams();

    useEffect(() => {
        axios
            .get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
            .then((response) => {
                console.log('response.data', response.data);
                setSingleBeer(response.data);
                setFetching(false);
            });

    }, [beerId]);


    return (
        <>
            <header className='medium-padding cyan5'>
                <Link to='/'><i>home</i></Link>
            </header>
            <div className="col-sm large-margin">
                {fetching && <div className="loader large cyan" role="status">
                </div>}
                {singleBeer && (
                    <>
                        <div className="large-margin" key={singleBeer._id}>
                            <img src={singleBeer.image_url} style={{ height: '300px' }} />
                            <div className="row large-space">
                                <div>
                                    <table className="border large right-align">
                                        <thead></thead>
                                        <tbody className="large-padding">
                                            <tr>
                                                <td><h4>{singleBeer.name}</h4></td>
                                                <td className="grey-text large-text">IBU: {singleBeer.ibu}</td>
                                            </tr>
                                            <tr>
                                                <td><h5>{singleBeer.tagline}</h5></td>
                                                <td><strong>First brewed: <br />{singleBeer.first_brewed}</strong></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <div className="large-margin large-text">
                                        {singleBeer.description}
                                    </div>
                                    <div className="large-margin small-text">
                                        Contributed by: <br />{singleBeer.contributed_by}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </>
    );
}

export default BeerDetails;
