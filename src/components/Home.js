import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div id="home-beer">
      <div className="card" style={{ width: '18rem' }}>
        <Link to={'/beers'}>
          <img className="card-img-top" src="./allbeers.PNG" alt="beerpic"/>
          <div className="card-body">
            <h1 style={{ color: 'black' }} className="card-title">All Beers</h1>
            <p style={{ color: 'gray' }} className="card-text">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt.
            </p>
          </div>
        </Link>
      </div>

      <div className="card" style={{ width: '18rem' }}>
        <Link to={'/random-beer'}>
          <img className="card-img-top" src="./randombeer.PNG" alt="beerpic"/>
          <div className="card-body">
            <h1 style={{ color: 'black' }}className="card-title">Randoom Beer</h1>
            <p style={{ color: 'gray' }} className="card-text">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt.
            </p>
          </div>
        </Link>
      </div>

      <div className="card" style={{ width: '18rem' }}>
        <Link to={'/new-beer'}>
          <img className="card-img-top" src="./newBeer.PNG" alt="beerpic"/>
          <div className="card-body">
            <h1 style={{ color: 'black' }} className="card-title">New Beer</h1>
            <p style={{ color: 'gray' }} className="card-text">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt.
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
}
