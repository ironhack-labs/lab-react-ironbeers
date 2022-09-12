import { useParams } from 'react-router-dom';
import Header from '../components/Header';

function BeerDetails({beersList, randomBeerId}) {
  const beerId = useParams().id ?? randomBeerId;
  const beer = beersList.find(beer => beer._id === beerId);

  if (!beer)
    return (<p>Wrong request parameters.</p>);
  return (
    <>
      <Header />
      <div className='beer-details'>
        <img alt={beer.name + ' img'} src={beer.image_url}/>
        <h1>{beer.name}</h1>
        <h2>{beer.tagline}</h2>
        <span className="brewed">{beer.first_brewed}</span>
        <span className="attenuation">{beer.attenuation_level}</span>
        <p>{beer.description}</p>
        <h3 className="contributed">{beer.contributed_by}</h3>
      </div>
    </>
  );
}

export default BeerDetails;
