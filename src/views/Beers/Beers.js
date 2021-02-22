import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import BeerList from '../../components/BeerList/BeerList';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Beers() {
  const [beers, setBeers] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  const getBeers = async () => {
    const { data } = await axios.get(
      'https://ih-beers-api2.herokuapp.com/beers'
    );
    setBeers(data);
    setLoading(true);
  };
  React.useEffect(() => {
    getBeers();
  }, []);
  console.log(beers)
  return (
    <div>
      <NavBar></NavBar>
      {loading ? (
        beers.map((beer) => (
          <Link key={beer._id} to={`/beers/${beer._id}`}>
            <BeerList beer={beer}></BeerList>
          </Link>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Beers;
