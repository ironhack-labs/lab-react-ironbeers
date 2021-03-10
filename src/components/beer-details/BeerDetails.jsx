import axios from 'axios';
import React from 'react';
import Navbar from '../navbar/Navbar';
import { Link } from 'react-router-dom';

class BeerDetails extends React.Component {

    state = {
        beer: {}
    }

    componentDidMount() {
        axios.get(`https://ih-beers-api2.herokuapp.com/beers/${this.props.match.params.id}`)
            .then(beer => {
                this.setState({ beer: beer.data })
            })
            .catch(error => console.error(error))
    }

  render() {
      const { beer } = this.state;
    return (
        <div>
        <Navbar />
        <div className="container">
            <div className="row my-3 align-items-center">
              <div className="col-12 col-lg-3 d-flex justify-content-center">
                <img style={{ width: '6rem' }} src={beer.image_url} alt={beer.name} />
              </div>
              <div className="col-12 col-lg-9 my-3">
                <div className="d-flex justify-content-between">
                    <h2>{beer.name}</h2>
                    <p className="text-muted fw-bold fs-4">{beer.attenuation_level}</p>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                    <h5 className="text-muted">{beer.tagline}</h5>
                    <p className="text-muted fw-bold fs-4">{beer.first_brewed}</p>
                </div>
                <p className="fw-bold">{beer.description}</p>
                <p className="text-muted fw-bold">{beer.contributed_by}</p>
                <Link className="btn btn-primary my-5" to='/beers'>Back to Beers</Link> 
              </div> 
            </div>
        </div>
      </div>
    )
  }
}

export default BeerDetails;
