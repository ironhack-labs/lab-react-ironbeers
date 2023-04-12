import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <section>
      <Link to={'/beers'} className='text-decoration-none text-dark'>
        <img src='/beers.png' alt='beers' />
        <h1>All Beers</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates perspiciatis voluptatibus ex libero praesentium sint numquam beatae, eos quam omnis ducimus? Ipsam illo quia voluptates sit voluptas laboriosam, ut suscipit!</p>
      </Link>
      </section>

      <section>
        <Link to={'/random-beer'} className='text-decoration-none text-dark'>
          <img src='/random-beer.png' alt='random beer' />
          <h1>Random Beeer</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates perspiciatis voluptatibus ex libero praesentium sint numquam beatae, eos quam omnis ducimus? Ipsam illo quia voluptates sit voluptas laboriosam, ut suscipit!</p>
        </Link>
      </section>

      <section>
        <Link to={'/new-beer'} className='text-decoration-none text-dark'>
          <img src='/new-beer.png' alt='new beer' />
          <h1>New Beer</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates perspiciatis voluptatibus ex libero praesentium sint numquam beatae, eos quam omnis ducimus? Ipsam illo quia voluptates sit voluptas laboriosam, ut suscipit!</p>
        </Link>
      </section>
    </div >
  );
}

export default Home;