import React, { Component } from 'react'
import Link from 'react-router-dom/Link';
import Nav from '../Navbar/Nav.js'
import axios from "axios";



class AllBeers extends Component {
  constructor() {
    super()
    this.state = { listOfBeers: null };
  }

  getAllBeers = () =>{
    axios.get("https://ironbeer-api.herokuapp.com/beers/all")
    .then(responseFromApi => {
      this.setState({
        listOfBeers: responseFromApi.data
      })
    })
  }

  componentDidMount() {
    this.getAllBeers();
  }


  render () {
      
    return this.state.listOfBeers ?
            (<div>
                <div>
                    {this.state.listOfBeers.map((beer) => {
                        return (
                            <div >
                                <img src={beer.image_url} alt="imgbeer" />
                                <Link to={`/allBeers/${beer._id}`}><h1>{beer.name}</h1></Link>
                                <h2>{beer.tagline}</h2>
                                <p>{beer.name}</p>
                                <p>author: {beer.contributed_by}</p>
                            </div>
                        )
                    })
                    }
                </div>
            </div>)
            :
            (
                <p>Loading...</p>
            )
    }
}

export default AllBeers;