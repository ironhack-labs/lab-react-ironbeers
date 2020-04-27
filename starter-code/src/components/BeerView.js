import React, {Component} from 'react';

class BeerView extends Component {
  render() {
    const {image_url, name, tagline, contributed_by, description} = this.props;
    return (
      <div className={'beerView'}>
        <img src={image_url} alt=""/>
        <h1>{name}</h1>
        <p>{tagline}</p>
        <p>{description}</p>
        <b>{contributed_by}</b>
      </div>
    );
  }
}

export default BeerView;