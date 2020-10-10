import React from 'react';
import Header from './Header';

class SingleBeer extends React.Component {
  constructor(props) {
    super();
    this.state = {
      beer: {},
    };
  }

  componentDidMount = () => this.idFromBeer();

  idFromBeer() {
    const { id } = this.props.match.params;
    const newArray = this.props.beers.filter((item) => item._id === id);
    this.setState({
      beer: newArray,
    });
  }

  render() {
    return (
        <>
        <Header />
      <article className="beer-card-single">
        <img
          className="imageCardBeer"
          src={this.state.beer[0] && this.state.beer[0].image_url}
          alt="beer img"
        ></img>
        <div className="card-description">
          <h3>{this.state.beer[0] && this.state.beer[0].name}</h3>
          <p className="tagline">
            {this.state.beer[0] && this.state.beer[0].tagline}
          </p>
          <p className="tagline">
            {this.state.beer[0] && this.state.beer[0].description}
          </p>
          <p className="subtext">
            <strong>Created by:</strong>{' '}
            {this.state.beer[0] && this.state.beer[0].contributed_by}
          </p>
        </div>
      </article>
      </>
    );
  }
}

export default SingleBeer;
