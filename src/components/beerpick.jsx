import axios from 'axios';
import React from 'react';
import Navbar from '../navbar/Navbar';
import { Link } from 'react-router-dom';


class BeerPick extends React.Component {

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
    const { beers } = this.state;
    return (
        <div className="container">
            <div className="mt-5"  >
              <img src={beer.image_url} alt="Beer picture" />
              <h2 className="mt-4" >{beer.name}</h2>
              <h3 className="mt-2">{beer.tagline}</h3>
              <h4 className="mt-2">{beer.contributed_by}</h4>
              <h4 className="mt-2">{beer.description}</h4>
              </div>
        </div>
    )
}
}
export default BeerPick;
