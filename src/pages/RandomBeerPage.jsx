import axios from 'axios';
import {useState, useEffect} from 'react';

function RandomBeersPage() {
    const [randomBeer, setRandomBeer] = useState('');
    const [fetching, setFetching] = useState(true);

    useEffect(()=>{
        axios.get('https://ih-beers-api2.herokuapp.com/beers/random').then((response)=>{
            setRandomBeer(response.data);
            setFetching(false);
        });
        
    }, []);
    return(
        <div className='details-card'>
            {fetching && (
            <p>Loading...</p>
            )}
            <div className="card details" style={{width: '30rem'}}>
                <img src={randomBeer.image_url} className="card-img-top" alt="Beer image"/>
                <div className="card-body details-info" style={{maxWidth: '30rem'}}>
                    <div className='details-name'>
                        <div>
                            <h2>{randomBeer.name}</h2>
                            <h4>{randomBeer.tagline}</h4>
                        </div>
                        <div>
                            <h2 className='orange-text'>{randomBeer.attenuation_level}</h2>
                            <b>{randomBeer.first_brewed}</b>
                        </div>
                    </div>
                    <p>{randomBeer.description}</p>
                    <p className='orange-text'>{randomBeer.contributed_by}</p>
                </div>
            </div>
        </div>
    )
}

export default RandomBeersPage;
