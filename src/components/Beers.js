import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import BeerDetails from './BeerDetails';

const Beers = () => {
    const [beersArr, setBeersArr] = React.useState([]);

    React.useEffect(() => {
        axios
            .get('https://ih-beers-api2.herokuapp.com/beers')
            .then((results) => {
                console.log(results.data);
                setBeersArr(results.data);
            })
            .catch((err) => {
                console.log(err.message)
            });
    }, []);

    return (

        <div>
            <header className='homepage'>
                <Link to='/'>Home</Link>
            </header>
            <h2>Beers</h2>
            {beersArr.map((beer) => {
                
                return (
                    <div className="col" key={beer._id}>
                        <div>
                            <img style={{ height: '200px' }} src={beer.image_url} alt={beer.name}></img>
                        </div>
                        <div>
                            <h3><Link to={`/beers/${beer._id}`} element={<BeerDetails />}>{beer.name}</Link></h3>
                            <h4><i>{beer.tagline}</i></h4>
                            <h5>Created by: {beer.contributed_by}</h5>
                        </div>
                    </div>
                    
                )
            })}
        </div>
    )

}

export default Beers;