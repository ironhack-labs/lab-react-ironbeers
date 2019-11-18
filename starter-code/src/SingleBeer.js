import React, { Component } from 'react'
import Header from './Header.js';
import Axios from 'axios';


export class SingleBeer extends Component {

    constructor(props){
        super(props);
        this.state = {
        beer:{}
            }  
        }

    componentDidMount() {
        Axios.get(`https://ih-beers-api2.herokuapp.com/beers/${this.props.match.params.beerId}`)
        .then(response => {
          console.log(response.data)
          this.setState({ beer:response.data });
        })
        .catch(error => {
          console.log(error);
        });
      }

      
    render() {



        return (
            <>
            <Header/>

            <div className="single-beer">
            <img src={this.state.beer.image_url} style={{width:"80px"}}/>
            <div style={{width:"400px"}}>
            <div style={{width:"400px", display:"flex", alignItems:"flex-start"}}><h1>{this.state.beer.name}</h1> 
            <p style={{width:"30px", marginTop:"30px", textSize:"200px"}}>{this.state.beer.attenuation_level}</p>
            </div>
            <div style={{width:"400px", display:"flex", alignItems:"flex-start"}}>
            <p>{this.state.beer.tagline}</p>
            <h4>{this.state.beer.first_brewed}</h4>
            </div>
            <h3>{this.state.beer.description}</h3>
            <p>{this.state.beer.contributed_by}</p>
            </div>
            </div>
        
            </>
        )
    }
}

export default SingleBeer
