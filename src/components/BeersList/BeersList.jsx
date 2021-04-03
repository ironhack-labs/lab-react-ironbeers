import React from 'react';
import './BeersList.css'
import NavBar from '../NavBar/NavBar'
import {Component} from 'react'
import axios from 'axios'
import {Link} from "react-router-dom"

class BeersList extends Component {

    state={
        data: null,
        loading: true
    }

    componentDidMount() {
        axios.get(`https://ih-beers-api2.herokuapp.com/beers`)
        .then(res => {
          const gottenData = res.data
          this.setState({
            data: gottenData,
            loading: false
          } 
          )
        })
        
      }

    render(){
        return (
            <div className='BeersList'>
                <NavBar /> 
                {this.state.loading ? (<h1>...loading</h1>) : 
                <div className='list__wrapper container'>
                    
                        {this.state.data.map((beer) => (
                            <Link to={`/beers/${beer._id}`}  className='card__wrapper'>
                            <div className="row mx-5 my-5" key={beer._id}>
                                <div className="column " >
                                    <img src={beer.image_url} alt='beer' height='200'/>
                                </div>
                                <div className="column mx-5 d-flex flex-column align-items-start justify-content-center" >
                                    <h3>{beer.name}</h3>
                                    <h5>{beer.tagline}</h5>
                                    <p><b>Created by:</b>{beer.contributed_by}</p>
                                </div>
                            </div>
                            </Link>
                        ))}
                    
                </div>
                
                }
                
            </div>
        )
    }
    
}

export default BeersList;