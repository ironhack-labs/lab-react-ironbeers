import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import Header from './Header';
import 'bulma/css/bulma.css';


export default class AllBeers extends Component {
    state = {
        beers: [],
    }

    componentDidMount() {
        axios
          .get('https://ih-beers-api2.herokuapp.com/beers')
          .then((allBeers) => {
            this.setState({ beers: allBeers.data });
          })
          .catch((err) => console.log(err));
      }

    render() {
        return (
            <div>
                <h1><Header/></h1>
                {this.state.beers.map(beer => {
                    return (<div key={beer._id} className='is-inline-flex'><Link to={`/beers/${beer._id}`}><div className='box mb-1' >
                        <h2 className='is-medium'>{beer.name}</h2>
                        <img style={{height: '100px'}} src={beer.image_url} alt='beer'/>
                        <p>{beer.tagline}</p>
                        <p>Contributed by: {beer.contributed_by}</p>
                    </div></Link></div>)
                })}
            </div>
        )
    }
}
