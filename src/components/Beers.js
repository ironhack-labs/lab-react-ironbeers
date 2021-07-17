import React, { Component } from 'react';
import Nav from './MyNav';
import axios from 'axios';
import {Link} from 'react-router-dom';

class Beers extends Component {

    state = {
        beers: []
      }
    
    async componentDidMount() {
        try {
            let response = await axios.get('https://ih-beers-api2.herokuapp.com/beers')
            console.log(response.data, 'hello')
            this.setState({
            beers: response.data
          })
        }
        catch(error) {
          console.log('Failed to fetch beers ', error)
        }
      }

    render() {
        const {beers} = this.state
        return (
            <div>
                <Nav />
                <h2>Beers</h2>
                {
                    beers.map((beer, i) => {
                        return <div key={i}>
                                    <img src={beer.image_url} style={{width: '50px'}}/>
                                    <Link to={`/all-the-beers/${beer._id}`}>{beer.name}</Link>
                                    <p>{beer.tagline}</p>
                                    <p>Contributor: {beer.contributed_by} </p>

                        </div>
                    })
                }
            </div>
        )
    }
}

export default Beers;