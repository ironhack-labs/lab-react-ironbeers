import axios from 'axios';
import Header from '../components/Header';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Beers() {
    console.log('Beer')
    const [beers, setBeers] = useState([]);
    const getFromApi = async () => {
      try {
        const response = await axios.get('https://ih-beers-api2.herokuapp.com/beers');
        setBeers(response.data);
        console.log(response.data)
      } catch(error) {
        console.log(error);
      }
    };

    useEffect(() => {
      getFromApi();
    },[]);

  return (
    <div>
     <Header className="navbar-brand" />
    <div> 
      {beers.map((beer) => {
        return (
        <div className='container'>   
         <div className='beers'>
            <Link className='beer-detail' to={`/beers-detail/${beer._id}`}>
            <img src={beer.image_url} alt='beers'/>
            </Link>
            <div className='beer-description'>
            <h2>{beer.name}</h2>
            <p>{beer.tagline}</p>
            <p><b>Created by: </b>{beer.contributedBy}</p>
            </div>
         </div>
         </div> 


        )
      })}
    </div>

    </div>
  );
}

export default Beers