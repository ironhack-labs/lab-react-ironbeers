import React, { Component } from "react";
import Header from "./Header";
import { getBeer, deleteBeer } from "../services/beerService"

class SingleBeer extends Component {
    state = {
        beer: {},
    }

    componentDidMount() {
        const { id } = this.props.match.params;
        getBeer(id).then((res) => {
            this.setState({ beer: res.data })
        })
    }

    // handleClick = () => {
    //     const { beer } = this.state;
    //     console.log(beer);
    //     deleteBeer(beer.name).then((res) => {
    //         console.log(res);
    //     })
    //         .catch((err) => {
    //             console.log(err);
    //         })
    // }

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
                            {/* <button onClick={this.handleClick}>Delete</button> */}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SingleBeer;