import { Link } from 'react-router-dom';
import Header from '../components/Header';

function Beers({beersList}) {
  return (
    <div>
      <Header />
      {beersList.map(beer => {
        return(
          <Link key={beer._id} className='beer-card' to={'/beers/' + beer._id}>
            <img alt={beer.name + ' img'} src={beer.image_url}/>
            <div className="beer-info">
              <h2>{beer.name}</h2>
              <h3>{beer.tagline}</h3>
              <p><span>Created by: </span>{beer.contributed_by}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default Beers;
