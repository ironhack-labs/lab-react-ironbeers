import React, { Component } from 'react'
import Header from './Header'
import axios from 'axios';

export class RandomBeer extends Component {
   constructor(props){
       super(props)
       this.state={
           randomBeer:{}
       }
   }
   componentDidMount(){
       axios.get('https://ih-beers-api2.herokuapp.com/beers/random')
       .then((response)=> {
           this.setState({
               randomBeer: response.data
           })
       })
   }
   
   render() {
        return (
            <div>
                <Header/>

                <h1>Random Beer</h1>
                
                <img style={{height:"400px"}} src={this.state.randomBeer.image_url}/>
                <h2>{this.state.randomBeer.name}</h2>
                <h3>{this.state.randomBeer.tagline}</h3>
                <p>First brewed: <b>{this.state.randomBeer.first_brewed}</b></p>
                <p>Atenuation level: {this.state.randomBeer.attenuation_level}</p>
                <h4><u>Description</u></h4>
                <p>{this.state.randomBeer.description}</p>
                <p>Contributed by: <b>{this.state.randomBeer.contributed_by}</b></p>
            </div>
        )
    }
}

export default RandomBeer
