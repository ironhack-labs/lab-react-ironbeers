import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div>
        <div>
        <img src="../assets/beers.png" alt="" />
        <Link to={'/beers'}>
        <button>All Beers</button>
        </Link>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt sunt ipsa facilis praesentium! Neque, deleniti! Repudiandae libero, ipsum, dolorum aliquid accusantium expedita neque quam sit, aspernatur optio dicta nostrum in!</p>
        </div>

        <div>
        <img src="../assets/random-beer.png" alt="" />
        <Link to={'/random-beer'}>
        <button>Random Beer</button>
        </Link>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam commodi pariatur totam architecto voluptas, aut nam sunt hic esse iure. Quidem nostrum, sit assumenda soluta explicabo voluptates eos perferendis sunt.</p>
        </div>

        <div>
        <img src="../assets/new-beer.png" alt="" />
        <Link to={'/new-beer'}>
        <button>New Beer</button>
        </Link>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut eaque omnis corporis in quas laborum ipsam optio repellat veritatis ducimus voluptate laboriosam voluptates eum, et, repellendus ullam? Dolorem, quae possimus.</p>
        </div>
    </div>
  )
}

export default HomePage