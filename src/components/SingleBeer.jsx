import React from 'react'
import axios from 'axios'
import NavBar from './NavBar'

class SingleBeer extends React.Component{

    state = {
        beer: null
      };
    
    componentDidMount(){

        const id = this.props.match.params.id;

      axios
        .get(`https://ih-beers-api2.herokuapp.com/beers/${id}`)
        .then((response) => {
    
          this.setState({beer : response.data })
    
        })
        .catch((error) => {
          console.log(error)
        });
    };

    render(){

        if (this.state.beer === null) {
            return <div>Loading...</div>;
          }
    return (
        <div>
            
        <NavBar></NavBar>

        <div className="beer">
            <img src={this.state.beer.image_url}></img>
            <h2>{this.state.beer.name}</h2>
            <p>{this.state.beer.tagline}</p>
            <p>{this.state.beer.first_brewed}</p>
            <p>{this.state.beer.attenuation_level}</p>
            <p>{this.state.beer.description}</p>
            <p>{this.state.beer.contributed_by}</p>

        </div>

        </div>
    )

    }
}

export default SingleBeer
