import React, { Component } from 'react';
import {Link} from 'react-router-dom';

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
            <div>
            {this.state.beerlist.map((beer, index) => {
                return(
                    <div key={beer.id}>
                        <img src={beer.image_url} alt={beer.name}/>
                           
                           <Link to={`/single/${beer._id}`}>
                           <h3>{beer.name}</h3>
                           </Link>
                            
                            <p>{beer.tagline}</p>
                            <p>{beer.contributed_by}</p> 
                    </div>
                )    
            })}
                          
            </div>
        )
    }
};

export default BeerList;