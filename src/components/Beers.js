import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Header from './Header'

export default class Beers extends Component {
    state = {
        beers:[]
      }

    componentDidMount() {
        console.log('Beers.js - component did mount');
        fetch('https://ih-beers-api2.herokuapp.com/beers')
      .then(res => res.json())
      .then(result => {
        console.log(result)
        this.setState({beers: result})
      })
      .catch(e => console.log(e))
      }
    render() {
        return (
            <div>
                <Header/>
                {this.state.beers.map((beer, key) => 
                 <div key={beer._id}> 

                <Link to={`/beers/${beer._id}`}>
                <img src={beer.image_url} alt={beer.name} /> 
                </Link>

            
                 <p>{beer._id}</p>
                 <p>{beer.name}</p>
                 <p>{beer.tagline}</p>
                 <p>{beer.contributed_by}</p>
                 <hr />
                 </div>
                
                )
    }
            </div>
        )
    }
}
