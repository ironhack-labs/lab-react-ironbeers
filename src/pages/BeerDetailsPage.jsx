import {useParams} from 'react-router-dom';
import axios from 'axios';
import {useState, useEffect} from 'react';

function BeerDetailsPage() {
    const [foundBeer, setFoundBeer] = useState('');
    const [fetching, setFetching] = useState(true);
    const {beerId} = useParams();

    useEffect(()=>{
        axios.get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`).then((response)=>{
            setFoundBeer(response.data);
            setFetching(false);
        });
    }, []);
    return(
        <div className='details-card'>
            {fetching && (
            <p>Loading...</p>
            )}
            <div className="card details" style={{width: '30rem'}}>
                <img src={foundBeer.image_url} className="card-img-top" alt="Beer image"/>
                <div className="card-body details-info" style={{maxWidth: '30rem'}}>
                    <div className='details-name'>
                        <div>
                            <h2>{foundBeer.name}</h2>
                            <h4>{foundBeer.tagline}</h4>
                        </div>
                        <div>
                            <h2 className='orange-text'>{foundBeer.attenuation_level}</h2>
                            <b>{foundBeer.first_brewed}</b>
                        </div>
                    </div>
                    <p>{foundBeer.description}</p>
                    <p className='orange-text'>{foundBeer.contributed_by}</p>
                </div>
            </div>
        </div>
    )
}

export default BeerDetailsPage;