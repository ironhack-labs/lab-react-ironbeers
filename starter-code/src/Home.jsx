import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './Home.css';

// import AllBeers from './components/beers'
// import RandomBeer from './components/random-beer'
// import NewBeer from './components/new-beer'

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {

    return (
      <div className='Home container pl-0 pr-0'>
        <div className='All-beers'>
          <img  className="img-fluid" src="../images/beers.png" alt="AllBeers" />
          <div className="container-fluid pt-3">
            <Link to='/beers'>
              <h5 className="mb-0">All Beers</h5>
            </Link>
            <p className="p-0">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus culpa amet neque aliquid mollitia, laboriosam consequuntur quidem sint obcaecati harum minima error, nulla placeat illo laudantium? Nostrum nam fugiat eligendi!
        </p>
          </div>
        </div>

        <div className='Random-Beer'>
          <img className="img-fluid" src="../images/random-beer.png" alt="RandomBeer" />
          <div className="container-fluid pt-3">
            <Link to='/random-beer'>
              <h5 className="mb-0">Random Beer</h5>
            </Link>
            <p className="p-0">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus culpa amet neque aliquid mollitia, laboriosam consequuntur quidem sint obcaecati harum minima error, nulla placeat illo laudantium? Nostrum nam fugiat eligendi!
        </p>
          </div>
        </div>

        <div className='new-beer'>
          <img className="img-fluid" src="../images/new-beer.png" alt="NewBeer" />
          <div className="container-fluid pt-3">
            <Link to='/new-beer'>
              <h5 className="mb-0">New Beer</h5>
            </Link>
            <p className="p-0">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus culpa amet neque aliquid mollitia, laboriosam consequuntur quidem sint obcaecati harum minima error, nulla placeat illo laudantium? Nostrum nam fugiat eligendi!
        </p>
          </div>
        </div>
      </div >
    )
  }
}

export default Home;