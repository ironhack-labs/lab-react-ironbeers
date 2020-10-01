import React, { Component } from 'react'
import { Link } from 'react-router-dom'
 
class CardBeer extends Component {
    constructor() {
        super()
        this.state = { }
    }
 
    render() {
 
        return (
            <>

            <div className="card flex-row flex-wrap">
                <div className="card-header border-0">
                     <img className="card-img" src={this.props.image_url} alt={this.props.name} />
                </div>
                <div className="card-block"> <h5 className="card-title">{this.props.name}</h5>
                    <p className="text-muted">{this.props.tagline}</p>
                    <p>Created by: {this.props.contributed_by}</p>
                    <Link to={`/beers/${this.props._id}`} >Details</Link>
                </div>
                        
            </div>
                
            </>
        )
    }
    }
export default CardBeer