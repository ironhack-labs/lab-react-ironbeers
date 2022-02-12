import { Link } from 'react-router-dom';
import beers from '../../assets/beers.png';
import randomBeer from '../../assets/random-beer.png';
import newBeer from '../../assets/new-beer.png';

const HomePage = () => {
    return (
      <div>
        <div>
          <section>
            <img src={beers} alt="beers" />
          </section>
          <Link to="/beers">All Beers</Link>
          <p>
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only
            five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
          <hr />
        </div>
        <div>
          <section>
            <img src={randomBeer} alt="random beer" />
          </section>
          <Link to="/random-beer">Random Beer</Link>
          <p>
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only
            five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
          <hr />
        </div>
        <div>
          <section>
            <img src={newBeer} alt="random beer" />
          </section>
          <Link to="/new-beer">New Beer</Link>
          <p>
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only
            five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
          <hr />
        </div>
      </div>
    );
}

export default HomePage;