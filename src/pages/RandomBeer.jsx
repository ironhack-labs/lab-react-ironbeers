import React, { Component } from 'react';
import ironbeerApi from '../api/ironbeerApi';
import Header from '../components/Header';
import '../style/randomBeer.css';
import { Link } from 'react-router-dom';

class RandomBeer extends Component {
  state = {
    randomBeer: null,
  };

  componentDidMount() {
    ironbeerApi
      .getRandomBeer(this.props.match.params.id)
      .then((apiRes) => {
        console.log(this.props)
        console.log(apiRes);
        console.log(this.props.match.params.id)
        this.setState({ randomBeer: apiRes.data });
      })
      .catch((err) => console.log('err'));
  }

  render() {
    return (
      <div>
        <Header />
        <div className="randomBeer">
          {this.state.randomBeer && (
            <div className="oneBeer">
              <img src={this.state.randomBeer.image_url} alt="beer" />
              <div className="infoBeer">
                <h1>{this.state.randomBeer.name}</h1>
                <p>{this.state.randomBeer.attenuation_level}</p>
              </div>
              <div className="infoBeer">
                <p>{this.state.randomBeer.tagline}</p>
                <p>{this.state.randomBeer.first_brewed}</p>
              </div>
              <p>{this.state.randomBeer.description}</p>
              <p>{this.state.randomBeer.contributed_by}</p>
            </div>
          )}
        </div>

        <Link to="/beers">Beers</Link>
      </div>
    );
  }
}

export default RandomBeer;
