import React from 'react'
import {Link} from "react-router-dom";


class Beerbox extends React.Component {
    constructor() {
        super()

        this.state = {
            
        }
    }

    render() {
        return (
            <Link to="/beers/:beerId">
                <div>
                    <img src={this.props.image} alt=""/>
                    <h2>{this.props.name}</h2>
                    <p>{this.props.tagline}</p>
                    <p>Created by: {this.props.contri}</p>
                </div>
            </Link>
        )
    }
}

export default Beerbox
