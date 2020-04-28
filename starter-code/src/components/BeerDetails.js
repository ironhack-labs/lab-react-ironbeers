import React from 'react'
import { Link } from "react-router-dom";
import axios from 'axios'

class BeerDetails extends React.Component {
    render(){
        return(
            <div>
                <img src={this.props.image_url} style={{height: "200px", marginTop: "25px"}}/>
                <h1>{this.props.name}</h1>
                <p>{this.props.tagline}</p>
                <p>{this.props.description}</p>
                <p>{this.props.contributed_by}</p>
            </div>
        )
    }
}

export default BeerDetails;