import React from 'react';
import Header from './Header';

class SingleBeer extends React.Component {
  render() {
    const idBeer = this.props.match.params._id;
    const selected = this.props.allBeers.filter((beer) => {
      return beer._id === idBeer;
    })[0];
    console.log(selected);
    return (
      <div className="SingleBeer">
        {this.props.allBeers.length === 0 ? (
          <h1>Loading..</h1>
        ) : (
          <div>
            <Header />
            <div className="infoSingleBeer">
              <img src={selected.image_url} alt={selected.name} />
              <div>
                <h2>{selected.name}</h2>
                <p>{selected.tagline}</p>
                <p>{selected.first_brewed}</p>
                <p>{selected.attenuation_level}</p>
                <p>{selected.description}</p>
                <p>{selected.contributed_by}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default SingleBeer;
