import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Beers extends Component {
    constructor(){
        super()
        this.state = {
            beers: [],
        }
    }

    componentDidMount(){
        axios.get('https://ih-beers-api2.herokuapp.com/beers')
        .then((beers) => {
            console.log(beers.data);
            this.setState({
                beers: beers.data,
            })
        })
        .catch((error) => {
            this.setState({
                error: error,
            })
        })
    }
    
    render() {

        return(
            <div className='Beers'>
                   {this.state.beers.map((beer, index) => {
                      return (
                          <Link className='' to={beer._id} key={index}>
                          <div className=''>
                              <img src={beer.image_url} alt='beer'></img>
                          </div>
                          <div className=''>
                              <p>{beer.name}</p>
                              <p>{beer.tagline}</p>
                              <p>{beer.contributed_by}</p>
                          </div>
                          </Link>
                      )
                  })}
                  </div>
        )
    }

}

export default Beers;