import React from 'react';
import axios from 'axios';
import Header from './Header';

class BeerDetails extends React.Component {
  state = {
    beer: null,
  };

  componentDidMount() {
    const id = this.props.match.params.id;
    axios
      .get('https://ih-beers-api2.herokuapp.com/beers/' + id)
      .then((res) => {
          console.log(res.data)
        this.setState({ beer: res.data });
      })
      .catch((err) => console.log(err));
  }

  render() {
    if (!this.state.beer) {
      return ( <div>
          <Header/>
      <div>Loading ....</div>
      </div>);
    }
    return (
      <div>
        <Header />
        <h1>Beer details</h1>

        <h3>Name : {this.state.beer && this.state.beer.name}</h3>
        {this.state.beer && (
          <img style={{width:'10%'}} src={this.state.beer.image_url} alt={this.state.beer.name} />
        )}
        {this.state.beer && <p>Description : {this.state.beer.description}</p>}
        {this.state.beer && <p> Brewed :{this.state.beer.first_brewed}</p>}
        {this.state.beer && (
          <p> Attenuatio level : {this.state.beer.attenuation_level}</p>
        )}
        {this.state.beer && (
          <p> Contributed by: {this.state.beer.contributed_by}</p>
        )}
        {this.state.beer && <p>{this.state.beer.tagline}</p>}
      </div>
    );
  }
}
export default BeerDetails;
