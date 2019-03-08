import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import NavBar from './NavBar'

class BeerList extends Component {
    state={
        beerlist:[],
    }

    getAllBeers = () => {
        fetch("https://ironbeer-api.herokuapp.com/beers/all")
        .then(responseFromApi => {
            responseFromApi.json().then(json => {
                this.setState({beerlist:json})
            });
        });
    }

    componentDidMount(){
        this.getAllBeers();
    }

    render(){
        return(
            <div className="container">
            <NavBar/>
            {this.state.beerlist.map((beer, index) => {
                return(
                    <div key={beer.id} className="info-sigle">
                        
                        <div className="row">
                        <div className="col-4">
                            <img className="img-beer" src={beer.image_url} alt={beer.name}/>
                        </div>
                        <div className="col-8">  
                           <Link to={`/single/${beer._id}`}>
                           <h3>Name: {beer.name}</h3>
                           </Link>
                            
                            <h4>{beer.tagline}</h4>
                            <p>contributed by: {beer.contributed_by}</p> 
                        </div> 
                        </div>
                    </div>
                )    
            })}
                          
            </div>
        )
    }
};

export default BeerList;