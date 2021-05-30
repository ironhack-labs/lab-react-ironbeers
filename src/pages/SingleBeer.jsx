import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';

class SingleBeer extends React.Component {
  state = {
    beer: null,
  };

  componentDidMount() {
    console.log(this.props);
    const id = this.props.match.params.id;
    console.log(id);

    axios
      .get('https://ih-beers-api2.herokuapp.com/beers/' + id)
      .then((res) => {
        console.log('response : ', res)
        this.setState({
            beer: res.data,
        });
      })
      .catch((err) => console.log(err));
  }

  render() {
    if (!this.state.beer) {
        return(
            <p>loading...</p>
        )
    }
    return (      
      <div>
        <h1>This is single Beer</h1>
        <img src={this.state.beer.image_url} alt="" />
        <h2>{this.state.beer.name}</h2>
        <p>{this.state.beer.tagline}</p>
        <p>{this.state.beer.first_brewed}</p>
        <p>{this.state.beer.attenuation_level}</p>
        <p>{this.state.beer.description}</p>
        <p>{this.state.beer.contributed_by}</p>

      </div>
    );
  }
}

export default SingleBeer;
