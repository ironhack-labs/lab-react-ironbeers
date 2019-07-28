import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class BeerCard extends Component {
    state = {
        beer: {...this.props.beer}
    }

    sendBeerInfo = () => {
        this.props.showBeerModal(this.state.beer)
    }

    render() {
        return(
            <div className="col s12 m4">
                <div className="card horizontal">
                    <div className="card-image">
                        <img className="beer-img" src={this.state.beer.image_url} />
                    </div>
                    <div className="card-stacked">
                        <div className="card-content activator">
                            <span className="card-title grey-text text-darken-4">{this.state.beer.name}</span>
                            <p>{this.state.beer.tagline}</p>
                            <p><b>Created by:</b> {this.state.beer.name}</p>
                            <Link to={`/beers/${this.state.beer._id}`} onClick={this.sendBeerInfo} className="btn-small card-see-details">See details</Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default BeerCard;