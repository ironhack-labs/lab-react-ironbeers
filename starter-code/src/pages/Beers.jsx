import React, { Component } from 'react'
import Header from '../components/Header.jsx'
import {Link} from 'react-router-dom'

import axios from 'axios'

export class Beers extends Component {

    state = {
        beers: [],
        search:""
      };

      handleChange = (e) => {
        this.setState({ search: e.target.value });
      }

      componentDidMount() {
        axios
          .get("https://ih-beers-api2.herokuapp.com/beers")
          .then((apiResponse) => {
              console.log(apiResponse.data)
            this.setState({ beers: apiResponse.data });
          })
          .catch((apiError) => {
            console.log(apiError);
          });
      }

    render() {
        return (
            <div>
                <Header />
                <div className="filter-div">
                <label name="filter">Filter beers</label>
                <input type="text" name="filter" id="filter" onChange={this.handleChange}></input>
                </div>
                {this.state.beers.map(beer=>{
                  if (beer.name.toLowerCase().includes(this.state.search.toLowerCase())){
                    return (<div key = {beer._id}>
                        <img src={beer.image_url} alt=""/>
                        <h1><Link to ={`/beers/${beer._id}`}>{beer.name}</Link></h1>
                        <h2>{beer.tagline}</h2>{}
                        <p>{beer.contributed_by}</p>
                    </div>)
                  }
                })}
                
            </div>
        )
    }
}

export default Beers
