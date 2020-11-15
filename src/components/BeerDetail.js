import React, { Component } from 'react'
import axios from "axios"
import { Link } from 'react-router-dom';

 class BeerDetail extends Component {
     state = {
        beer: {}
     }
     
     componentDidMount() {
         this.getSingleBeer()
     }
     async getSingleBeer() {
         
        
         const { params } = this.props.match;
         console.log(params.id)
         const getASingleBeer = await axios.get(`https://api.punkapi.com/v2/beers/${params.id}`)
         console.log(getASingleBeer.data[0])
       
         this.setState({
            beer: getASingleBeer.data[0]
        })

        console.log(this.state.beer)
    }

    renderBeer() {

        if (this.state.beer.name) {
            return    (
            <div className= "beer-container">

                <img className= "beer-image" src={this.state.beer.image_url} alt=""/>
                <h2>{this.state.beer.name}</h2>
                <h3>{this.state.beer.tagline}</h3>
                <p>{this.state.beer.first_brewed}</p>
                <p>{this.state.beer.attenuation_level}</p>
                <p>{this.state.beer.description}</p>
               
        <p><span>Created by</span> {this.state.beer.contributed_by}</p>
        <Link to= "/beers">Back</Link>
            </div>)
        }
        
     }
    


      
    render() {
        return (
            <div>
                 {this.renderBeer()}
            

        
                
                {/* <button onClick={this.props.history.goBack}>Go Back</button> */}
            </div>
        )
    }
}

export default BeerDetail
