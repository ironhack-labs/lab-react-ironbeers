import React from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';


class RandomBeer extends React.Component {
    state={
        randomBeer: null
    }
/*here we use the axios get request again as the api provides an end route for random 
beers so instead of using the props from the main app where we would have to right a function 
to loop over all the beers and get a random beer here we can just use the end point 
and make a get request on the random beer */
    componentDidMount = () => {
        axios.get(`https://ih-beers-api2.herokuapp.com/beers/random`).then((res) => {
         
          this.setState({
            randomBeer: res.data,
          });
        });
      };

/*here just checking to make sure that the state is set to response date 
from the get request to random beer, if not then return null, else return 
the info on the beers */
    render() {
        if (!this.state.randomBeer) {
            return null
        }
    
        return (
    
    
            <div>
                 <Link to="/">Home</Link>
                 <div>
         <img src={this.state.randomBeer.image_url} alt=""/>
        <h2>{this.state.randomBeer.name}</h2>
        <h3>{this.state.randomBeer.tagline}</h3>
        <h4>{this.state.randomBeer.first_brewed}</h4>
        <h4>{this.state.randomBeer.attenuation_level}</h4>
        <h4>{this.state.randomBeer.description}</h4>
        <h4>{this.state.randomBeer.contributed_by}</h4>
            </div>
            </div>
          )
        
    }
}

export default RandomBeer
