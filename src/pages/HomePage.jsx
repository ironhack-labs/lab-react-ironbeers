import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div>
      <div>
        <img src={'./src/assets/beers.png'} alt="" />
        <Link to={'/beers'}>All Beers</Link>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore,
          laboriosam?
        </p>
      </div>
      <div>
        <img src={'./src/assets/random-beer.png'} alt="" />
        <Link to={'/random-beer'}>Random Beer</Link>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore,
          laboriosam?
        </p>
      </div>
      <div>
        <img src={'./src/assets/new-beer.png'} alt="" />
        <Link to={'/new-beer'}>New Beer</Link>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore,
          laboriosam?
        </p>
      </div>
    </div>
  );
}

export default HomePage;
