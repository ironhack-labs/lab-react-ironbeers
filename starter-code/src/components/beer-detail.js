import React, { Component } from 'react';
// import axios from 'axios';
import Navbar from './nav';
import {getOneBeer} from '../utils/beer'


class BeerDetail extends Component {
    constructor() {
        super()

        this.state = {
            theBeer: {}     
        }
    }

    componentDidMount() {
        debugger
        let theId = this.props.match.params.id;
        getOneBeer(theId)
        .then(response => {
            let tempBeer = {...response.data}
            if (response.data.first_brewed) {
                tempBeer.first_brewed = tempBeer.first_brewed.slice(0,10)
            }    
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
                            <p >{this.state.theBeer.first_brewed}</p>
                        <br/>
                        <h6 className="subtitle is-6">{this.state.theBeer.contributed_by}</h6>
                    </div>
                </div>

            </div>
        )
  
    }
}





export default BeerDetail;
