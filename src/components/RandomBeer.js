import React from 'react';
import Header from './Header';
import axios from 'axios';

class RandomBeer extends React.Component {
  state = {
    randomBeer: []
  }
componentDidMount(){
  axios.get('https://ih-beers-api2.herokuapp.com/beers/random')
  .then((result)=>{
    console.log(result.data)
    this.setState({...this.state, randomBeer: result.data})
  })
  .catch((error)=>{
   console.log(error)
  })
  
}

  render() {
    const infoState = this.state.randomBeer
    
    /* const allBeers = this.props.allBeers;
    const random = allBeers[Math.floor(Math.random() * allBeers.length)];
    console.log(random); */
    return (
      <div className="SingleBeer">
         {this.state.randomBeer.length === 0 ? (
          <h1>Loading...</h1>
        ) : (
          <div>
            <Header />
            <div className="infoSingleBeer">
              <img src={infoState.image_url} alt={infoState.name} />
              <div>
                <h2>{infoState.name}</h2>
                <p>{infoState.tagline}</p>
                <p>{infoState.first_brewed}</p>
                <p>{infoState.attenuation_level}</p>
                <p>{infoState.description}</p>
                <p>{infoState.contributed_by}</p>
              </div>
            </div>
          </div>
        )} 
      </div>
    );
  }
}

export default RandomBeer;
