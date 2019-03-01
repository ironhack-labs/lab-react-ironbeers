import React from 'react';
import axios from 'axios'

class detail extends React.Component{
    state= { 
        beers :[]
    }
    // componentDidMount(){
    //     axios.get("https://ironbeer-api.herokuapp.com/beers/single")
    //     .then( response =>{
    //         this.setState({beers: response.data})
    //     })
    // }
    return (){
        axios.get("https://ironbeer-api.herokuapp.com/beers/single/:id")
    }
    render(){
        if(this.state.beers.length === 0){
            return <div>Loading ....</div>
        } else if (this.state.beers.filter (beer => beer._id === `${beers._id}`)){
                    return (
                        <div>
                        <h1> {this.state.beer.name} </h1>
                        <img src={this.state.beer.image_url} alt={this.state.beer.name} width={100}/>
                        <p>{this.state.beer.tagline}</p>
                        <p>Created by {this.state.beer.name}</p>
                        </div>
                    )
                }
            
    }
}
