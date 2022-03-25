//jshint esversion:9
import axios from 'axios';
import {Link} from 'react-router-dom';
import { useEffect, useState } from 'react';

export const AllBeers = () => {
    const [beers, setBeers] = useState([]);

    useEffect(()=>{

        (async () => {
            let response = await axios.get("https://ih-beers-api2.herokuapp.com/beers");
            setBeers(response.data);

            console.log('response.data =>', response.data);
        })();

    },[]);

    return (
        <div className="AllBeers"> 
            <nav>
                <Link to="/"> <h3>Home</h3> </Link>
            </nav>

            {beers.map(beer => {

                return(
                    <div className="oneBeer">
                    
                        <div key={beer._id} className="beers-beer-container">

                            <div className='beers-beer-img-container'>
                                <img src={beer.image_url} alt="beer" style={{height: "200px"}}/>
                            </div>
                            
                            <div className="beers-beer-info">
                            
                                <h2 className='beers-beer-info-name'>
                                    <Link to={`/beers/${beer._id}`}>
                                        {beer.name} 
                                    </Link>
                                </h2>
            
                                <p className='beers-beer-tagline'>{beer.tagline}</p>
                                <p><b>Contributed by: </b>{beer.contributed_by.split("<")[0].trim()}</p>
                            </div>

                        </div>
                    
                    </div>
                )
            })}
        </div>
    )
}
