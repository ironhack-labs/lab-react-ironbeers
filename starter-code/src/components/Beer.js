import React, { Component } from 'react';

class Beer extends Component {

    render() {
        return <div id="cardBeer" className="card  is-4by3">
            <div className="card-content">
                <div className="media">
                    <div className="media-left">
                        <figure className="image is-128x128">
                            <img id='beer-img' src={this.props.img} />
                        </figure>
                    </div>
                    <div className="media-content">
                        <p className="title is-4">{this.props.name}</p>
                        <p className="subtitle is-5">{this.props.tagline}</p>
                        <p className="subtitle is-6"> Created by: {this.props.name}</p>
                    </div>

                </div>

            </div>


        </div>
    }
}

export default Beer;