import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

function RandomBeer(props) {
    const [randomBeer, setRandomBeer] = useState(null);
    const [fetching, setFetching] = useState(true);


    const { beerId } = useParams();

    useEffect(() => {
        axios
            .get(`https://ih-beers-api2.herokuapp.com/beers/random`)
            .then((response) => {
                console.log('response.data', response.data);
                setRandomBeer(response.data);
                setFetching(false);
            });

    }, []);


    return (
        <>
            <header className='medium-padding cyan5'>
                <Link to='/'><i>home</i></Link>
            </header>
            <div className="col-sm">
            {fetching && <div className="loader large cyan" role="status">
                </div>}
                {randomBeer && (
                    <>
                        <div className="large-margin" key={randomBeer._id}>
                            <img src={randomBeer.image_url} style={{ height: '300px' }} />
                            <div className="row large-space">
                                <div>
                                    <table className="border large right-align">
                                        <thead></thead>
                                        <tbody className="large-padding">
                                            <tr>
                                                <td><h4>{randomBeer.name}</h4></td>
                                                <td className="grey-text large-text">IBU: {randomBeer.ibu}</td>
                                            </tr>
                                            <tr>
                                                <td><h5>{randomBeer.tagline}</h5></td>
                                                <td><strong>First brewed: <br />{randomBeer.first_brewed}</strong></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <div className="large-margin large-text">
                                        {randomBeer.description}
                                    </div>
                                    <div className="large-margin small-text">
                                        Contributed by: <br />{randomBeer.contributed_by}
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

export default RandomBeer;
