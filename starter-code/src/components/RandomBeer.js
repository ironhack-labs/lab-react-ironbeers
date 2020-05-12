import React, { Component } from "react";
import Header from "./Header";
import { getRandomBeer } from "../services/beerService"

class RandomBeer extends Component {
    state = {
        beer: {},
    }

    componentDidMount() {
        getRandomBeer().then((res) => {
            const { data } = res;
            this.setState({beer: data })
        });
    }

    render() {
        const { image_url, name, tagline, first_brewed, attenuation_level, description, contributed_by } = this.state.beer;

        return (
            <div>
                <Header />
                <div className="single-beer-container uk-width-1-3 uk-align-center">
                    <div className="uk-card uk-card-default">
                        <div className="uk-card-media-top">
                            <img className="uk-height-medium" src={image_url} alt="Single Beer" />
                        </div>
                        <div className="uk-card-body uk-text-left">
                            <h2 className="single-beer">{name} <span className="uk-text-muted">{attenuation_level}</span></h2>
                            <h4 className="single-beer uk-text-muted">{tagline} <span className="uk-text-emphasis uk-text-small uk-text-bold">{first_brewed}</span></h4>
                            <p className="uk-text-emphasis">{description}</p>
                            <p className="uk-text-muted">{contributed_by ? contributed_by.replace(/<\w+>/, "") : "S/N"}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default RandomBeer;