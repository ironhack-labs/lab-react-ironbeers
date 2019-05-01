import React, { Component } from 'react';
import axios from 'axios';

import { Link } from 'react-router-dom';
class BeerDetail extends Component {
  constructor(props) {
    super(props)
    this.state = {
      beer: {}
    }
  }

  componentDidMount() {
    const { params } = this.props.match;
    axios.get(`https://api.punkapi.com/v2/beers/${params.id}`)
      .then(responseFromApi => {
        this.setState({
          beer: responseFromApi.data[0]
        })
      })

  }


  render() {
    const { image_url, name, tagline, contributed_by, first_brewed, attenuation_level, description } = this.state.beer;
    return (
      <div className="container">
        <div className="m-10">
          <figure className="beer has-image-centered">
            <img className="" src={image_url} alt="Image" />
          </figure>
          <div className="box">

            <article className="content">
              <div className="content">
                <div className="is-flex is-justify-between is-size-4 has-text-weight-semibold">
                  <p className="is-marginless">{name}</p>
                  <p className="has-text-grey-light ">{attenuation_level}</p>
                </div>
                <div className="is-flex is-justify-between is-size-7">
                  <p className="has-text-grey-light has-text-weight-semibold">{tagline}</p>
                  <p className="has-text-weight-bold">{first_brewed}</p>

                </div>
                <div className="content">
                  <p className="is-family-secondary has-text-weight-light">{description}</p>
                  <p className="is-family-code">{contributed_by}</p>
                </div>

              </div>
            </article>
            <Link to='/'>Back to beers</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default BeerDetail;
