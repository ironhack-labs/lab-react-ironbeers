import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../header/Header';
import beersService from '../../services/beers-service'



class ListBeers extends Component  {        
        state = {
                beers: []                
            }
        
            componentDidMount() {
                beersService.list()
                    .then(beers => this.setState({ beers }))
                    .catch(error => console.log(error))
                 
            }


            render() {
               console.log(this.state.beers[0])
        return (
              
                <div>
                        <section>
                                <Navbar />
                        </section>

                        <div>
                                {this.state.beers.map( beer => (
                                        <div className="card justify-content-md-center" >
                                        <img src={beer.image_url} style= {{width:100}} className="card-img-top " alt="..."/>
                                        <div className="card-body">

                                                <Link to={`/beers/${beer._id}`}                                                
                                                        >

                                          <h5 className="card-title">{beer.name}</h5>
                                                </Link>
                                                
                                          <p className="card-text">{beer.tagline}</p>
                                          <p className="card-text">{beer.contributed_by}</p>                                         
                                        </div>
                                      </div>
                                         ))}

                                                                
                        </div>
                </div>
        )
        }
}

export default ListBeers
