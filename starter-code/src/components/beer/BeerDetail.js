import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'

class BeerDetail extends Component {
  state={
    beer:{}
  }
  componentDidMount() {
    axios
      .get(`https://ih-beer-api.herokuapp.com/beers/${this.props.match.params.id}`)
      .then(({ data }) => {
        this.setState({ beer: data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const { beer } = this.state;
    return (
      <div>
        <div className="menu bg-primary">
          <Link className="text-light" to="/"><FontAwesomeIcon icon={faHome} size="2x"/></Link>
        </div>
        <div className="row">
          <div className="col-md-4 col-12">
            <img className="detail-image" src={beer.image_url} alt={beer.name}/>
          </div>
          <div className="col-md-5 col-12 detail-info">
            <div className="clearfix">
              <h2 className="float-left">{beer.name}</h2>
              <small className="float-right">{beer.attenuation_level}</small>
            </div>
            <div className="clearfix">
              <p className="float-left">{beer.tagline}</p>
              <small className="float-right">{beer.first_brewed}</small>
            </div>
            <p>{beer.description}</p>
            <small>{beer.contributed_by}</small>
          </div>
        </div>
      </div>
    )
  }
}

export default BeerDetail;
