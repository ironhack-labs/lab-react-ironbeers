import React, { Component } from 'react';
import Card from '../components/Card';

class index extends Component {
    state={
      img: '',
      name:'',
      description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
    }

    randomBeer = () => {
      const randomNumber = Math.round(Math.random()*92)
      console.log(randomNumber)
    }

    render() {
        return ( 
          <div>
            <Card 
              img = {'images/beers.png'}
              name='All Beers'
              description={this.state.description}
            />
            <Card 
              img={'images/random-beer.png'}
              name="Random Beer"
              description={this.state.description}
            />
            <Card 
              img={'images/new-beer.png'}
              name="New Beer"
              description={this.state.description}
            />
          </div>
        );
    }
}

export default index;