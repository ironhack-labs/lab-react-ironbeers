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
        // if (this.props.match) {
            theId = this.props.match.params.id;
        // } else {
        //     theId = this.props.beer._id
        // }
        axios.get(`https://ih-beers-api.herokuapp.com/beers/${theId}`)
        .then(response => {
            let tempBeer = {...response.data}
            // tempBeer.first_brewed = tempBeer.first_brewed.slice(0,10)
            console.log(response)
            this.setState({theBeer: tempBeer})
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

                <div className="card">
                    <div className="card-image">
                        <figure className="image">
                        <img src={this.state.theBeer.image_url} alt="beer"/>
                        </figure>
                    </div>
                    <div className="card-content">
                        <div className="media">
                            
                            <div className="media-content">
                                <p className="title is-4">{this.state.theBeer.name}</p>
                                <p className="subtitle is-6">{this.state.theBeer.tagline}</p>
                                <p className="subtitle is-6">{this.state.theBeer.attenuation_level}</p>
                            </div>
                        </div>

                        <div className="content2">
                            {this.state.theBeer.description} 
                            
                        </div>
                        <time >{this.state.theBeer.first_brewed}</time>
                        <br/>
                        <h6 className="subtitle is-6">{this.state.theBeer.contributed_by}</h6>
                    </div>
                </div>

            </div>
        )
  
    }
}





export default BeerDetail;
