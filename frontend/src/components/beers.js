import React from 'react';
import axios from "axios"
import {Link} from 'react-router-dom'
import Header from './header'

class beers extends React.Component{
    state={
        beers:[],
        query:""
    }

    componentDidMount(){
        axios.get("https://ironbeer-api.herokuapp.com/beers/all")
        .then( response =>{
            this.setState({beers: response.data})
        })
    }

    render(){
        if(this.state.beers.length === 0){
            return <div>Loading ....</div>
        } else {
            return (
            <div>
                <Header />
                {this.state.beers.map ( beer => (
                    <div>
                    <Link to = {`/beers/${beer._id}`}>
                    <h1> {beer.name} </h1>
                    </Link>
                    <img src={beer.image_url} alt={beer.name} width={100}/>
                    <p>{beer.tagline}</p>
                    <p>Created by {beer.name}</p>
                    </div>
                    
                ))}
            </div>
        )}
    }



}


export default beers;