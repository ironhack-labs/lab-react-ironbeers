import { Link } from "react-router-dom";

function Beers({ beers }) {
  const renderBeers = beers.map((beer) => {
    return (
      <Link to={`/beers/${beer._id}`}>
        <div className='beer-list-card'>
          <div className='beer-list-img'>
            <img src={beer.image_url} alt='Beer bottle' />
          </div>
          <div className='beer-list-text'>
            <h1>{beer.name}</h1>
            <h3>{beer.tagline}</h3>
            <p>
              <strong>Created by: </strong>
              {beer.contributed_by}
            </p>
          </div>
        </div>
      </Link>
    );
  });

  return <div className='beer-list'>{renderBeers}</div>;
}

export default Beers;
