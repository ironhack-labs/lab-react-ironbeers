import React, { Component } from 'react'
import axios from 'axios'
import Navbar from './Navbar'
import {Link} from 'react-router-dom'

export default class Beers extends Component {

  state = {
    beers:[]
  }

  componentDidMount() {
    axios.get('https://ih-beers-api2.herokuapp.com/beers')
    .then(response => {
      console.log(response.data);
      this.setState({
        beers : response.data
      })

    })
  }

    render() {
        return (
            <>
            <Navbar/>
            <div>
            {this.state.beers.map(beer =>
             (
                 <div key = {beer._id}>
                    <img src = {beer.image_url} alt = "image for the beer" style ={{width:40}}/>
                    <div>
                        <Link to = {`/beer/${beer._id}`} >{beer.name}>
                        </Link>
                        <p>{beer.tagline}</p>
                        {beer.contributed_by && (<p>Created by:{beer.contributed_by}</p>)}
                        
                    </div>
                </div>
             )

            )}
                
            </div>
            </>
        )
    }
}
