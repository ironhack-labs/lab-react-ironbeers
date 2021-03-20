import axios from 'axios';
import React from 'react';
import Header from '../Components/Header';


class RandomBeer extends React.Component {
    state = {
      beer: null,
    };
  
    componentDidMount() {
      axios
        .get(`https://ih-beers-api2.herokuapp.com/beers/random`)
        .then((resp) => {
          this.setState({ beer: resp.data });
          console.log('yo', resp.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  
    render() {

  
      if (this.state.beer === null) {
        return <div>Wait for it...</div>;
      }
  
      return (
        <div>
          <h1>Random</h1>
          <ul>
            <li>
              <img src={this.state.beer.image_url} alt=""></img>
            </li>
            <li>Name : {this.state.beer.name}</li>
            <li>Tagline :{this.state.beer.tagline}</li>
            <li>First brewed : {this.state.beer.first_brewed}</li>
            <li>Attenuation level : {this.state.beer.attenuation_level}</li>
            <li>Description : <p>{this.state.beer.description}</p></li>
            <li>Contributed by: <p>{this.state.beer.contributed_by}</p> </li>
          </ul>
        </div>
      );
    }
  }

export default RandomBeer
