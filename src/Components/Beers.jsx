import {useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import Header from './Header';

function BeerList() {
    const [beers, setBeers] = useState([]);
    
    useEffect(() => {
        axios.get('https://ih-beers-api2.herokuapp.com/beers')
          .then(allBeers => {
              console.log("🚀 ~ file: Beers.jsx:13 ~ useEffect ~ allBeers:", allBeers);
              return setBeers(allBeers.data);
          })
          .catch(error => console.error(error));
      }, []);

      return(
        <div>
            <Header/>
            <h1>List of Beers</h1>
            <br/>
            {beers.map(beer => (
                <div key={beer._id}>
<img src={beer.image_url} alt={beer.name} style={{ height: '100px' }} />
          <h2>{beer.name}</h2>
          <br/>
          <p>{beer.tagline}</p>
          <br/>
          <p>Contributed by: {beer.contributed_by}</p>
          <br/>
          <Link to={`/beers/${beer._id}`}>See details</Link>
          <br/>
        </div>
      ))}
      <br/>
    </div>
  );
}

export default BeerList;






