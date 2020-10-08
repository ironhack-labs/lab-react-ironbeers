import React from 'react';
import beersAPI from '../api/beersAPI';
import Header from '../components/Header';

class OneBeer extends React.Component {
  state = {
    beer: null,
  };

  componentDidMount() {
    beersAPI
      .getOne(this.props.match.params.id)
      .then((oneBeer) => {
        this.setState({
          beer: oneBeer.data,
        });
      })
      .catch((error) => console.log(error));
  }
  render() {
    return (
      <div>
        <Header />
        <h1>Details beer</h1>
        <div className="row-beer">
          {this.state.beer && (
            <>
              <img src={this.state.beer.image_url} alt="beer pic" />

              <h2>{this.state.beer.name}</h2>
              <p>{this.state.beer.tagline}</p>
              <p>{this.state.beer.first_brewed}</p>
              <p>{this.state.beer.attenuation_level}</p>
              <p>{this.state.beer.description}</p>
              <p>
                <strong>Created by: </strong>
                {this.state.beer.contributed_by}
              </p>
            </>
          )}
        </div>
      </div>
    );
  }
}

export default OneBeer;
