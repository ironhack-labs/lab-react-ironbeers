//jshint esversion:9
import axios from 'axios';
import {Link} from 'react-router-dom';
import { useEffect, useState } from 'react';

export const AllBeers = () => {
    const [beers, setBeers] = useState([]);
    const [userSearch, setUserSearch] = useState("");

    useEffect(()=>{

        (async () => {

            let response = await axios.get("https://ih-beers-api2.herokuapp.com/beers");
            setBeers(response.data);

        })();

    },[]);

    const handleFilter = (e) => {
        
        setUserSearch(e.target.value);

        (async () => {

            let response = await axios.get(`https://ih-beers-api2.herokuapp.com/beers/search?q=${e.target.value}`);
            setBeers(response.data);
            
        })();
    };


    return (
        <div className="AllBeers col-12"> 

            <nav className='navbar navbar-dark bg-primary'>

                <div className="container-fluid">

                    <Link to="/" className="navbar-brand"> <h3>Home</h3> </Link>
                </div>
            </nav>
            <label>
                <input type="text" id="searchBeer" value={userSearch} onChange={handleFilter}/>
            </label>
            {beers.map(beer => {

                return(
                    
                    <div key={beer._id} className="beers-beer">
                    
                        <div className="beers-beer-container">

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
                                <p><b>Contributed by: </b>{beer.contributed_by}</p>
                            </div>

                        </div>
                    
                    </div>
                )
            })}
        </div>
    )
}
