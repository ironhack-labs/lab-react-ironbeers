import React, { Component } from 'react';
import axios from 'axios';

class RandomBeer extends Component {

    state = {
        beer: {}
      }
    
      async componentDidMount(){
    
        let res = await axios.get('https://ih-beers-api2.herokuapp.com/beers/random')

        this.setState({ beer: res.data  });
    
      }
    
    
    render() {
        return (
            <div>
                {this.state.beer.name}
            </div>
        );
    }
}

export default RandomBeer;