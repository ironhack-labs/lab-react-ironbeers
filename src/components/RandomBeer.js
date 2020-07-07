import React, { Component } from 'react';
import Header from './Header';
import axios from 'axios';


class RandomBeer extends Component {
    state = {
        randomBeer: []
    }

    async componentDidMount() {
        let rand = await axios.get ('https://ih-beers-api2.herokuapp.com/beers/random')
          console.log(rand)
    
          this.setState({
              randomBeer: rand.data
    
          })
      }

      showRandomBeer() {
            return ( 
                    <div key={this.state.randomBeer.name}>
                    <h4>{this.state.randomBeer.name}</h4>
                    <img src={this.state.randomBeer.image_url} alt='beer_img'/>
                    <p>{this.state.randomBeer.tagline}</p>
                    <p>{this.state.randomBeer.contributed_by}</p>
                    </div>    
            );
    }
    
    render() {
        return (
            <div>

            <Header />
            {this.showRandomBeer()}
            
            </div>
        );
    }
}

export default RandomBeer;