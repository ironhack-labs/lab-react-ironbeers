import { Link } from 'react-router-dom';
import Beer from '../assets/beers.png';
import newBeer from '../assets/new-beer.png';
import rndBeer from '../assets/random-beer.png';

function Home() {
  return (
    <div>
      <img src={Beer} alt='beer' />
      <Link to={`/beers`}>
        <h1>Beers</h1>
      </Link>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur error optio consequatur
        odit officia atque deserunt rem dolores asperiores. Omnis quo fuga explicabo pariatur
        reprehenderit eos officia necessitatibus ea fugit? Incidunt, eius. Maxime quos quasi facilis
        nisi sed corporis vitae voluptatem! Fugit expedita dolores accusantium. Quo nulla ducimus
        beatae ipsa, eos placeat sapiente numquam, nihil eaque laborum totam, recusandae temporibus!
      </p>
      <img src={newBeer} alt='Beer Glass' />
      <Link to={`/Random-beer`}>
        <h1>Random beer</h1>
      </Link>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur error optio consequatur
        odit officia atque deserunt rem dolores asperiores. Omnis quo fuga explicabo pariatur
        reprehenderit eos officia necessitatibus ea fugit? Incidunt, eius. Maxime quos quasi facilis
        nisi sed corporis vitae voluptatem! Fugit expedita dolores accusantium. Quo nulla ducimus
        beatae ipsa, eos placeat sapiente numquam, nihil eaque laborum totam, recusandae temporibus!
      </p>
      <img src={rndBeer} alt='Beer Random' />
      <Link to={`/New-beer`}>
        <h1>New beer</h1>
      </Link>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur error optio consequatur
        odit officia atque deserunt rem dolores asperiores. Omnis quo fuga explicabo pariatur
        reprehenderit eos officia necessitatibus ea fugit? Incidunt, eius. Maxime quos quasi facilis
        nisi sed corporis vitae voluptatem! Fugit expedita dolores accusantium. Quo nulla ducimus
        beatae ipsa, eos placeat sapiente numquam, nihil eaque laborum totam, recusandae temporibus!
      </p>
    </div>
  );
}

export default Home;
