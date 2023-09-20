import Header from '../components/Header';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';

function SingleBeer() {
  const [singleBeer, setSingleBeer] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    axios.get(`https://ih-beers-api2.herokuapp.com/beers/${id}`).then((response) => {
      console.log(console.log(response.data));
      setSingleBeer(response.data);
    });
  }, [id]);

  if (!singleBeer) return <p>Loading...</p>;

  return (
    <div>
      <div className="header">
        <Header />
      </div>
      <h1>SingleBeer</h1>

      <div>
        <img src={singleBeer.image_url} alt="beer" />
        <h1>{singleBeer.name}</h1>
      </div>
    </div>
  );
}

export default SingleBeer;
