import React from 'react';
import { useParams } from 'react-router-dom';
import BeerCard from '../../components/BeerCard/BeerCard';
import axios from 'axios';
import NavBar from '../../components/NavBar/NavBar';

function Beer() {
  const { beerId } = useParams();
  const [beer, setBeer] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  const getBeer = async () => {
      const { data } = await axios.get(
        `https://ih-beers-api2.herokuapp.com/beers/${beerId}`
      );
      setBeer(data);
      setLoading(true);
  };
  React.useEffect(() => {
    getBeer();
  }, []);
  return (
    <div>
      <NavBar></NavBar>
      {loading ? <BeerCard key={beer._id} beer={beer}></BeerCard> : <p>Loading...</p>}
    </div>
  );
}

export default Beer;
