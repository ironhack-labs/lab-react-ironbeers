import React, { Component } from 'react'
import Header from './Header'
import axios from 'axios'
import { Link } from 'react-router-dom';

export default class Beers extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
          beers: []
        };
    }

    componentDidMount() {
        axios
          .get('https://ih-beers-api2.herokuapp.com/beers')
          .then(response => {
            this.setState({
                beers: response.data
            })
          })
          .catch(e => console.log(e));
      }

    render() {

        const allBeers = this.state.beers.map(beer =>
          <div key={beer._id}>
              <img src={beer.image_url} alt="Beer logo" style={{width: '10%'}} />
              <Link key={beer._id} to={'/beers/' + beer._id}><h1>{beer.name}</h1></Link>
              <h3>{beer.tagline}</h3>
              <p>{beer.contributed_by}</p>
          </div> 
        )

        return (
            <div>
                <Header />
                <h1>All beers</h1>
                {allBeers}
            </div>
        )
    }
}

