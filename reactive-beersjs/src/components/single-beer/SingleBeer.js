import React, { Component } from 'react';
import axios from 'axios';
import Header from '../header/Header.js';



class SingleBeer extends Component {
  constructor() {
    super();
    this.state = {
      beer: {}
    }
  }

  componentDidMount() {
    const { params } = this.props.match;

    if (params.id === 'random') {
      axios.get(`https://ironbeer-api.herokuapp.com/beers/random`)
        .then((response) => {
          this.setState({ beer: response.data[0] });
        });
    } else {
      axios.get(`https://ironbeer-api.herokuapp.com/beers/single/${params.id}`)
        .then((response) => {
          this.setState({ beer: response.data });
        });
    }

  }


  render() {

    const { image_url, name, tagline, first_brewed, attenuation_level, description, contributed_by } = this.state.beer;
    return (
      <div style={{ width: '80%', margin: '0 auto' }}>
        <Header />

        < div className="card" style={{ width: '400px' }} >
          <img className="card-img-top" style={{ width: '100px', margin: '0 auto' }} src={image_url} alt={'Beer logo'} />
          <div className="card-body">
            <div>
              <p className="card-text float-left">{name}</p>
              <p className="card-text float-right">{attenuation_level}</p>
            </div>
            <div>
              <p className="card-text float-left">{tagline}</p>
              <p className="card-text float-right">{first_brewed}</p>
            </div>
            <p className="card-text">{description}</p>
            <p className="card-text">{contributed_by}</p>
          </div>
        </div >
      </div>

    )
  }
}

export default SingleBeer;
