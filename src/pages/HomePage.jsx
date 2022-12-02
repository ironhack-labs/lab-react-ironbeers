import { Link } from 'react-router-dom';
import styled from 'styled-components';
import allBeers from '../assets/beers.png';
import randomBeer from '../assets/random-beer.png';
import newBeer from '../assets/new-beer.png';

function HomePage() {
  return (
    <Wrapper>
      <section>
        <img src={allBeers} alt='bar' />
        <div className='text-info'>
          <h3>
            <Link className='link' to='/beers'>
              All Beers
            </Link>
          </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet,
            fugiat veniam sunt sed culpa voluptatem aliquid dolor illo sequi.
          </p>
        </div>
      </section>
      <section>
        <img src={randomBeer} alt='random' />
        <div className='text-info'>
          <h3>
            <Link className='link' to='/random-beer'>
              Random Beer
            </Link>
          </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet,
            fugiat veniam sunt sed culpa voluptatem aliquid dolor illo sequi.
          </p>
        </div>
      </section>
      <section>
        <img src={newBeer} alt='new' />
        <div className='text-info'>
          <h3>
            <Link className='link' to='/new-beer'>
              New Beer
            </Link>
          </h3>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet,
            fugiat veniam sunt sed culpa voluptatem aliquid dolor illo sequi.
          </p>
        </div>
      </section>
    </Wrapper>
  );
}

const Wrapper = styled.main`
  section {
    height: 30vh;
    width: 100vw;
  }
  section img {
    width: 100%;
    height: 60%;
    object-fit: cover;
  }
  .text-info {
    margin-left: 10px;
  }
  h3 {
    margin: 5px 0;
  }
  .link {
    text-decoration: none;
    color: #bf2a2e;
  }
`;

export default HomePage;
