import { useLocation } from 'react-router-dom';
import Header from '../components/Header';

function BeerDetails() {
  const { state } = useLocation();
  const beer = state;

  return (
    <div>
      <Header />
      <div>
        <img width={80} src={beer.image_url} alt='' />
        <div>{beer.name}</div>
        <div>{beer.first_brewed}</div>
        <div>{beer.attenuation_level}</div>
        <div>{beer.description}</div>
        <p>{beer.contributed_by}</p>
      </div>
    </div>
  );
}

export default BeerDetails;
