import React, { Component } from 'react'
import Header from './Header';
import axios from 'axios';
import NewBeer from './NewBeer';
import { Link } from 'react-router-dom';


export default class Beers extends Component {

    state = {
        beers: []
      }
    
      componentDidMount() {
        axios.get('https://ih-beers-api2.herokuapp.com/beers')
          .then(response => {
            // console.log(response.data);
            this.setState({
              beers: response.data
            })
          })
          .catch(err => console.log(err))
      }
    
    

    render() {

        const beers = this.state.beers.map(beer => {
            return (
                
                <div key={beer._id}>
                    <div>
                    <Link to={`/beers/${beer._id}`}>
                    <img style={{ height: '150px' }} src={beer.image_url} />
                    </Link>
                </div>
                <div>
                    <h3>{beer.name}</h3>
                    <h4 style={{color: 'grey'}}>{beer.tagline}</h4>
                    <p>Created by: {beer.contributed_by}</p>
                    {/* <p>{beer._id }</p> */}
                </div>
                <hr/>
                </div>
                    
            )
        })
        
        // console.log(this.state.beers);
        

        return (
            <div>

                <Header />
                
                {beers}

            </div>
        )
    }
}
