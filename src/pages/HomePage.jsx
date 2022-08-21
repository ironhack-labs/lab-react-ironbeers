import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div>
        <Link to={'/beers'}>
        <div>
        <img src="../assets/beers.png" alt="" />
        <button>All Beers</button>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt sunt ipsa facilis praesentium! Neque, deleniti! Repudiandae libero, ipsum, dolorum aliquid accusantium expedita neque quam sit, aspernatur optio dicta nostrum in!</p>
        </div>
        </Link>

        <Link to={'/random-beer'}>
        <div>
        <img src="../assets/random-beer.png" alt="" />
        <button>Random Beer</button>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam commodi pariatur totam architecto voluptas, aut nam sunt hic esse iure. Quidem nostrum, sit assumenda soluta explicabo voluptates eos perferendis sunt.</p>
        </div>
        </Link>

        <Link to={'/new-beer'}>
        <div>
        <img src="../assets/new-beer.png" alt="" />
        <button>New Beer</button>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut eaque omnis corporis in quas laborum ipsam optio repellat veritatis ducimus voluptate laboriosam voluptates eum, et, repellendus ullam? Dolorem, quae possimus.</p>
        </div>
        </Link>
    </div>
  )
}

export default HomePage