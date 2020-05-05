import React, { Component } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import  {NavBar}  from './NavBar';


export default class ListBeers extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             listOfBeers: [],
        }
        this.getAllBeers = this.getAllBeers.bind(this)
    }

    getAllBeers() {
        axios.get(`https://ih-beers-api2.herokuapp.com/beers`)
        .then(responseFromApi => {
          this.setState({
            listOfBeers: responseFromApi.data
          })
        })
      }
    
      componentDidMount () {
        this.getAllBeers();
      }  

    render() {
        return (
            
            <div>
            <header>
                <NavBar />
            </header>
            <div style={{width: '30%', float:"left"}}>
              { this.state.listOfBeers.map( beer => {
                return (
                  <div key={beer._id}>
                    <img src={beer.image_url} alt={beer.name}/>
                    <Link to={`/beer/${beer._id}`}>
                      <h1>{beer.name}</h1>
                    </Link>
                    <h3>{beer.tagline}</h3>
                    <h4>Created by: {beer.contributed_by}</h4>
                  </div>
                )})
              }
            </div>
          
          </div>
        )
    }
}
