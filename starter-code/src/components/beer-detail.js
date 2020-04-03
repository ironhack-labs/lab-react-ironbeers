import React, { Component } from 'react';
import axios from 'axios';
import Navbar from './nav';


class BeerDetail extends Component {
    constructor() {
        super()

        this.state = {
            theBeer: {}     
        }
    }

    componentDidMount() {
        debugger
        let theId = 0;
        if (this.props.match) {
            theId = this.props.match.params.id;
        } else {
            theId = this.props.beer._id
        }
        axios.get(`https://ih-beers-api.herokuapp.com/beers/${theId}`)
        .then(response => {
            console.log(response)
            this.setState({theBeer: response.data})
        })
        .catch((error)=> {
            console.log(error);
        });
    }

    render() {
        debugger
        return (
           
            <div >
                 <Navbar />
                <div className= "beer-bottle">
                    <div>
                        <img src={this.state.theBeer.image_url} alt=""/>
                    </div>
                    <div className="desc">
                        <h2 >{this.state.theBeer.name}</h2> 
                        <p>{this.state.theBeer.tagline}</p>
                        <p>{this.state.theBeer.first_brewed}</p>
                        <p>{this.state.theBeer.attenuation_level}</p>
                        <p>{this.state.theBeer.description}</p>
                        <p>{this.state.theBeer.contributed_by}</p> 
                    </div>
                    
                </div>
            </div>
        )
  
    }
}





export default BeerDetail;
