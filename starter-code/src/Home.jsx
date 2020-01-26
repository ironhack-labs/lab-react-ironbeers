import React, { Component} from 'react'
import { Link } from 'react-router-dom';
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
    <div className='Home'>
      <div className='All-beers'>
        <img src="../images/beers.png" alt="AllBeers"/>
        <Link to='/beers'><h5>All Beers</h5></Link>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus culpa amet neque aliquid mollitia, laboriosam consequuntur quidem sint obcaecati harum minima error, nulla placeat illo laudantium? Nostrum nam fugiat eligendi!
        </p>
      </div>

      <div className='Random-Beer'>
        <img src="../images/random-beer.png" alt="RandomBeer"/>
        <Link to='/random-beer'><h5>Random Beer</h5></Link>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus culpa amet neque aliquid mollitia, laboriosam consequuntur quidem sint obcaecati harum minima error, nulla placeat illo laudantium? Nostrum nam fugiat eligendi!
        </p>
      </div>

      <div className='new-beer'>
        <img src="../images/new-beer.png" alt="NewBeer"/>
        <Link to='/new-beer'><h5>New Beer</h5></Link>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus culpa amet neque aliquid mollitia, laboriosam consequuntur quidem sint obcaecati harum minima error, nulla placeat illo laudantium? Nostrum nam fugiat eligendi!
        </p>
      </div>
    </div>
  )
}
}

export default Home;