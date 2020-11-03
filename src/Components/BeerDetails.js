import React, { Component } from 'react'
import axios from 'axios'
import NavBar from '../Components/NavBar'


export default class BeerDetails extends Component {

    state = {
        beerdetail: null
    }

    async componentDidMount(){
        const {id} = this.props.match.params
        const response = await axios.get(`https://ih-beers-api2.herokuapp.com/beers/${id}`)
        this.setState({
            beerdetail: response.data
        })
     }
    

    render() {
       
        if(!this.state.beerdetail){
            return <p>Loading...</p>
        }
        
        console.log(this.state.beerdetail)
        
        return (
            <div key={this.state.beerdetail._id}>
                <NavBar /> 
                <img src={this.state.beerdetail.image_url} alt='bottle' style={{
                    width:'200px',
                    margin:'15px'
                }}/>
                <h1>{this.state.beerdetail.name}</h1> 
                <p>{this.state.beerdetail.tagline}</p>
                <p>{this.state.beerdetail.first_brewed}</p>
                <p>{this.state.beerdetail.description}</p>
                <p>{this.state.beerdetail.attenuation_level}</p>
                <p>Contributed by: {this.state.beerdetail.contributed_by}</p>
            </div>
            
        )
    }
}
