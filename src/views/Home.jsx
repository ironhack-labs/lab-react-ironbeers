// import { render } from '@testing-library/react';
import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component {
  render() {
    return (
      <div>
        <div>
          <Link to={'/beers'}>
            <img src="/images/beers.png" alt=""></img>{' '}
          </Link>
          <h1>All Beers</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi
            iusto voluptatibus accusantium placeat rerum voluptas corrupti
            distinctio veniam repudiandae consequatur eaque at, autem eum dicta
            et error libero. Sint, libero.
          </p>
        </div>
        <div>
          <Link to={'/random-beer'}>
            <img src="/images/random-beer.png" alt=""></img>{' '}
          </Link>
          <h1>Random Beer</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi
            iusto voluptatibus accusantium placeat rerum voluptas corrupti
            distinctio veniam repudiandae consequatur eaque at, autem eum dicta
            et error libero. Sint, libero.
          </p>
        </div>
        <div>
          <Link to={'/new-beer'}>
            <img src="/images/new-beer.png" alt=""></img>{' '}
          </Link>
          <h1>Create a beer</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi
            iusto voluptatibus accusantium placeat rerum voluptas corrupti
            distinctio veniam repudiandae consequatur eaque at, autem eum dicta
            et error libero. Sint, libero.
          </p>
        </div>
      </div>
    );
  }
}

export default Home;
