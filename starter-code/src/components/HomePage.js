import React, { Component } from 'react';
import AllBeers from './AllBeers';
import NewBeer from './NewBeer';
import RandomBeer from './RandomBeer';
import {Link} from 'react-router-dom';

class HomePage extends Component {
  constructor(props){
    super(props)
  }

  render(){
    return(
      <div className="homePageContainer">
        <div className="card">
          <img src="./images/beers.png" alt="All Beers"/>
          <Link to='/allbeers'><h2>All Beers</h2></Link>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore magni voluptates quam, ducimus harum assumenda id, nihil maiores vero veniam facilis consequuntur, commodi suscipit dolorem numquam inventore delectus eum voluptas!</p>
        </div>
        <div className="card">
          <img src="./images/random-beer.png" alt="Random Beer"/>
          <Link to='/randombeer'><h2>Random Beer</h2></Link>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore magni voluptates quam, ducimus harum assumenda id, nihil maiores vero veniam facilis consequuntur, commodi suscipit dolorem numquam inventore delectus eum voluptas!</p>
        </div>
        <div className="card">
          <img src="./images/new-beer.png" alt="New Beer"/>
          <Link to='/newbeer'><h2>New Beer</h2></Link>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore magni voluptates quam, ducimus harum assumenda id, nihil maiores vero veniam facilis consequuntur, commodi suscipit dolorem numquam inventore delectus eum voluptas!</p>
        </div>
      </div>
    )
  }
}

export default HomePage;