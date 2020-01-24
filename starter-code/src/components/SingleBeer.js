import React, { Component } from 'react';

class SingleBeer extends Component {
    render() {
        const SingleBeer = () => {
            const beers = this.props.beers;

            return beers.find((beer) => {
                return beer._id == this.props.match.params.id;
            })
        }

        return (<div>
            <div className="card-content">
                <div className="media">
                    <div className="media-left">
                        <figure className="image is-128x128">
                            <img id='beer-img' src={SingleBeer().image_url} />
                        </figure>
                    </div>
                    <div className="media-content">
                        <p className="title is-4">{SingleBeer().name}</p>
                        <p className="subtitle is-5">{this.props.tagline}</p>
                        <p className="subtitle is-5">{SingleBeer().first_brewed}</p>
                        <p className="subtitle is-5">{SingleBeer().attenuation_level}</p>
                        <p className="subtitle is-5">{SingleBeer().description}</p>
                        <p className="subtitle is-5">{SingleBeer().contributed_by}</p>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}
export default SingleBeer;