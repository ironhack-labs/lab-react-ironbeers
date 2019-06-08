import React from 'react';
import Header from '../Header';
import BeerRandomService from '../services/BeerService';

class BeerRandom extends React.Component {

  state={
    beerRandom:[]
  }

  componentDidMount(){
    BeerRandomService.randomBeer()
      .then(response => this.setState({beerRandom:response}))
  }

  render() {
      return (
        <div>
          <Header/>
            {
              <div className='eachBeerContainer'>
                <div>
                  <img className='img-eachBeer' src={this.state.beerRandom.image_url} alt={this.state.beerRandom.name}></img>
                </div>
                      <div>
                        <h1>{this.state.beerRandom.name}</h1>
                          <h2>{this.state.beerRandom.tagline}</h2>
                            <p>{this.state.beerRandom.description}</p> 
                              <p>{this.state.beerRandom.contributed_by}</p>
                </div>
              </div>
            }
        </div>
      )
  }  
}

export default BeerRandom;