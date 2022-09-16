import { Link } from 'react-router-dom';

function HomePage({beersImg, randomBeerImg, newBeerImg}) {
  return (
    <div>
      <Link to="/beers" className='link-card'>
        <img alt="all beers img" src={beersImg}/>
        <h1>All Beers</h1>
        <p>Sed augue lacus, viverra vitae congue. Volutpat maecenas volutpat blandit aliquam etiam erat velit, scelerisque in dictum non, consectetur a erat nam at lectus urna duis convallis convallis tellus, id!</p>
      </Link>
      <Link to="/random-beer" className='link-card'>
        <img alt="random beer img" src={randomBeerImg}/>
        <h1>Random Beer</h1>
        <p>Aliquet nibh praesent tristique magna sit amet purus gravida quis blandit turpis cursus in? Nulla facilisi cras fermentum, odio eu feugiat pretium, nibh ipsum consequat nisl, vel pretium lectus quam!</p>
      </Link>
      <Link to="/new-beer" className='link-card'>
        <img alt="new beer img" src={newBeerImg}/>
        <h1>New Beer</h1>
        <p>Donec pretium vulputate sapien nec sagittis aliquam! Quis risus sed vulputate odio ut enim blandit volutpat maecenas volutpat blandit aliquam etiam erat velit, scelerisque in dictum non, consectetur a erat.</p>
      </Link>
    </div>
  );
}

export default HomePage;