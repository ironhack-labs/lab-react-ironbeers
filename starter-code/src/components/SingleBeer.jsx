import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class SingleBeer extends Component {
    render(){
        return(
            <div className = "beer-container">
                <Link to = {`/beer/${this.props.id}`}>
                    <h1>{this.props.name}</h1>
                    <img src={this.props.pic} alt={this.props.name}/>
                    <p>Tag Line :{this.props.tagline}</p>
                    <p>Created by:{this.props.contributed_by}</p>
                </Link>
            </div>
        )
    }
}

export default SingleBeer;