import React, { Component } from 'react';
import {withRouter} from 'react-router-dom'
import axios from 'axios'

class BeerDetail extends Component {

    state = {
        beer: {}
    }

    componentDidMount = () => {
        let id = this.props.match.params.id
        axios.get(`https://ih-beers-api2.herokuapp.com/beers/random`)
            .then((response) => {
                console.log(response.data)
                this.setState({
                    beer: response.data
                })
            })
    }

  render() {
      const {attenuation_level, contributed_by, description, first_brewed, image_url, name, tagline} = this.state.beer
    return (
      <div className="beer-detail">
        <img src={image_url} alt='a beer' />
        <div>
          <div className="beer-detail-row">
            <h2>{name}</h2>
            <p className="tagline">{attenuation_level}</p>
          </div>
          <div className="beer-detail-row">
            <p className="tagline">{tagline}</p>
            <p><strong>{first_brewed}</strong></p>
          </div>
          <article className="beer-detail-desc"><strong>{description}</strong></article>
          <p className="tagline"><strong>{contributed_by}</strong></p>
        </div>
      </div>
    );
  }
}


export default withRouter(BeerDetail)